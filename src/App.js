import Home from '../src/screens/Landingpage/Landingpage';
import Nav from '../src/Nav/Nav'
import { login, logout, signup, useAuth } from './Firebase';
import {useState, useRef} from 'react'
import { async } from '@firebase/util';
import Signin from './screens/Signin/Signin';

import Landingpage from '../src/screens/Landingpage/Landingpage';

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
    
       <>

      </>

      {currentUser && 
      
    <>
    
   
   
      
    <Nav/>
   
      
    </>
}  

    </div>
  );
}

export default App;
