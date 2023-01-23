import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
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
        <Link><li><i className="fa-solid fa-gauge pe-2"></i> Dashboard</li></Link>
        <Link><li><i className="fa-solid fa-message pe-2"></i> Messages</li></Link>
        <Link><li><i className="fa-solid fa-blog pe-2"></i> Blogs</li></Link>
        <Link><li><i className="fa-solid fa-bell pe-2"></i> Manage Alerts</li></Link>
        <Link><li><i className="fa-solid fa-calendar-days pe-2"></i> Manage Events</li></Link>
        <Link><li><i className="fa-solid fa-gear pe-2"></i> Settings</li></Link>
        <Link onClick={logoutHandler}><li><i className="fa-solid fa-right-from-bracket pe-2"></i> Logout</li></Link>
      </ul>
    </div>
    
  )
}

export default DashboardMenu