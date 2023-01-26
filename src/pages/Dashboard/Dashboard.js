import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

import { AuthContext } from '../../components/context/auth-context';

const Dashboard = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <div className='container-fluid dashboard-container'>
        <div className="row">
          <h2 className='pb-4'>Good morning UserName.</h2>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='dashboard-component-container box-shadow'>
              <h3>Inbox</h3>
              <p>You have 10 New messages.</p>
              <Link>
                Check them now <i className='fa-solid fa-angles-right'></i>
              </Link>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='dashboard-component-container box-shadow'>
              <h3>Alerts</h3>
              <p>Manage Your Active Alerts</p>
              <Link>
                Check them now <i className='fa-solid fa-angles-right'></i>
              </Link>
            </div>
          </div>
        </div>
        <div className='row pt-4'>
          <div className='col-lg-4'>
            <div className='dashboard-component-container box-shadow'>
              <h3>Events</h3>
              <p>You have 3 Upcoming events.</p>
              <Link>
                Manage them now <i className='fa-solid fa-angles-right'></i>
              </Link>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='dashboard-component-container box-shadow'>
              <h3>Blogs</h3>
              <p>Your Last Blog Post was 5 days ago.</p>
              <Link>
                Check them now <i className='fa-solid fa-angles-right'></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
