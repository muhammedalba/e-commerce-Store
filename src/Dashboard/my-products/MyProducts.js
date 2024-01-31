import React, { useEffect, useState } from 'react'
import {  Link } from 'react-router-dom';


function MyProducts() {
  const products_url ="http://localhost:8000/products";
  const [products,setproducts]=useState([]);
  const [refres,setrefres]=useState(0);


  async function getproducts(){
      try{
 await fetch(products_url)
.then((res)=>res.json())
.then(products=>setproducts(products))

  }catch(err){
console.log(err);
  }
  }

useEffect(()=>{
  getproducts()
},[refres])


async function deletProduct(id){
try{
   await fetch(`${products_url}/${id}`,{
    method:"DELETE"
})
    .then(res=>res.json())
    .then(json=>console.log(json))
    setrefres(1);
    
 
}catch(err){
console.log(err,"err in delete product");
}

}

console.log(products);

  return (<>
    <div>My-Products</div>
    <table className="table m-5">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">image</th>
      <th scope="col">title</th>
      <th scope="col">descripton</th>
      <th scope="col">category</th>
      <th scope="col">price</th>
      <th scope="col">Updateproduct</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    {products.map((products,indix)=>{
      return (
        
    <tr key={products.id}>
      <th scope="row">{indix +1 }</th>
      <td>
      <img style={{height: '100px',width:'150px'}} className=" p-2" src={products.image} alt={products.title}/>
      </td>
      <td>{products.title.slice(0,30)}</td>
      <td>{products.description.slice(0,50)}</td>
      <td>{products.category}</td>

      <td>{products.price}</td>
      <td onClick={()=>{}}  className='m-1'>
        <Link to={`${products.id}`}  className='btn btn-primary  m-1'>Updateproduct</Link>
      </td>
      <td onClick={()=>{}} className='btn btn-primary  m-1'>view</td>
      <td onClick={()=>deletProduct(products.id)} className='btn btn-danger'>delet</td>
    </tr>


      )
    })}

   
 
  </tbody>
</table>





  </>)
}

export default MyProducts;