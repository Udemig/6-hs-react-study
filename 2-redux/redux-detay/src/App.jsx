import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Basket from './pages/Basket';
import Header from './components/Header';
import { getProducts } from './redux/actions/productActions';
function App() {
  const dispatch = useDispatch();

  // bileşenin yükleme anında çalışır
  useEffect(() => {
    // api'dan ürünleri alır
    // ve store'a aktarır
    dispatch(getProducts());
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sepet" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
