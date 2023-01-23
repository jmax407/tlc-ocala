import React from 'react'
import './Dashboard.css'
import DashboardMenu from './components/DashboardMenu'
import DashboardContent from './components/DashboardContent'

const Dashboard = () => {
// const auth = useContext(AuthContext)


  return (
    <div className="container-fluid dashboard-container gx-0">
      <div className="row gx-0">
      <DashboardMenu />
      <DashboardContent />
      </div>
    </div>
    
  )
}

export default Dashboard