
import React,{ useEffect, useState }  from "react";
import {useParams} from "react-router-dom"
import Card from "./Product";

function ProductDetails() {
    const abi_url = 'https://fakestoreapi.com/products';
    const [product, setproduct] = useState([]);
    
    const params = useParams();
    const getprouduct=()=>{
        fetch(`${abi_url}/${params.productID}`)
        .then((res)=>res.json())
        .then((data)=>setproduct(data));
    };

    useEffect(()=>{
        getprouduct()


    },[]);

    // return (<h1>ProductDetails ---{params.productID}-- {product.title}</h1>)
    return (
    <>
   
      <div className="container-fluid ">
         <div className="row">
           <Card product={product} key = {product.id}  showButton={false}/> 
         </div>
    
    </div>
    
    
    </>)
    
}
export default ProductDetails;