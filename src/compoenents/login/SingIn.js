import React, { useEffect } from 'react'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import Cookies from 'universal-cookie';
 function SingIn() {
  const data = "http://localhost:8000/users";
  const[email,setemail]=useState('');
  const[Password,setPassword]=useState(0);
  const[accept,setaccept]= useState(false);
  const[user,setuser]=useState([]);

  useEffect(() => {
  axios.get(data)
     .then(users => setuser(users.data))
     .catch(err => console.log(err,"user error")) 
},[])





  return (<>
  <Navbar/> 
    <div className='container py-5'>
        <form className="row g-3" onSubmit={(e)=>{
          e.preventDefault();



          
        if(  email !== "" && Password!=="" ){
          const cookie = new Cookies();
         const some =  user.some((e)=> e.email === email )
        if(some ){
          cookie.set("email",email)
           user.filter((e) =>  window.localStorage.setItem("firstname",e.name.firstname))
         window.location.pathname="/";
        
        }else{
          setaccept(true);
        } 
        //  filter ? (cookie.set("userDetails",filter.id)): setaccept(false);



  
        }else{
          
       setaccept(true);
        }
    
    
        }}>
      
    
          <div className="col-md-4">
            <label htmlFor="inputEmail4" className="form-label">email</label>
            <input type="email" className="form-control"onChange={(e)=>setemail(e.target.value)} id='inputEmail4'/>
            
          </div>
          <div className="col-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="text" className="form-control"onChange={(e)=>setPassword(e.target.value)} id="inputPassword4" />
            
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
            { accept  && <p>wrnog email or password </p>}
          </div>
        </form>
    </div>
    </>  )
}

export default SingIn;