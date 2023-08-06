import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data));
  }, []);

  if (!products) return <h1>Yükleniyor</h1>;

  return (
    <div className="container d-flex flex-wrap justify-content-between gap-5">
      {products.map((prod, i) => (
        <Card key={i} prod={prod} />
      ))}
    </div>
  );
};

export default Products;
