import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Card from '../components/Card';

const MainPage = () => {
  // store'a abone olma
  // birden fazla reducer'a erişme
  const { productState, basketState } = useSelector((store) => ({
    productState: store.productState,
    basketState: store.basketState,
  }));

  return (
    <div>
      {/* ürünler yoksa loadin bas */}
      {productState.isLoading && <Loading />}

      <div className="d-flex flex-wrap justify-content-center gap-5 p-5">
        {/* ürünler varsa ekrana bas */}
        {productState.products.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
