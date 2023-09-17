import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BasketProvider } from './context/BasketContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
     * Provider yani sağlayıcı
     * bütün uygulamayı sarıcak şekilde konumaldnırıyoruz
     * bu sayede uygulamanın içerisindeki bütün bileşenler
     * sağlayıcı tarafın value olarak tanımlanan değerler erişebiliyor
     */}
    <BasketProvider>
      <App />
    </BasketProvider>
  </React.StrictMode>
);
