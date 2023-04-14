import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

function Layoute() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand ><Link to='/' className='text-dark text-decoration-none'>Izzah Shop</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/' className='text-dark text-decoration-none px-3'>Home</Link>
              <Link to='women' className='text-dark text-decoration-none px-3'>Women</Link>
              <Link to='men' className='text-dark text-decoration-none px-3'>Men</Link>
              <Link to='baby' className='text-dark text-decoration-none px-3'>Baby</Link>
              
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand className='text-right'><Link to='login' className='text-dark text-decoration-none'>Login</Link></Navbar.Brand>
          <Navbar.Brand className='text-right'><Link to='admin' className='text-dark text-decoration-none px-3'>Admin</Link></Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Layoute;