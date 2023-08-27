import { configureStore } from '@reduxjs/toolkit';
import counterState from './counterSlice';
import crudState from './crudSlice';

export default configureStore({
  reducer: {
    counterState,
    crudState,
  },
});

// configure store prametre olarak
// bizden bir option objesi ister
// obje içerine reducer: objsi gönderirir
