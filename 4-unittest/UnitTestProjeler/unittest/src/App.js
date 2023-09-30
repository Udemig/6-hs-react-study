import Scoops from './components/Scoops';
import Toppings from './components/Toppings';
import Form from './components/Form'
import './App.css';

function App() {
  return (
    <div>
      {/*Ürün Çeşitleri*/}
      <Scoops />
      {/*Sos Çeşitleri*/}
      <Toppings />
      {/*Form Barı*/}
      <Form />
    </div>
  );
}

export default App;
