import { actionTypes } from '../actions/actionTypes';

const initialState = {
  basket: [],
  total: 0,
};

const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //! sepete ekleme aksiyonu çalıştığında
    case actionTypes.ADD_TO_BASKET:
      // elemanın sırasını sepette bulma
      const index = state.basket.findIndex(
        (i) => i.id === payload.id
      );

      if (index >= 0) {
        // sepette varsa miktarı arttırır
        const clone = [...state.basket];

        clone[index].amount++;

        return { ...state, basket: clone };
      } else {
        //  sepete yoksa sepete ekler
        const newArr = state.basket.concat({ ...payload, amount: 1 });

        return {
          ...state,
          basket: newArr,
          total: state.total + payload.price,
        };
      }

    default:
      return state;
  }
};

export default basketReducer;

// if (item.amount > 1) {
//   dispatch(addToBasket({ ...item, amount: item.amount - 1 }));
// }
// artır: () => {
//   // Artır
//   dispatch(addToBasket({ ...item, amount: item.amount + 1 }));
// };
