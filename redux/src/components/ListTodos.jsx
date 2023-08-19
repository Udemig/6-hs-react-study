import { useSelector } from 'react-redux';
import TodoCard from './TodoCard';

const ListTodos = () => {
  // store'a abone olma
  // store'da tutulan bütün verilere erişimi sağlar
  const state = useSelector((store) => store);

  return (
    <div>
      {state.todos.map((todo) => (
        <TodoCard todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;
