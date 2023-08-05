import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../components/Card';

const Products = () => {
  const [books, setBooks] = useState(false);

  // bileşenin ekrana basılma olayını izler
  useEffect(() => {
    axios
      .get('http://localhost:3060/books')
      .then((res) => setBooks(res.data))
      .catch((err) => {}); // hata sayfasına yönlendir
  }, []);

  if (!books) return 'Yükleniyor...';

  return (
    <div>
      <h3 className="mx-5 mt-3">{books.length} kitap bulundu</h3>

      <div id="cards-container">
        {books.map((book) => (
          <Card book={book} total={books.length} />
        ))}
      </div>
    </div>
  );
};

export default Products;
