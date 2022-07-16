import React, { createContext,useState,useEffect } from "react";
import axios from "axios";
 const CartContext = createContext();

 const CartProvider = ({ children }) => {
 const[cart,setCart]=useState([]);
  


  const fetchCart = () =>{
    axios({
      method:"get",
      url: "http://localhost:8080/cartItems"
    }).then((response)=>setCart(response.data))
    .catch((error)=>console.log(error))
  }




const handleAddToCart= (id) => {
   const item=cart.find((ele)=>ele.productId===id);
   console.log("itemAddtocart",item);
   if(item===undefined){
    axios({
      method:"post",
      url: `http://localhost:8080/cartItems`,
      data: {
        productId:id,
        id,
        count:1
      }
    }).then((response)=>{
      console.log(response,"handleAddToCart");
      fetchCart();
    }).catch((error)=>console.log(error));
   }
}
const handleIncrement=(id) => {
  const item=cart.find((ele)=>ele.productId===id);
  axios({
    method:"patch",
    url: `http://localhost:8080/cartItems/${id}`,
    data: {
     
      count:item.count+1
    }
  }).then((response)=>{
    console.log(response,"handleIncrement");
    fetchCart();
  }).catch((error)=>console.log(error));
}
const handleDecrement=(id) => {
  const item=cart.find((ele)=>ele.productId===id);
  console.log("item:",item);
  if(item.count===1){
    axios({
      method:"delete",
      url: `http://localhost:8080/cartItems/${id}`,
      
    }).then((response)=>{
      console.log(response,"handleDecrement");
      fetchCart();
    }).catch((error)=>console.log(error));

  }
  else{
    axios({
      method:"patch",
      url: `http://localhost:8080/cartItems/${id}`,
      data: {
        count:item.count-1
      }
    }).then((response)=>{
      console.log(response,"handleDecrement");
      fetchCart();
    }).catch((error)=>console.log(error));

  }

 
}
const handleRemove=(id) => {
  axios({
    method:"delete",
    url: `http://localhost:8080/cartItems/${id}`,
   
  }).then((response)=>{
    console.log(response,"handleRemove");
    fetchCart();
  }).catch((error)=>console.log(error));
}
  useEffect(() =>{

    fetchCart();
  },[]);


  const value={
    cart,
    handleAddToCart,
    handleIncrement,
    handleDecrement,
    handleRemove
  }
 



  return <CartContext.Provider value={value}>
    {children}
    </CartContext.Provider>;
};
 export  {CartProvider,CartContext} 
