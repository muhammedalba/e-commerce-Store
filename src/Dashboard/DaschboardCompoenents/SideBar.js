import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function SideBar() {
  return (
  <>  
  <div className='SideBar'>
  <NavLink  to="user" className=''>user</NavLink>
  <NavLink to="CreatUser" className=''>New user</NavLink>
  <NavLink to="products" className=''>products</NavLink>
  <NavLink to="CreatProduct" className=''>create products</NavLink>
  <NavLink to="UpateProduct" className=''>UPdate products</NavLink>

  </div>

  
  
  
  
  </>
  )
}

export default SideBar