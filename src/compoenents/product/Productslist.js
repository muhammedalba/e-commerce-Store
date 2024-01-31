import React, { useEffect, useState }  from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/Slices/Products-slice";
import Navbar from "../Navbar/Navbar";
import LoginScreen from "../loginScreen/LoginScreen";



function Produoctslist() {
    const[loding,setlodin]=useState(true);
    // const abi_url = 'https://fakestoreapi.com/products';
    // // const [text, setText] = useRecoilState(productsAtom);
    // const [products, setproducts] = useState([]);
    // useEffect(()=>{
    //     fetch(abi_url)
    //     .then((res)=>res.json())
    //     .then((data)=>setproducts(data));
    //     // .then((data)=>setText(data));
    // },[]);
const products = useSelector((state)=>state.products)
const dispath = useDispatch();
useEffect(()=>{
    dispath(fetchProducts());
   

},[]);

   if(products.length  === 0 ) {return <LoginScreen/>} 
   else{


    return(<>
    
            

     <Navbar/>
  <div className="container-fluid  my-5">
    <div className="row">   
       {  
       products.map((product)=>{
        return ( <Product  product={product} key={product.id}  showButton={true}/> );})

      }

          {/* {  
       text.map((product)=>{
        return ( <Card product={product} key={product.id}  showButton={true}/> );})
      } */}
    
      
    </div>    
</div>
       

        
   </> )}
}
export default Produoctslist;
