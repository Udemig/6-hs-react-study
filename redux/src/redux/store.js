/*
  ! store oluşturma:
  * 1. redux kütüphanesinden "createStore" methodu import edilir
  * 2. store içinde tutulacak veriler kategorize edilir ve herbiri için reducer oluşturulur.
  * 3. oluşturulan reducerlar combineReducers methoduyla birleştirilir
  * 4. store'a reducer'lar tanıtılır.
  * 5. oluştutulan store projeye tanıtılır 

*/

import todoReducer from './reducers/todoReducer';
import { createStore } from 'redux';

// store'a reducer'ları tanıtıp oluşturma
const store = createStore(todoReducer);

// projeye tanıtabilmek için export edilir
export default store;
