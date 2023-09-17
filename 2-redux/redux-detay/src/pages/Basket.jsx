import { useSelector } from 'react-redux';
import BasketItem from '../components/BasketItem';

const Basket = () => {
  const state = useSelector((store) => store.basketState);

  console.log(state);
  return (
    <div className="row">
      <div className="col-md-9">
        {/* ürün yoksa */}
        {state.basket.length === 0 && (
          <p>Sepete henüz ürün eklenemedi...</p>
        )}

        {/* ürün varsa */}
        {state.basket.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
      </div>

      <div className="col-md-3  mt-5">
        <h5 className="mb-4">Toplam: ${state.total}</h5>

        <button className="btn btn-success">
          Alışverişi Tamamla
        </button>
      </div>
    </div>
  );
};

export default Basket;
