import React from 'react'
import { BrowserRouter as Router,
    Routes,
    Route
    
    } from "react-router-dom"
import {useState, useRef} from 'react'
import { login, logout, signup, useAuth } from '../../Firebase';
import Landingpage from '../../screens/Landingpage/Landingpage';
const   Signin=() =>{

    const emailRef = useRef()
  const  passwordRef = useRef()
  const [show,setShow]=useState(false); 
  const[loading, setLoading] = useState(false)
  const currentUser = useAuth()
  async function handleSingup(){
    setLoading(true)
    try{
      await signup(emailRef.current.value, passwordRef.current.value)
    }catch{
      alert("Error")
    }
    setLoading(false)
  }
  async function handleLogin(){
    setLoading(true)
    try{
      await login(emailRef.current.value, passwordRef.current.value)
      {<Landingpage/>}
    }catch{
      alert("Error")
    }
    setLoading(false)
  }
  async function handleLogOut(){
    setLoading(true)
    try{
      await logout()
    }catch{
      alert("Error")
    }
    setLoading(false)
  }
 
  return (
    <div>Signin
    currentUser
   
     
    <input ref={emailRef} placeholder="email"/>
   <input type="password" ref={passwordRef} palceholder ="password"/>
   <button disabled={loading || currentUser!=null}onClick={()=>setShow (!show,handleSingup )}>sign Up</button>
   <button disabled={loading || currentUser!=null}onClick={handleLogin}>Login</button>


    <>
   

  
</>


  

    </div>
  )
}

export default Signin