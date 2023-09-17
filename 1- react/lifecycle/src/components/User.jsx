import React, { useState, useEffect } from 'react';

const User = () => {
  const [page, setPage] = useState(1);
  const [todo, setTodo] = useState({});

  // sayfanın değişimi izleme
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${page}`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [page]);

  return (
    <div>
      <h1>Yapılcak: {todo.title}</h1>
      <h3>Yapıldı mı: {todo.completed ? 'Evet' : 'Hayır'}</h3>
      <button
        onClick={() => {
          if (page === 1) return;
          setPage(page - 1);
        }}
      >
        Azalt
      </button>
      <span>Sayfa: {page}</span>
      <button onClick={() => setPage(page + 1)}>Arttır</button>
    </div>
  );
};

export default User;
