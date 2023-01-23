import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../../../components/context/auth-context'
import { useNavigate } from 'react-router-dom'


const DashboardMenu = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  
  const logoutHandler = event => {
    event.preventDefault();
    auth.logout()
    navigate('/')
  };
  
  return (
    <div className="dashboard-menu col-lg-2 col-xl-1 vh-100">
      <ul className='dashboard-navigation'>
        <li>&nbsp;</li>
        <NavLink to="/dashboard"><li><i className="fa-solid fa-gauge pe-2"></i> Dashboard</li></NavLink>
        <NavLink to="/messages"><li><i className="fa-solid fa-message pe-2"></i> Messages</li></NavLink>
        <NavLink to="/blogs"><li><i className="fa-solid fa-blog pe-2"></i> Blogs</li></NavLink>
        <NavLink to="/alerts"><li><i className="fa-solid fa-bell pe-2"></i> Manage Alerts</li></NavLink>
        <NavLink to="/events"><li><i className="fa-solid fa-calendar-days pe-2"></i> Manage Events</li></NavLink>
        <NavLink to="/settings"><li><i className="fa-solid fa-gear pe-2"></i> Settings</li></NavLink>
        <Link onClick={logoutHandler}><li><i className="fa-solid fa-right-from-bracket pe-2"></i> Logout</li></Link>
      </ul>
    </div>
    
  )
}

export default DashboardMenu