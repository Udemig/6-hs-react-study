import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/actions/productActions';

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex gap-4 justify-content-between p-4 shadow my-5">
      <div className="d-flex align-items-center gap-5">
        <img
          className="rounded"
          style={{ height: '50px', width: '50px' }}
          src={item.image}
        />
        <h4>{item.title.slice(0, 20) + '...'}</h4>
        <h4 className="text-success">${item.price}</h4>
      </div>

      <div className="d-flex gap-3 align-items-center">
        <h6 className="text-nowrap">Miktar: {item.amount}</h6>
        <button className="btn btn-danger">-</button>
        <button
          onClick={() => dispatch(addToBasket(item))}
          className="btn btn-success"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
