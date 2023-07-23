import { useState } from 'react';

const Counter = () => {
  // state (durum) yönetimi
  // state her değiştiğinde bileşen tekrardan render olur (ekrana basılır)
  // bu sayde ekran state'de tutulan güncel verileri ekran yansıtırız
  // başlangıç değeri > component ekrana geldiği anda sahip olduğu değer
  // const [değişkenİsmi,setDeğişkenİsmi] = useState("başlangıç değeri")
  const [count, setCount] = useState(0);

  //   sayaç state'ine bir ekler
  const addCount = (number) => {
    setCount(count + number);
  };

  // sayaç state'inden bir çıkar
  const minusCount = () => {
    // saycaın değeri 0 ise çalışmasın
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div className="p-4">
      <h1>Sayaç</h1>
      <div className="mt-4">
        <button className="btn btn-danger" onClick={minusCount}>
          Azalt
        </button>
        <span className="lead mx-4">{count}</span>
        <button
          className="btn btn-success"
          onClick={() => addCount(10)}
        >
          Arttır
        </button>
      </div>
    </div>
  );
};

export default Counter;
