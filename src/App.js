import Home from '../src/screens/Landingpage/Landingpage';
import Nav from '../src/Nav/Nav'
import { login, logout, signup, useAuth } from './Firebase';
import {useState, useRef} from 'react'
import { async } from '@firebase/util';



function App() {

  const emailRef = useRef()
  const  passwordRef = useRef()
  const [show,setShow]=useState(true); 
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
    <div >
       { show &&
       <>
      <input ref={emailRef} placeholder="email"/>
      <input type="password" ref={passwordRef} palceholder ="password"/>
      <button disabled={loading || currentUser!=null}onClick={()=>setShow (!show,handleSingup )}>sign Up</button>
      <button disabled={loading || currentUser!=null}onClick={handleLogin}>Login</button>
      </>
}
      {currentUser && 
      
    <>
    
     	
    <div>Current loged in user: {currentUser?.email}</div>
    <button disabled={loading || !currentUser}onClick={handleLogOut}>Sign out</button>
      <Nav/>
       
   
      
    </>
}  

    </div>
  );
}

export default App;
