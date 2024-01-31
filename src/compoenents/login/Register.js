import React from 'react'
import Navbar from '../Navbar/Navbar';
import "./Register.css"

import UserForm from '../../Dashboard/Auth/UserForm';
function Register() {
 return (<>
  <Navbar/> 
<UserForm button={"loding"} pathname={"/"} datalink={"http://localhost:8000/users"} fetch={"POST"} hasloclstorage={true}/>
</>  )
}

export default Register;