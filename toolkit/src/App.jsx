import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CounterPage from './pages/CounterPage';
import Header from './components/Header';
import CrudPage from './pages/CrudPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/crud" element={<CrudPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
