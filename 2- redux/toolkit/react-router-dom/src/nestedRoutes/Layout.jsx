import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div
      style={{ height: '85vh' }}
      className="d-flex align-items-center"
    >
      <aside className="bg-dark rounded p-4 d-flex flex-column gap-5 ">
        <Link to="/arabalar/içtenyanma">İçten Yanma</Link>
        <Link to="/arabalar/">Elektrik</Link>
      </aside>

      {/* layout altındaki route'ların layout bileşenini
       neresinde ekrana basılması gerektiğini blirtir */}
      <Outlet />
    </div>
  );
};

export default Layout;
