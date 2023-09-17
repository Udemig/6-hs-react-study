import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/actions/productActions';

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToBasket(item));
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="p-5" style={{ height: '300px' }}>
        <img
          src={item.image}
          className="card-img-top img-fluid h-100"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h4 className="text-success">${item.price}</h4>
        <p className="card-text">
          {item.description.slice(0, 50) + '...'}
        </p>

        <button onClick={handleClick} className="btn btn-primary">
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
