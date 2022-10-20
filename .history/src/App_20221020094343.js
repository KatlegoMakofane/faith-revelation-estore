import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route
  
  } from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<L/>} />
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
