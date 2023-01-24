import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './Navigation.css'


const Navigation = () => {


 let location = useLocation()
 location = location.pathname;
 
  return (
    <header className="nav-text-light">
      <nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to="/">The Life Center Church of Ocala</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {location !== "/" && (
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
      </li>
      )}
        {location === '/' && (
          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </Link>
          <ul className="dropdown-menu">
            <li><HashLink className="dropdown-item" to="#vision">Vision</HashLink></li>
            <li><HashLink className="dropdown-item" to="#mission">Mission</HashLink></li>
            <li><HashLink className="dropdown-item" to="#leadership">Leadership</HashLink></li>
            <li><HashLink className="dropdown-item" to="#services">Service</HashLink></li>
          </ul>
        </li>
        )}
        
        <li className="nav-item">
          <Link className="nav-link" to="/give">Give</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login"><i className="fa-solid fa-user"></i></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </header>
  )
}

export default Navigation