import { Link, useNavigate } from 'react-router-dom';

const MainPage = () => {
  // kurulum yapma
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h1 className="text-center">Hoşgeldiniz</h1>
      <img
        className="img-fluid"
        src="https://i.pinimg.com/originals/b9/7d/c2/b97dc288d71e7938c1ce8b7faacdc9ac.gif"
      />
      <p className="lead text-center">
        <span
          onClick={() => navigate('/ürünler')}
          className="text-danger"
        >
          Ürünler Sayfasında
        </span>
        yeni çıkan bütün kitapları görüntüleyebilirsiniz
      </p>
      <Link to="arabalar">Arabalar</Link>
    </div>
  );
};

export default MainPage;
