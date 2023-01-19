import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';
import './Navigation.css'


const Navigation = ({isHome, setIsHome, isGivePage, setIsGivePage}) => {
 
  return (
    <header className={isGivePage ? "nav-text-light" : ""}>
    <Navbar expand="lg">
      <Container>{isHome ? (
        <Navbar.Brand href="#intro">The Life Center Church of Ocala</Navbar.Brand>
      ): <Navbar.Brand as={Link} to='/' onClick={()=> {setIsHome(true)}}>The Life Center Church of Ocala</Navbar.Brand> }
        
        <Navbar.Toggle aria-controls='navbarCollapse' />
        <Navbar.Collapse id='navbarCollapse'>
          <Nav className='navbar-nav ms-auto mb-2 mb-md-0'>
          {isHome ? (
            <NavDropdown title="About" id="basic-nav-dropdown">
            <NavDropdown.Item href="#vision">Vision</NavDropdown.Item>
            <NavDropdown.Item href="#mission">Mission</NavDropdown.Item>
            <NavDropdown.Item href="#leadership">Leadership</NavDropdown.Item>
            <NavDropdown.Item href="#services">Services</NavDropdown.Item>
          </NavDropdown>
          ): <Nav.Link as={Link} to="/">Home</Nav.Link> }
            <Nav.Link as={Link} to="/Give">Give</Nav.Link>
            <Nav.Link as={Link} to="/Blog" onClick={() => {setIsHome(false)}}>Blog</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/Login"><i className="fa-solid fa-user"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Navigation