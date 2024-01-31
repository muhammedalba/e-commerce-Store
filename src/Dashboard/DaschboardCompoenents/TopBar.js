import React from 'react'
import "../Dashboard.css"
import { Link } from 'react-router-dom'
function TopBar() {
  return (
    <>
    <div  className='TopBar'> 
    
      
      <Link to={"/"}>go to website</Link>
    </div>
    </>
  
  )
}

export default TopBar