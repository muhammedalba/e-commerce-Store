import React from 'react'
import TopBar from './DaschboardCompoenents/TopBar'
import SideBar from './DaschboardCompoenents/SideBar'
import "./Dashboard.css"
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (<>
<div className=''>

  <TopBar/>
  <div className='dashboare '>
      <SideBar/>
      <div className='' style={{width:"80%"}}>
        <Outlet/>
      </div>
 
  </div>


</div>
  </>)
}

export default Dashboard