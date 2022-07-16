<<<<<<< HEAD
import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'
=======

>>>>>>> 6fdbe33f560fdb83fc810efd6e7c1bf4613756ce


const Products = () => {
   const[products,setProducts]=useState([])

  useEffect(() =>{
    axios({
         method:'get',
         url:'http://localhost:8080/products'

    }).then((res)=>setProducts(res.data))
    .catch((err)=>console.log(err))
  },[])


  return (
    <div>
        {products.map((ele,ind)=><ProductItem key={ele.id} {...ele}/>)}
        
        </div>
  )
}


export default Products

 

