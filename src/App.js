import {  Routes, Route } from "react-router-dom";
import './App.css';
import About from './compoenents/About';
// login
import SingIn from './compoenents/login/SingIn';
import Register from './compoenents/login/Register';
// Dashboard
import Dashboard from './Dashboard/Dashboard';
import Users from './Dashboard/Auth/Users';
import UpdateUser from './Dashboard/Auth/UpdateUser';
import Creatuser from './Dashboard/Auth/Creatuser';
// site
import GetproductInCatogree from './compoenents/catagore/GetproductInCatogree';
import Produoctslist from './compoenents/product/Productslist';
import ProductDetails from "./compoenents/product/ProductDetails";
import Cart from './compoenents/Cart/Cart';
import UserProvider from "./Contaxt/Contaxt";
import RequirAuth from "./Dashboard/Auth/RequirAuth";


import MyProducts from "./Dashboard/my-products/MyProducts";
import CreatProduct from "./Dashboard/my-products/CreatProduct";
import UpdetProduct from "./Dashboard/my-products/UpdetProduct";

function App() {

  return (
  <div className='App'>

    <UserProvider>
   <Routes>
     <Route path = "/" element={<Produoctslist/>}/>
    
     <Route path = "about" element={<About/>}/>
     <Route path = "Cart" element={<Cart/>}/>
     <Route path = "category/:Catagore" element={<GetproductInCatogree />}/>/
     <Route path = "product/:productID" element={<ProductDetails/>}/>

     <Route path = "SingIn" element={<SingIn/>}/>
     <Route path = "Register" element={<Register/>}/>
     
         
          <Route element={<RequirAuth/>}>{/* احماية المسارات */}
         <Route path = "Dashboard" element={<Dashboard/>}> 
         <Route path = "user" element={<Users/>}/>
         <Route path = "CreatUser" element={<Creatuser/>}/>
         <Route path = "user/:UpdateUser" element={<UpdateUser/>}/> 
         {/* products */}
         <Route path = "products" element={<MyProducts/>}/>
         <Route path = "products/:UpateProduct" element={<UpdetProduct/>}/>
         <Route path = "CreatProduct" element={<CreatProduct/>}/>
         </Route>
         
     </Route>
    
  </Routes> 
  </UserProvider>



  </div>
  );
}

export default App;
