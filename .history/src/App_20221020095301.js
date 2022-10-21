import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route
  
  } from "react-router-dom"
  // importing screens...
import Landingpage from './screens/Landingpage/Landingpage';
import Sales from './screens/Sales/Sales';
import Summer from './screens/Summer/Summer';
import Winter from './screens/Winter/Winter';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage/>} />
          <Route path='/sales' element={<Sales/>} />
          <Route path='/winter' element={<Winter/>} />
          <Route path='/accessries' element={<Accessories/>} />
          <Route path='/summer' element={<Summer/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/wishlist' element={<Wishlist/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
