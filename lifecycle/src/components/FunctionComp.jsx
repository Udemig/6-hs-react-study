import { useState, useEffect } from 'react';

export const Paper = () => {
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  //1- Bilşenin ekran basılma olayını izler
  //* a- Bileşen ekran ilk geldiğinde çalışacak fonksiyon
  //* b- boş bağımlılık dizisi
  useEffect(() => {
    console.log('Bileşen ekrana basıldı');
  }, []);

  //2- Bileşen ilk ekrana geldiğinde ve belirli bir state her değiştiğinde çalışır
  //* a- Belirli state/state'ler değiştiğinde  çalışacak fonksiyon
  //* b- bağımlılık dizisine en az bir tane state
  useEffect(() => {
    console.log('Sayfa değişti', page);
  }, [page]);

  //3- Bileşen her render olduğunnda(herhangi bir state her değişitiğinde)
  //a- fonksiyon
  useEffect(() => {
    console.log(
      'Bileşen render oldu veya içerisindeki herhangi  bir state değişti'
    );
  });

  //4- Bileşenin ekrandan ayrılma olayını izler (componentWillUnmount)
  //a- fonkiyon içersinde return edilen  fonkiyon
  //b- boş bağımlılık dizisi
  useEffect(() => {
    // bu kısım componentDidMount'a denk gelir
    console.log('Bileşene erkan geldiğinde çalışır');
    // bu kısım componentWillUnmount'a denk gelir
    return () => {
      console.log('Bileşen ekrandan ayrıldığında çalışır');
    };
  }, []);

  return (
    <div>
      <h1>Sayfa: {page}</h1>
      <button onClick={() => setPage(page + 1)}>Sayfa Değiş</button>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Gizle' : 'Göster'}
      </button>
    </div>
  );
};

/*
 ! useEffect: Bileşenin yaşam döngüsünü funtion comp.'da izlememizi sağlar
* Amacı : componentDidMount | componentDidUpdate | componentWillUnmount mehodları yerie kullanılır
* 1- useEffect(()=>{},[])   > componentDidMount
* 2- useEffect(()=>{},[page]) > componentDidUpdate
* 3- useEffect(()=>{}) > her render olduğunda çalışır 
* 4- useEffect(()=>{  return () => { } },[]) > componentWillUnmount
*
*
*

*/
