import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'


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

 

