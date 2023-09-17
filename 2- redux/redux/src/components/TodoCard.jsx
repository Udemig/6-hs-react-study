import { useDispatch } from 'react-redux';
import axios from 'axios';

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/todos/${todo.id}`).then(() =>
      // reducer'a bir şey silineceğini
      // ve bunun hangi eleman olduğunun haberini verme
      dispatch({
        type: 'DELETE_TODO',
        payload: todo.id,
      })
    );
  };

  const handleUpdate = () => {
    // elemanın isDone değerini tersine çevirme
    const updatedTodo = { ...todo, isDone: !todo.isDone };

    // api'ı güncelleme
    axios
      .put(`http://localhost:3000/todos/${todo.id}`, updatedTodo)
      .then(() =>
        // güncel halini reducer'a gönderme
        dispatch({
          type: 'UPDATE_TODO',
          payload: updatedTodo,
        })
      );
  };

  return (
    <div className="borded shadow-lg p-4 my-5 ">
      <h5>{todo.text}</h5>

      <h6>{todo.isDone ? 'Tamamlandı' : 'Devam Ediyor'}</h6>

      <p>{new Date(todo.date).toLocaleDateString()}</p>

      <button onClick={handleUpdate} className="btn btn-success">
        {todo.isDone ? 'Geri Al' : 'Tamamla'}
      </button>

      <button onClick={handleDelete} className="btn btn-danger mx-4">
        Sil
      </button>
    </div>
  );
};

export default TodoCard;
