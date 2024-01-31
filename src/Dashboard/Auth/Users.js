import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { user } from '../../Contaxt/Contaxt';

 function Users() {
  const data='http://localhost:8000/users';

const[users,setusers]=useState([]);
  useEffect(()=>{
    fetch(`${data}`)
    .then(res=>res.json())
    .then(data=>setusers(data))
    
  },[])
 

// delet
async  function deletUser(id){
   await fetch(`${data}/${id}`,{
      method:"DELETE"
  }).then(e=>console.log(e))
 
      .catch(err=>console.log(err));
    window.location.pathname="Dashboard/user";
  }

  




  return (<>

  
   
   <table className="table m-5">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">firstname</th>
      <th scope="col">lastname</th>
      <th scope="col">email</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user,indix)=>{
      return (
        
    <tr key={user.id}>
      <th scope="row">{indix +1 }</th>
      <td>{user.name.firstname}</td>
      <td>{user.name.lastname}</td>
      <td>{user.email}</td>
      <td onClick={()=>{}}  className='m-1'>
        <Link to={`${user.id}`}  className='btn btn-primary  m-1'>UpdateUser</Link>
      </td>
      <td onClick={()=>{}} className='btn btn-primary  m-1'>view</td>
      <td onClick={()=>deletUser(user.id)} className='btn btn-danger'>delet</td>
    </tr>


      )
    })}

   
 
  </tbody>
</table>

  </>
   
  )
}

export default Users;