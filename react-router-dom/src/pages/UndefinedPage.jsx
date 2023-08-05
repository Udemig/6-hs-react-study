import React from 'react';
import { useLocation } from 'react-router-dom';

const UndefinedPage = () => {
  const loc = useLocation();

  return (
    <div className="container">
      <img
        className="img-fluid"
        src="https://miro.medium.com/v2/resize:fit:1400/1*zE2qnVTJehut7B8P2aMn3A.gif"
      />
      <p className="text-center">
        Üzgünüz aradığınız sayfa bulunamadı
      </p>
      {loc.state && (
        <p className="text-center">
          Hata kodunuz{' '}
          <span className="badge bg-danger">{loc.state}</span>
        </p>
      )}
    </div>
  );
};

export default UndefinedPage;
