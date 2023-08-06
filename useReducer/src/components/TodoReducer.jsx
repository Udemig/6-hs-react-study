import { useReducer } from 'react';
import { reducer } from '../state/reducer';

const TodoReducer = () => {
  /*
  !useReducer: react hooklarından bir tanesi
  > state yönetiminin useState ile beraber
  > karmaşık / zor olduğu durumlarda kullanılır
  ? > bizden iki parametre ister
  > > reducer : fonksiyon
  > > initialState : başlangıç değeri 
  ? > bize iki veri dödürür
  > > state : tutulan veri
  > > dispatch : action'ları reducer'a sevk eden method
  */
  const [state, dispatch] = useReducer(reducer, {
    text: '',
    todos: [],
  });

  // input değiştiğinde çalışır
  const handleChange = (e) => {
    // dispatch > aksiyonları reducer'a sevk eder
    dispatch({
      type: 'SET_TEXT',
      payload: e.target.value,
    });
  };

  //formun gönderilmesi
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      text: state.text,
    };

    // aşağıdaki aksiyonu reducer'a sevk etttik
    dispatch({
      type: 'ADD_TODO',
      payload: newTodo,
    });
  };

  //   sil butonuna
  const handleClick = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />
        <button>Gönder</button>
      </form>

      <ul>
        {state.todos.map((i) => (
          <li key={i.id}>
            {i.text}
            <button onClick={() => handleClick(i.id)}>sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoReducer;
