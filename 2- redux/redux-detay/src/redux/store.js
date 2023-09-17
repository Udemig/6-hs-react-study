import { createStore, combineReducers, applyMiddleware } from 'redux';
import productReducer from './reducers/productReducer';
import basketReducer from './reducers/basketReducer';
import thunk from 'redux-thunk';

// Birden fazla reducer kullandığımız durumlarda
// reducer'ları birleştirip tek bir kök reducer
// haline getirir. store'a kök reducer tanıtılır.
const rootReducer = combineReducers({
  productState: productReducer,
  basketState: basketReducer,
});

// store'u oluşturup export etme
export default createStore(rootReducer, applyMiddleware(thunk));
