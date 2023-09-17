import { Button, Stack } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase, setCount } from '../redux/counterSlice';

const CounterPage = () => {
  const state = useSelector((store) => store.counterState);
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-column align-items-center gap-4">
      <h1>Sayaç</h1>

      <Stack
        direction="horizontal"
        className="justify-content-center"
        gap={2}
      >
        <Button variant="danger" onClick={() => dispatch(decrease())}>
          Azalt
        </Button>
        <span className="fs-1"> {state.count} </span>
        <Button
          variant="success"
          onClick={() => dispatch(increase())}
        >
          Arttır
        </Button>
        {/* sıfırlama */}
        <Button
          variant="secondary"
          onClick={() => dispatch(setCount(0))}
        >
          Sıfırla
        </Button>
      </Stack>
    </div>
  );
};

export default CounterPage;
