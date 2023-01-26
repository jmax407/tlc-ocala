import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom'
import Messages from '../Messages/Messages'
import Blogs from '../Blogs/Blogs'
import Alerts from '../Alerts/Alerts'
import Settings from '../Settings/Settings'
import Events from '../Events/Events'

import { AuthContext } from '../../../components/context/auth-context'


const DashboardContent = () => {
  const auth = useContext(AuthContext)
  return (
    <div className="col-lg-10 padtop100 px-4">
        <div className="row">
            <div className="col-lg-12">
            <h2> Welcome to the Dashboard</h2>
            {/* <Routes>
              <Route path='/dashboard/messages' element={<Messages />} />
              <Route path='/dashboard/blogs' element={<Blogs />} />
              <Route path='/dashboard/alerts' element={<Alerts />} />
              <Route path='/dashboard/events' element={<Events />} />
              <Route path='/dashboard/settings' element={<Settings />} />
            </Routes> */}
            </div>
        </div>
        
    </div>
  )
}

export default DashboardContent