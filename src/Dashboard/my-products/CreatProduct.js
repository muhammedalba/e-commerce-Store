import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CreatProduct() {
  const products_url ="http://localhost:8000/products";
  const params =useParams()
  const[product,setproduct]=useState([]);
  
  const[accept,setaccept]=useState(false);
 
  const[title,settitle]=useState('');
  const[description,setdescription]=useState('');
  const[category,setcategory]        =useState('');
  const[price,setprice]=useState('');
  const[image,setimage]=useState("");

  console.log(image);



  async function submit(e){
    e.preventDefault();
    if(title !== "" && description !=="" && category !== "" && price !== 0){
 
try{
  const formData =new FormData() ;
  formData.append("title",title);
  formData.append("price",price);
  formData.append("description",description);
  formData.append("category",category);
  formData.append("image",image);
 
  const respons =  await axios.post(products_url, 
 

    { 
   

    title:title,
    price:price,
    description:description,
    category:category,
    image:image
  
                  
    },)

  //  window.location.pathname= props.pathname;   

  }catch(error){
    setaccept(true);
    console.log(error,"Error");
  }

      }else{
        setaccept(true);
      }
}
  return (<>
    <div>My-Products</div>
    <div  className='container py-5'>
      <form  className="row g-3" onSubmit={(e)=>{submit(e)}}>
        <div className="col-md-4">
          <label htmlFor="title" className="form-label">title </label>
          <input type="text" className="form-control" onChange={(e)=>{settitle(e.target.value)}} id='title' defaultValue={product.title}/>
        {/* {  firstname.length <3 && accept &&<p>You must enter a name of at least three letters </p>} */}
        </div>
        <div className="col-md-4">
          <label htmlFor="description" className="form-label">description</label>
          <input  type="text" className="form-control"  onChange={(e)=>setdescription(e.target.value)} id="description" defaultValue={product.description} />
          {/* { lastname.length <3 && accept && <p>You must enter a name of at least three letters </p> } */}
        </div>
        <div className="col-md-4">
          <label htmlFor="category" className="form-label">category</label>
          <input type="text" className="form-control"onChange={(e)=>setcategory(e.target.value)} id='category'defaultValue={product.category}/>
        </div>
        <div className="col-6">
          <label htmlFor="price" className="form-label">price</label>
          <input type="number" className="form-control"onChange={(e)=>setprice(e.target.value)} id="price" defaultValue={product.price} />
        </div>
        <div className="col-6">
          <label htmlFor="inputPassword" className="form-label">image</label>
          <input type="file" className="form-control" onChange={(e)=>setimage(e.target.files.item(0))} id='image'  />
          {/* {  rpassword !== password && accept  && <p>You must enter a Password of at least three letters </p>} */}
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">create</button>
        </div>
      </form>
  </div> 





  </>)
}
