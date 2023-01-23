import { useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';
import './Navigation.css'
import { AuthContext } from './context/auth-context';

const Navigation = ({setIsLoggedIn}) => {

 const auth = useContext(AuthContext)

  return (
    <header className="nav-text-light">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/#intro">The Life Center Church of Ocala</Navbar.Brand>  
        <Navbar.Toggle aria-controls='navbarCollapse' />
        <Navbar.Collapse id='navbarCollapse'>
          <Nav className='navbar-nav ms-auto mb-2 mb-md-0'>
            
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#vision">Vision</NavDropdown.Item>
              <NavDropdown.Item href="#mission">Mission</NavDropdown.Item>
              <NavDropdown.Item href="#leadership">Leadership</NavDropdown.Item>
              <NavDropdown.Item href="#services">Services</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/give">Give</Nav.Link>
          <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          {!auth.isLoggedIn && (
          <Nav.Link as={Link} to="/Login"><i className="fa-solid fa-user"></i></Nav.Link>
          )}
          {auth.isLoggedIn && (
            <button className='btn btn-link' onClick={auth.logout}><i className="fa-solid fa-right-from-bracket"></i></button>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Navigation