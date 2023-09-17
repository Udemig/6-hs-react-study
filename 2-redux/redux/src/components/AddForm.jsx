import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const AddForm = () => {
  // dispatch kurulum
  const dispatch = useDispatch();

  // formun gönderilme olayı
  const handleSubmit = (e) => {
    e.preventDefault();

    // bir todo objesi oluşturma
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      isDone: false,
      date: new Date(),
    };

    // eklenecek veriyi önce api'ye gönder
    axios.post('http://localhost:3000/todos', newTodo).then(() =>
      // api'ye gönderme başarılı olursa
      // reducer'a todoyu store'a eklemesi için emir gönderme
      dispatch({
        type: 'ADD_TODO',
        payload: newTodo,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2">
      <input className="form-control" type="text" />
      <button className="btn btn-lg btn-outline-light">Ekle</button>
    </form>
  );
};

export default AddForm;
