import React from "react";
import Products from '../components/Products'
import {useContext} from 'react'
import {CartContext} from '../context/CartContext'

const Home = () => {
  const {cart}= useContext(CartContext);
  return <div>
    <h1>{cart.reduce((prev,curr) =>(prev+curr.count),0)}</h1>
    <Products/>
  </div>;
};

export default Home;
