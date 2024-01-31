

import React, {useContext, useState } from 'react';
import { user } from '../../Contaxt/Contaxt';
import Cookies from 'universal-cookie';


function UserForm(props) {
    const Newuser = useContext(user);
    const[accept,setaccept]=useState(false);
   
    const[firstname,setfirstname]=useState('');
    const[lastname,setlastname]=useState('');
    const[email,setemail]        =useState('');
    const[password,setPassword]=useState('');
    const[rpassword,setRPassword]=useState('');

            

//   const[accept,setaccept]=useState(false);
//   const[firstname,setfirstname]=useState('');
//   const[lastname,setlastname]=useState('');
//   const[email,setemail]=useState('');
//   const[password,setPassword]=useState();
//   const[rpassword,setRPassword]=useState();



    const datalink = props.datalink;
    // useEffect(()=>{
    //        fetch(`${data}${params.UpdateUser}`)
    //      .then(res=>res.json())
    //      .then(data=>{
    //       setemail(data.email)
    //       setfirstname(data.name.firstname)
    //       setlastname(data.name.lastname)
    //       setPassword(data.password)
    //       console.log(data,"data")}) 
    
    // },[])
    async function submit(e){
        e.preventDefault();
        if(firstname !== "" && lastname !=="" && password === rpassword && email !== ""){
          if( props.hasloclstorage === true){
              window.localStorage.setItem("email",email);
          window.localStorage.setItem("Password",password);
          window.localStorage.setItem("firstname",firstname);
          }
        
           
     
     // 
        // let ress= axios.post(datalink,{
            
        //         email:email,
        //         password:password,
        //         name:{
        //             firstname:firstname,
        //             lastname:lastname
        //         }
            
        //   })
     
        //   .then(res =>console.log(res,":"))
        //   console.log(ress);
            // 
// Navigate(props.pathname);
   try{
   const respons =  await fetch(datalink, 
      { 
        method: props.fetch,
      headers: { 'Content-Type': 'application/json' },          
     body:JSON.stringify({
          email:email,
          password:password,
          name:{ 
          firstname:firstname,
          lastname:lastname
              }
                         })
      })
     .then(respons => respons.json())
       const userDetails = respons;
       Newuser.setauth({userDetails});
       const cookie = new Cookies();
       props.fetch === "POST" && cookie.set("email",userDetails.email)   
       window.location.pathname= props.pathname;   
        // .then(res => res.json())
        // .then(res => )
        // console.log(respons.statusText,"respons");
        // 
        // const userDetails = respons.res;
        
      }catch(error){
        setaccept(true);
        console.log(error,"Error");
      }
      // Newuser.setauth({
        //   email:email,
        //   password:password,
        //   name:{ 
          //   firstname:firstname,
          //   lastname:lastname
          //       }
          //               })   
          
          
          
          
          
          
          
            
          
          
          }else{
            setaccept(true);
          }
}


return (
    <>
    
    <div  className='container py-5'>
      <form  className="row g-3" onSubmit={(e)=>{submit(e)}}>
        <div className="col-md-4">
          <label htmlFor="firstname" className="form-label">first name: </label>
          <input type="text" className="form-control" onChange={(e)=>{setfirstname(e.target.value)}} id='firstname' placeholder={props.firstname}/>
        {  firstname.length <3 && accept &&<p>You must enter a name of at least three letters </p>}
        </div>
        <div className="col-md-4">
          <label htmlFor="lastname" className="form-label">last name</label>
          <input placeholder={props.lastname} type="text" className="form-control"  onChange={(e)=>setlastname(e.target.value)} id="lastname" />
          { lastname.length <3 && accept && <p>You must enter a name of at least three letters </p> }
        </div>
        <div className="col-md-4">
          <label htmlFor="inputEmail4" className="form-label">email</label>
          <input type="email" className="form-control"onChange={(e)=>setemail(e.target.value)} id='inputEmail4'placeholder={props.email}/>
        </div>
        <div className="col-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="text" className="form-control"onChange={(e)=>setPassword(e.target.value)} id="inputPassword4" placeholder={props.password} />
        </div>
        <div className="col-6">
          <label htmlFor="inputPassword" className="form-label">Password R</label>
          <input type="text" className="form-control" onChange={(e)=>setRPassword(e.target.value)}id='inputPassword'  />
          {  rpassword !== password && accept  && <p>You must enter a Password of at least three letters </p>}
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">{props.button}</button>
        </div>
      </form>
  </div> 
    
    
    
    
    
    
    
    
    </>
  )



}

export default UserForm