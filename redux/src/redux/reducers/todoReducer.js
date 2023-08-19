/*
 ! reducer
 * store'un nasıl değişeceğine karar verir
 * reducer normal bir fonksiyondur
 * Ve iki parametre alması gerekir:
 ? a - state: reducer'ın yönettiği verinin son durumu
 ? b - action: store'un nasıl etkilenmesi gerekteiğini belirten obje
 * reducer'da return edilen veri store'un son halidir
*/

/*
  ! initialState > başlangıç değeri
  * state'in uygulama başladığı ilk anda sahip olucağı değerler
  * initialState değeri reducere'a tanımlanmalı (state=initialState)
*/

const initialState = {
  todos: [], //todo'lar başlangıçta boş
  sayi: 0, //todo'ların sayısı sıfır
  isEmpty: true, //todo'lar boş mu? değeri true
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // ekeleme aksiyonu çağrılırsa state'e yeni elemanı ekler
    case 'ADD_TODO':
      // payloadla gelen veriyi state' ekler
      const newTodos = [...state.todos, action.payload];
      // store'u günceller
      return { ...state, todos: newTodos };

    // todo'yu store'dan kaldırır
    case 'DELETE_TODO':
      // silinecek elemanı diziden çıkartma
      const filtred = state.todos.filter(
        (item) => item.id !== action.payload
      );

      return { ...state, todos: filtred };

    // elemanı günceller
    case 'UPDATE_TODO':
      // güncellenicek eleman dışında düğer bütün elemanların olduğu
      // ve güncellenicek elemanında son halini eklediğimiz dizi
      // 1. yöntem
      //   const updatedArr = state.todos.map((item) =>
      //     item.id !== action.payload.id ? item : action.payload
      //   );

      //   2.yöntem
      const clone = [...state.todos];

      const index = clone.findIndex(
        (item) => item.id === action.payload.id
      );

      clone[index] = action.payload;

      return { ...state, todos: clone };

    //  api'dan gelen todoları state'e aktarır
    case 'SET_TODOS':
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

export default todoReducer;

// diziye eleman ekleme
//1- state.todos.concat(action.payload)
//2- [...state.todos, action.payload]
