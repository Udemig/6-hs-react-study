import { useEffect } from 'react';
import AddForm from './components/AddForm';
import ListTodos from './components/ListTodos';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // API'dan todo'ları alma
    axios.get('http://localhost:3000/todos').then((res) =>
      // eğerki istek başarılı olursa bunları redcer'a gönderme
      dispatch({
        type: 'SET_TODOS',
        payload: res.data,
      })
    );
  }, []);

  return (
    <div className="d-flex flex-column gap-5 p-5">
      <h1 className="text-center">REDUX</h1>
      <AddForm />

      <ListTodos />
    </div>
  );
}

export default App;
