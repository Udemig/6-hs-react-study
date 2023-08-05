import { Link } from 'react-router-dom';

const Card = ({ book, total }) => {
  return (
    <div className="card shadow rounded p-1">
      <img className="rounded" src={book.image} />
      <div className="card-body">
        <h4>{book.title}</h4>
        <p>Yazar: {book.author}</p>
      </div>
      <Link
        className="btn btn-primary"
        to={`/ürün/${book.id}`}
        state={{ total }}
      >
        Detay Gör
      </Link>
    </div>
  );
};

export default Card;
