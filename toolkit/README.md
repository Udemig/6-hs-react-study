# Redux Toolkit

- Faydaları:
- Redux'a göre çok daha az kod içeriyor.
- Dahili olarak thunk yanında geliyor
- Devtools eklentisi sayensinde proje geliştiriken sotre'u reducer'ları actionl'ları izaleyebiliyoruz.
- Veri yönetimi daha kolay olucak

# Kurulum

Kütüphaneleler

- - @reduxjs/toolkit
- - react-redux

- Slice:

  - 1- createSlice import
  - 2- gerekli paramtreleri tanımlama
    > > name: slice ismi
    > > initialState: başlangıç state'i
    > > reducers{}: aksiyonları ve store'e nasıl etkilemleri gerektiğini tanımlayan fonksiyonlar

- Store:

  - store.js oluştur
  - `createStore ` yerine `configureStore`
  - reducer'ları ototmatik birleştirir
  - thunk gömülü olarak gelir

- Reducer'ları store'a tanıt
- Store'u projeye tanıt
