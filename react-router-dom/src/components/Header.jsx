import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // tümünü seç >  ctrl + shift + l
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Kitap Kurdu
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ürünler">
                Ürünler
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
