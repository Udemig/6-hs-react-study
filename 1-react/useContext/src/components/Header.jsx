import React from 'react';
import { Link } from 'react-router-dom';
import { IoCartSharp } from 'react-icons/io5';
import { useContext } from 'react';
import { BasketContext } from '../context/BasketContext';

const Header = () => {
  const { items } = useContext(BasketContext);

  // dizideki miktar değerlerini toplama
  const total = items.reduce((total, i) => total + i.amount, 0);

  return (
    <header className="d-flex justify-content-between align-items-center p-4 text-light sticky-top bg-dark">
      <Link to={'/'}>
        <h2>Context Store</h2>
      </Link>
      <Link to={'/sepet'} className="fs-4 relative text-light">
        <IoCartSharp />
        <span className=" mx-2 fs-6 badge bg-danger ">{total}</span>
      </Link>
    </header>
  );
};

export default Header;
