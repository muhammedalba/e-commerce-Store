import React from 'react'
import UserForm from './UserForm'

function Creatuser() {
  return (
    <>
   <h1>Creatuser</h1>
    <UserForm button={"create"} pathname={"Dashboard/user"} datalink={"http://localhost:8000/users"} fetch={"POST"}   />
    
    </>
  )
}

export default Creatuser