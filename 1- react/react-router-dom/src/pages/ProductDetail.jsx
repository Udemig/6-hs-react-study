import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate();

  const [detail, setDetail] = useState(null);
  // useParams > URL'den parametreleri almak için kullanılır
  const { productId } = useParams();

  //link etiketiyle beraber gönderilen veriye erişme
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:3060/books/${productId}`)
      .then((res) => setDetail(res.data))
      .catch((err) => {
        // ürün bulunamzasa 404 sayfasına yönlendir
        // ve hata kodunu gönder
        navigate('/undefined', { state: err.response.status });
      });
  }, []);

  if (!detail) {
    return 'Yükleniyor....';
  }

  return (
    <div
      className="p-5 row justify-content-center align-items-center"
      style={{ height: '85vh' }}
    >
      <div className="col-md-6 d-flex  justify-content-center align-items-center">
        <img
          style={{ maxHeight: '400px' }}
          className="img-fluid rounded shadow"
          src={detail.image}
        />
      </div>
      <div className="col-md-6">
        <h1>{detail.title}</h1>
        <p>
          <span className="badge bg-danger me-2">Yazar:</span>
          {detail.author}
        </p>
        <p>
          <span className="badge bg-warning me-2">Açıklama:</span>
          {detail.description}
        </p>
        <p>
          <span className="badge bg-success me-2">Yıl:</span>
          {detail.year}
        </p>
        <p>
          <span className="badge bg-info me-2">Sayfa Sayısı:</span>
          {detail.page}
        </p>
        <p>
          {location?.state?.total} kitap arasından {detail.id}{' '}
          sırasındaki ürün
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
