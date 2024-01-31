import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// import "../compoenents/login/Register.css"
import axios from 'axios';
import UserForm from './UserForm';

function UpdateUser() {
  const[email,setemail] = useState('');
const[firstname,setfirstname] = useState('');
const[lastname,setlastname] = useState('');
const[password,setpassword] = useState('')
  const params = useParams();
  const datalink=`http://localhost:8000/users/${params.UpdateUser}`;
  
  const pathname ="Dashboard/user/";
useEffect(()=>{
  axios
  .get(datalink)
  .then(function (response) {
  
  if(response.status === 200){
    setfirstname(response.data.name.firstname)
    setemail(response.data.email)
    setlastname(response.data.name.lastname)
    setpassword(response.data.password)}
    console.log(response.data,"axiox");
  });
},[])






    





    // 
// 
//  async function res(){
  // const res = await fetch(`${data}`);
  // const user = await res.json();}





// function submit(e){
//    e.preventDefault();  
//    if(firstname !== "" && laststname!=="" && password === rpassword && email!== ""){
//     console.log(true,"form");
//      window.localStorage.setItem("email",email);
//     window.localStorage.setItem("Password",password);
//     window.localStorage.setItem("firstname",firstname);
//     // 
//     // window.localStorage.clear()

// // 
//     axios.put(`${data}${params.UpdateUser}`,{
//       email,password,
//       name:{
//         firstname:firstname ,
//         lastname:laststname
//       }
//      })

//      .then(res =>console.log(res.data))
//      .catch(err => console.log(err)) 
// window.location.pathname="/Dashboard/user";



     

// }

  return (<>

<UserForm button={"update"} pathname={pathname} datalink={datalink} email={email} firstname={firstname} lastname={lastname} password={password}  fetch={"PUT"} hasloclstorage={false} />
  {/* <div  className='container py-5'>
      <form  className="row g-3" onSubmit={(e)=>{submit(e)}}>
        <div className="col-md-4">
          <label htmlFor="firstName" className="form-label">first name: </label>
          <input type="text" className="form-control" onChange={(e)=>{setfirstname(e.target.value)}} id='firstName' defaultValue={firstname}/>
        {  firstname.length <3 && accept &&<p>You must enter a name of at least three letters </p>}
        </div>
        <div className="col-md-4">
          <label htmlFor="lastName" className="form-label">last name</label>
          <input type="text" className="form-control"  onChange={(e)=>setlastname(e.target.value)} id="lastName" defaultValue={laststname}/>
          {/* { laststname.length <3 && accept && <p>You must enter a name of at least three letters </p> } 
        </div>
        <div className="col-md-4">
          <label htmlFor="inputEmail4" className="form-label">email</label>
          <input type="email" className="form-control"onChange={(e)=>setemail(e.target.value)} id='inputEmail4'defaultValue={email}/>
        </div>
        <div className="col-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="text" className="form-control"onChange={(e)=>setPassword(e.target.value)} id="inputPassword4" defaultValue={password} />
        </div>
        <div className="col-6">
          <label htmlFor="inputPassword" className="form-label">Password R</label>
          <input type="text" className="form-control" onChange={(e)=>setRPassword(e.target.value)}id='inputPassword'  />
          {  rpassword !== password && accept  && <p>You must enter a Password of at least three letters </p>}
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">update</button>
        </div>
      </form>
  </div>  */}
















































</>  )
}






















// }    

//    {/* {[users].map((e)=>console.log(e))} */}
 
//   </tbody>
// </table>
//   </>
   
//   )
// }

export default UpdateUser;