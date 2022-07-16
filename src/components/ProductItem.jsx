
import React from "react";
import {Button} from '@mui/material'
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const ProductItem = ({name, description,id}) => {

  const { cart,handleAddToCart,handleIncrement,handleDecrement,handleRemove} = useContext(CartContext);
   
  const noOfCount=cart.find((ele)=>ele.productId===id)?.count;
    console.log(noOfCount,"noOfCount")
  
  return <div className="product-item">
    <div className="name">{name}</div>
    <div className="desc">{description}</div>
    <div>{!!noOfCount?noOfCount:"Not Added to Cart"}</div>
    <Button  disabled={!!noOfCount} onClick={() =>handleAddToCart(id)} variant="contained">ADD TO CART</Button>
    <Button  disabled={!noOfCount}  onClick={() =>handleIncrement(id)}variant="contained">INCREMENT</Button>
    <Button  disabled={!noOfCount}  onClick={() =>handleDecrement(id)} variant="contained">DECREMENT</Button>
    <Button  disabled={!noOfCount}  onClick={() =>handleRemove(id)} variant="contained">REMOVE</Button>

  </div>;
};

export default ProductItem;

// const item=cart.find((ele)=>ele.productId===id)
//cart.reduce((prev,curr) =>(prev+curr.count),0)


