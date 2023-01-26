import React, { useContext } from 'react';
import { NavLink, Link, useNavigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../components/context/auth-context';

const DashboardLayout = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = event => {
    event.preventDefault();
    auth.logout();
    navigate('/');
  };

  return (
    <>
      <div className='dashboard-container'>
          <aside className='dashboard-menu h-100'>
            <ul className='dashboard-navigation'>
              <li>&nbsp;</li>
              <NavLink to='/dashboard'>
                <li className='dashboard-nav-list-item'>
                  <i className='fa-solid fa-gauge pe-2'></i> Dashboard
                </li>
              </NavLink>
              <NavLink to='/dashboard/Inbox'>
                <li className='dashboard-nav-list-item'>
                  <i className='fa-solid fa-message pe-2'></i> Inbox
                </li>
              </NavLink>
              <NavLink to='/dashboard/blogs'>
                <li className='dashboard-nav-list-item'>
                  <i className='fa-solid fa-blog pe-2'></i> Mange Blogs
                </li>
              </NavLink>
              <NavLink to='/dashboard/alerts'>
                <li className='dashboard-nav-list-item'>
                  <i className='fa-solid fa-bell pe-2'></i> Manage Alerts
                </li>
              </NavLink>
              <NavLink to='/dashboard/events'>
                <li className='dashboard-nav-list-item'>
                  <i className='fa-solid fa-calendar-days pe-2'></i> Manage
                  Events
                </li>
              </NavLink>
              <NavLink to='/dashboard/settings'>
                <li className='dashboard-nav-list-item'>
                  <i className='fa-solid fa-gear pe-2'></i> Settings
                </li>
              </NavLink>
              <Link onClick={logoutHandler}>
                <li className='dashboard-nav-list-item'>
                  <i className='fa-solid fa-right-from-bracket pe-2'></i> Logout
                </li>
              </Link>
            </ul>
          </aside>
          <div className='dashboard-content'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12 p-5'>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default DashboardLayout;
