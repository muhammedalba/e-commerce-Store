import React, { useContext } from 'react'
import { user } from '../../Contaxt/Contaxt';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';

function RequirAuth() {
  const users = useContext(user);
  // من اجل التمكن من الرجوع الى الصفحه السابقه
  const location = useLocation()
  const cookie = new Cookies();
  const get = cookie.get("email");
  

  return (
    <>
    {users.Auth.userDetails || get ? (<Outlet/>):(<Navigate state={{from : location}} replace to="/singin" />)}
   
    </>
  )
}

export default RequirAuth;