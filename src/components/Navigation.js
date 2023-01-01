import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap';


const Navigation = ({isHome, setIsHome}) => {
  
  return (
    <Navbar expand="lg" className='fixed-top box-shadow'>
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
            {/* <Nav.Link as={Link} to="/Blogs" onClick={() => {setIsHome(false)}}>Blogs</Nav.Link> */}
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation