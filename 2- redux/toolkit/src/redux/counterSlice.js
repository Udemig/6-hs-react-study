/*
   ! hem reducer'ları
   ! hem aksiyon'ları
   * farklı dosyaolarda oluşturmak yerine
   * slice dosyasında oluşturucaz
   * 
   ? slice Kurulum:
   * 1- createSlice import
   * 2- gerekli paramtreleri tanımlama
   > > name: slice ismi
   > > initialState: başlangıç state'i
   > > reducers: aksiyonları ve store'e nasıl etkilemleri grektiğini tanımlayan fonksiyonlar
*/

import { createSlice } from '@reduxjs/toolkit';

// store'un bir parçasını oluşturma
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0, deneme: [3, 10] },

  // state'in nasıl değişiceğine karar veren fonksiyonlar
  reducers: {
    increase: (state) => {
      state.count++;
    },

    decrease: (state) => {
      state.count > 0 ? state.count-- : state;
    },

    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

// createSlice veridğimiz fonksiyonlardan yola çıkarak reducer'oluşturur
export default counterSlice.reducer;

// aksiyonl objesi oluşturucak oluşturan fonksiyları export etme
export const { increase, decrease, setCount } = counterSlice.actions;
