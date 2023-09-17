import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/sepet" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
