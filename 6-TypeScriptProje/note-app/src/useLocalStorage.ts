//custom Hook
//react hooklarına benzer görevler yapar
//veri ve veriyi değiştirecek fonksiyon döndürürler

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  //state tanımlanır ve ilk değer local veri tabnından alınır

  const [value, setValue] = useState<T>(() => {
    //local storage den verileri alma
    const jsonValue = localStorage.getItem(key);

    if (jsonValue === null) {
      //lokalde veri yoksa başlangıç değerini belrileme
      if (typeof initialValue === "function") {
        //eğer başlangıç değeri bir fonksiyon ise fonksiyonun sonucu kullanılır
        return (initialValue as () => T)();
      } else {
        return initialValue;
      }
    } else {
      //Localde veri bulunuyorsa
      return JSON.parse(jsonValue);
    }
  });
  //useEffcet kullanrak value her değiştiğinde locale  kaydetme
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  //bileşenlerde döndürülecek değer ve fonksiyon belrileme
  return [value, setValue] as [T, typeof setValue];
}
