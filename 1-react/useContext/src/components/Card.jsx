// abone olma hooku
import { useContext } from 'react';
import { BasketContext } from '../context/BasketContext';
// kullanmak istediğimiz context yapısı

const Card = ({ prod }) => {
  // basketContext'e abone olma
  // bu sayade valu olarak tanımlanaan değerler erişirirz
  const context = useContext(BasketContext);

  return (
    <div className="card py-2" style={{ width: '250px' }}>
      <div
        className="d-flex justify-content-center"
        style={{ height: '120px' }}
      >
        <img className="h-100" src={prod.image} />
      </div>

      <div className="card-body d-flex flex-column justify-content-between">
        <h4>{prod.title}</h4>
        <p className="text-success">$ {prod.price}</p>
        <p>{prod.category}</p>

        <button
          className="w-100"
          onClick={() => context.addToCart(prod)}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
