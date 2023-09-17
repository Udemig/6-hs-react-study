import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const state = useSelector((store) => store.counterState);

  return (
    <Navbar expand="lg" className="bg-black navbar-dark">
      <Container>
        <Navbar.Brand href="#home">Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-4">
            <div className="d-flex gap-2 ">
              <Link className="text-decoration-none" to={'/'}>
                Sayaç
              </Link>
              <Badge>{state.count}</Badge>
            </div>

            <Link className="text-decoration-none" to={'/crud'}>
              CRUD
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
