import React, { createContext,useState } from "react";
import axios from 'axios';
 const AuthContext = createContext();

 const AuthProvider = ({ children }) => {
    
   const[token,setToken]=useState("");

  const handleLogin = (body) => {
    axios({
       method:"post",
       url:'https://reqres.in/api/login',
       data: body
    }).then((res)=>setToken(res.data))
    .catch((err) =>console.log(err));
  }

  const objvalue={
    handleLogin,
    token,
    setToken
  }

  // code here
  return <AuthContext.Provider value={objvalue}>
    {children}
    </AuthContext.Provider>;
};

export {AuthContext,AuthProvider}
