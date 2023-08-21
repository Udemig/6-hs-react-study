import axios from 'axios';
import { actionTypes } from './actionTypes';

// Senkron Aksiyon Oluştucu
// (payload yok)
function sayiArti() {
  return {
    type: 'ADD_COUNT',
  };
}

// payload(var)
// parametre olarak alınır
export function addToBasket(product) {
  return {
    type: actionTypes.ADD_TO_BASKET,
    payload: product,
  };
}

//! Asenkron Aksiyon
//* Thunk sayesinde aksiyon dispatch edilmeden önce
//* Apı çağrısı yapar
//* gelen veriye göre dispatch işlemini yapar
export const getProducts = () => (dispatch) => {
  axios
    .get('https://fakestoreapi.com/products')
    .then((res) =>
      dispatch({
        type: actionTypes.SET_PRODUCTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: actionTypes.SET_ERROR,
      })
    );
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Asenkron Aksiyon
// function getProducts() {
//   return async function (dispatch) {
//     // asenkron işlemler

//     // gelen veriyi store'a aktarma
//     dispatch();
//   };
// }

// Kısa yol
// const getProduct = () => (dispatch) => {
//   // asenkton işlemler

//   // reducer'a emir verme
// };
