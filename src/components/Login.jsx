import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' 

function Login() {   
const[username,setUsername]=useState(" ");
const[password,setPassword]=useState(" ");   
const navigate = useNavigate ();   
    function handleLogin (){   
        if(username=== "abc" && password=== "123") {  

        navigate("/home");  
        // setUsername("")
        // setUsername("")
    }


    }
  return ( 
    <div>
      <form className="form">
        <input type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} /> 
        <input type="password" placeholder="Password"onChange={(e)=>{setPassword(e.target.value)}} /> 
        
        <button onClick={handleLogin} type="submit">Login</button> 
    
      </form>
    </div>
  )
}

export default Login