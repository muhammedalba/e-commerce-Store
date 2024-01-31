// import Product from "./Product";
// import Recoil from "./atom/Recoli";
// import React,{ useEffect, useState }  from "react";

import { createSlice } from "@reduxjs/toolkit";



// function Cart(params) {

//     const pro = [];
   
   
//   return(<>
//   {/* {console.log(params,'params')} */}
//   {console.log(pro,'pro')}
//   {pro.map((e)=>{return (<Product product={e} key={e.id}  showButton={true}/>)})}
// { pro.push(params)}
  
//   </>)  
// }
// export default Cart;
export const cartSlice = createSlice({
initialState:[],
    name:"cartSlice",
    reducers:{
        addtoCart:(state,action)=>{
         
            const findProduct = state.find((product)=>product.id === action.payload.id);
            if(findProduct){
                findProduct.quantity = 1;
           
                
                
            }else{
                
                const productClone ={...action.payload,quantity:1,number:0}
                state.push(productClone);
                productClone.number++;
                console.log(productClone ,"2");  
               
            }
            
            
        },
        addProduct:(state,action)=>{
            
            const findProduct = state.find((product)=>product.id === action.payload.id);
            if(findProduct ){
               
               if(findProduct.quantity >= 0 && findProduct.quantity < 10 ){
                findProduct.quantity += 1;
                
               } else{
                findProduct.quantity = 10;


               }
                
            }  
          
        },
        deletProduct:(state,action)=>{
            const findProduct = state.find((product)=>product.id === action.payload.id);
            if(findProduct ){
               
                if(findProduct.quantity > 1 && findProduct.quantity <= 10 ){
                 findProduct.quantity -= 1;
                 
                } 
                 
             }  
        },
        
        deletFromCart:(state,action)=>{
            return state.filter((product) => product.id !== action.payload.id)   
        },
        clear:(state,action)=>{
            return []
        },
    }
})
export const {addtoCart,deletFromCart,clear,addProduct,deletProduct}= cartSlice.actions;
export default cartSlice.reducer;
