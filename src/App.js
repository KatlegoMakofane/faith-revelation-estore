import Home from '../src/screens/Landingpage/Landingpage';
import Nav from '../src/Nav/Nav'

import {useState, useRef} from 'react'
import { async } from '@firebase/util';
import Signin from './screens/Signin/Signin';
import { login, logout, signup, useAuth } from '../src/Firebase';
import Landingpage from '../src/screens/Landingpage/Landingpage';

function App() {
  const currentUser = useAuth()
 
 
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
