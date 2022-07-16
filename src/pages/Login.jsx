import React from 'react'
import {useState,useContext } from 'react'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'
 import {AuthContext} from '../context/AuthContext';
const Login = () => {
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
 
 
    const {handleLogin,token,setToken}= useContext(AuthContext);

    const handleAuth=(details)=>{
       token?setToken(""):handleLogin(details);
    }
 
      console.log(token.token)
  return (
    <div>
      { 
      token?<h1>User Logged In</h1>:
      <>
    <TextField  value={email} onChange={(e)=>setEmail(e.target.value)} id="standard-basic" label="Email" variant="standard" />
    <br/>
   <TextField value={pass} onChange={(e)=>setPass(e.target.value)} id="standard-basic" label="Password" variant="standard" />
   <br/>
   </>
   }
   <Button onClick={()=>handleAuth({email,password:pass})} variant="outlined">{token?"Log Out":"Login"}</Button>
    </div>
  )
}

export default Login