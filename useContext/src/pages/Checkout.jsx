import { useContext } from 'react';
import { BasketContext } from '../context/BasketContext';
import { BiSolidDownArrow } from 'react-icons/bi';
import { BiSolidUpArrow } from 'react-icons/bi';

const Checkout = () => {
  const { items, addToCart, removeFromBasket } =
    useContext(BasketContext);

  return (
    <div>
      {items.length == 0 && (
        <h3>Öncelikle sepetinize bir kaç ürün ekleyin</h3>
      )}

      {items.length > 0 &&
        items.map((i, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center p-3 gap-3"
          >
            <img
              className="rounded shadow"
              style={{ height: '100px' }}
              src={i.image}
            />
            <h4>{i.title.slice(0, 15)}</h4>
            <h3>$ {i.price}</h3>
            <p>miktar: {i.amount}</p>
            <div className="fs-2  d-flex  flex-column">
              <BiSolidUpArrow
                role="button"
                className="text-success"
                onClick={() => addToCart(i)}
              />
              <BiSolidDownArrow
                role="button"
                className="text-danger"
                onClick={() => removeFromBasket(i)}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Checkout;
