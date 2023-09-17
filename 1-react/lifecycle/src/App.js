import { useState } from 'react';
import { Sayac } from './components/ClassComp';
import { Paper } from './components/FunctionComp';
import User from './components/User';
import Search from './components/refTest';
import FilterUser from './components/FilterUser';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <h1>Lifeycycle</h1>
      <button onClick={() => setShow(!show)}>
        {show ? 'Gizle' : 'Göster'}
      </button>
      {show && <FilterUser />}
    </div>
  );
}

export default App;
