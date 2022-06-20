import React from "react";

const Products = () => {
    
  const [product,setProduct]=useState([]);

  React.useState(() => {
      fetch(` http://localhost:8080/cartItems`)
      .then((res) =>res.json())
      .then((res)=>setProduct(res))
      .catch((err) =>console.log(err))

  })




  return <div>
     {product.map((prod)=>{
      return(
        <>
        <h1>{prod.name}</h1>
        <p>{prod.description}</p>
        <button onClick={()=>{}}>ADD</button>
        <button onClick={()=>{}}>DECREASE</button>
        <button onClick={()=>{}}>Remove</button>
        </>
      )
     })}
  </div>;
};

export default Products;
