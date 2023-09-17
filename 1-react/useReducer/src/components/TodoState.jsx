import React, { useState } from 'react';

const TodoState = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  // inputtaki değişimi izler
  const handleChange = (e) => {
    setText(e.target.value);
  };

  //   form gönderilince çalışır
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length < 4) {
      alert('Lütfen 4 karakterden uzun bir içerik giriniz');
      return;
    }

    // id ve text değerine sahip bir obje oluşturma
    const newTodo = {
      id: new Date().getTime(),
      text,
    };

    // yeni todoyu diziye aktarma
    setTodos([...todos, newTodo]);

    // formu temizle
    setText('');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} type="text" />
        <button>Gönder</button>
      </form>

      <ul>
        {todos.map((i) => (
          <li key={i.id}>{i.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoState;
