import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './pages/Products';
import MainPage from './pages/MainPage';
import ProductDetail from './pages/ProductDetail';
import UndefinedPage from './pages/UndefinedPage';
import Layout from './nestedRoutes/Layout';
import ElectricCars from './nestedRoutes/ElectricCars';
import Motor from './nestedRoutes/Motor';

function App() {
  return (
    <BrowserRouter>
      {/* projedeki bütün sayfalrda ortak olarak kullanılır */}
      <Header />
      {/* hangi sayfanın ne zaman ekrana basılacağını belirler */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<Products />} />
        {/* dinamik route tanımlama */}
        <Route path="/ürün/:productId" element={<ProductDetail />} />

        {/* nested iç içe yollar */}
        <Route path="/arabalar" element={<Layout />}>
          <Route index element={<ElectricCars />} />
          <Route path="içtenyanma" element={<Motor />} />
        </Route>

        {/* tanımsız bir sayfaya yönelnirse */}
        <Route path="*" element={<UndefinedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
