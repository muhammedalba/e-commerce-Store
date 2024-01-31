import React from "react";
import { Link } from "react-router-dom";
import Catagore from"../catagore/Catagore";
import { useSelector } from "react-redux";
import logo from"../Images/لقطة شاشة 2023-06-18 170408.png"
import Cookies from "universal-cookie";
function Navbar() {
const cart=  useSelector(state=>state.cart);




const cookie = new Cookies();
const logOut = ()=>{
  window.localStorage.removeItem("firstname");
  window.localStorage.removeItem("Password");
  window.localStorage.removeItem("email");
   cookie.remove("email");
  
  window.location.pathname='/';
}
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light sticky-top ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={logo}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/Dashboard"}>Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">about</Link>
        </li>
        {  window.localStorage.getItem("firstname") ?
        ( <>
           <li className="nav-item">
            <span className="nav-link ">hello : {window.localStorage.getItem("firstname")}</span>
          </li>
          <li className="nav-item">
             <button onClick={logOut} className="btn btn-danger mx-5">exit</button>
          </li>
        
          </>)
          :(<li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            login
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/SingIn" className="dropdown-item">sing in</Link></li>
            <li><Link to="/Register" className="dropdown-item" >Register</Link></li>
         
          </ul>
        </li>)

      
          
          }

        


        <li className="nav-item">
          <Link className="nav-link" to="/cart">cart ({cart.length})</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
        </nav>
        <Catagore/>
        </>
    )
}
export default Navbar;