import React, { useEffect, useState }  from "react";
import {useParams} from "react-router-dom"
import Card from "../product/Product";
import Navbar from "../Navbar/Navbar"
 function GetproductInCatogree(cat){
  const abi_url = 'https://fakestoreapi.com/products/category';
  const [product, setproduct] = useState([]);
  
  const params = useParams();
  useEffect(()=>{
      
   fetch(`${abi_url}/${params.Catagore}`)
      .then((res)=>res.json())
      .then((data)=>setproduct(data));

  },[params]);

//  }
//   fetch(`https://fakestoreapi.com/products/category/${params.Catagore}`)
//   .then(res=>res.json())
//   .then(data=>setproduct(data))



return(
  <> 
     <Navbar/>     
   { <div className="container-fluid  p-5">
    <div className="row">  
       {  
       product.map((product)=>{
        return (
       <Card product = {product}  key={product.id}  showButton={true}/>  
        );
       })
      }
      
    </div>    
</div> }
  </>
    )
 }

export default GetproductInCatogree;