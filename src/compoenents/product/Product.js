import React from "react";
import '../Cart/Card.css';
import { Link } from "react-router-dom";
// import img1 from './Images/img-1.avif';

import { useDispatch, } from "react-redux";

import {addtoCart}  from"../../rtk/Slices/cartSlice"






function Product(props){
    const {product,showButton} = props;
    // 
    const dispath = useDispatch();


 

// function add(product) {
//   return(

// console.log(product.quantity=1)

//   )
// }



    return(
        <>
      
        <div className="col-sm-12 col-md-4 col-lg-3 p-2  " > 
            <div className="card " > 
              <img src={product.image} className="card-img-top img-fluid p-2" alt=".../"/>
            <div className="card-body h-50 overflow-hidden">
                   <h5 className="card-title overflow-hidden">{product.title} </h5>
                  <p className="card-text overflow-hidden ">{product.description}</p>
                 
                  <p className="m-1 price">price: {product.price}$</p>
                
                  <div className="butons d-fliex">
                </div>
                  <button  onClick={()=> dispath(addtoCart(product))} className="btn btn-primary m-2">Add to cart + </button>
                  {showButton && <Link to={`/product/${product.id}`} className="btn btn-primary my-2">Go somewhere</Link>}
               </div>
             </div>
         </div>
 {/* {console.log(pro)} */}

         </>
     )
 }
 export default Product;
