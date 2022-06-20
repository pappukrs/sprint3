import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate}  from 'react-router-dom'

const Login = () => {
   const [mail,setMail]=useState("");
   const [pass,setPass]=useState("");
   const navG=useNavigate();

   const handleLogin=()=>{
     const data={mail,pass,setPass};

     fetch(`https://reqres.in/api/login`,{
      method:"POST",


      headers:{
        "content-type":"application/json",
      },
    
      body:JSON.stringify(data),

    
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(res.token){
        navG(`/`)
      }
    })
    .catch((err)=>{console.log(err)});
   }



  return( <div>
  
  
  <h2>LOGIN</h2>
  
    <input
      type="text"
      placeholder="Email"
      value={mail}
      onChange={(e) => setMail(e.target.value)}
    />
 
  <br />
  
    <input
      type="text"
      placeholder="Password"
      value={pass}
      onChange={(e) => setPass(e.target.value)}
    />

  <button onClick={handleLogin}>LOGIN</button>




      
              
  </div>
  )
};

export default Login;
