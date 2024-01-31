import { useDispatch, useSelector } from "react-redux";
import  { deletFromCart,clear ,addProduct,deletProduct} from'../../rtk/Slices/cartSlice'
import Navbar from "../Navbar/Navbar";


function Cart() {
    const cart = useSelector(state => state.cart);
    const Dispatch = useDispatch();
   

   const totalprice= cart.reduce((acc,product)=>{
          return acc + product.price * product.quantity
   },0)
   const totalproduct= cart.reduce((acc,product)=>{
    return acc + product.quantity
},0)



    return(<>
 <Navbar/> 
   <div className="container  my-5">
    <div className="row"> 
    <button onClick={()=>Dispatch(clear())} className="btn btn-danger">clear</button>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">img</th>
      <th scope="col">title</th>
      <th scope="col">price</th>
      <th scope="col">quantity</th>
      <th scope="col">action</th>
     
 
    </tr>
  </thead>
  <tbody>
 { 
 
 cart.map((e,i)=>{ 
  return (
    
    <tr key={e.id}>
   
      <th scope="row">{i+1}</th>
      <td><img style={{height: '100px',width:'150px'}} className=" p-2" src={e.image} alt={e.title}/></td>
      <td>{e.title}</td>
      <td>{e.price * e.quantity}</td>
      <td>
        <button className="btn btn-danger" onClick={()=>Dispatch(deletProduct(e))} >-</button>
        <span>{e.quantity}</span>
        <button className="btn btn-primary" onClick={()=>Dispatch((addProduct(e)))} >+</button>
      </td>
      <td><button onClick={()=>Dispatch(deletFromCart(e))} className="btn btn-danger">delet</button></td>
    </tr>
    
    )
 }) 
 
 } 

   <tr>
      <th scope="row"></th>
      <td>totalproduct : {totalproduct}</td>
      <td></td>
      <td>totalprice : {totalprice}$ </td>
      <td><button className="btn btn-primary">bey</button></td>
      <td></td>
    </tr>
  </tbody>

</table>
    
    
    </div>
    </div>

    </>)
}

export default Cart;