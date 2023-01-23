import React from 'react'
import './Dashboard.css'
import DashboardMenu from './components/DashboardMenu'

const Dashboard = () => {
// const auth = useContext(AuthContext)


  return (
    <div className="container-fluid dashboard-container gx-0">
      <div className="row gx-0">
      <DashboardMenu />
      </div>
    </div>
    
  )
}

export default Dashboard