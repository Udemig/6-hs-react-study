import { useRef } from 'react';

const Search = () => {
  // ref değeri tanımladığımız elemanları çağırma
  const inputRef = useRef({});
  const headingRef = useRef();

  const handleClick = () => {
    // inputa odaklanır
    inputRef.current.focus();

    // başlığın rengini değiştir
    headingRef.current.style.background = 'red';
    headingRef.current.style.color = 'white';
  };

  return (
    <div>
      <h1 ref={headingRef}>Burada ref deniyorum</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Odakla</button>
    </div>
  );
};

export default Search;

// useRef(): jsx elemanlarının refaransını alır
// js'de bulunan querySelector ve getElementById 'ye benzer bir görev yapar

/*
 * Kullanımı:
 * 1- import {useRef} from "react"
 * 2- refarnsını almak isteğimiz elemana ref özelliği tanımla
 * 3- const REFARANSI_ALINACAK_ELEMAN = useRef()
 */
