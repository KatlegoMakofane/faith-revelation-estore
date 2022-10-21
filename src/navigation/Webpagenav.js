import React from 'react';
import  {  BrowserRouter, Route, Routes } from 'react-router-dom';
//import { useRef } from 'react';
// import { FaBars, FaTimes } from "react-icons/fa";
  import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
// import { GoPerson } from "react-icons/go";
//import "./Webpagenav.css";
//import Logo from './images/logo.jpg'
import Landingpage from '../screens/Landingpage/Landingpage';
import Summer from '../screens/Summer/Summer';
import Winter from '../screens/Winter/Winter';
import Accessories from '../screens/Accessories/Accessories';
import Cart from '../screens/Cart/Cart';
import Wishlist from '../screens/Wishlist/Wishlist';
import Profile from '../screens/Profile/Profile';

export default function Webpagenav() {
    //const navRef = useRef();


	//const showNavbar = () => {
	//	navRef.current.classList.toggle("responsive_nav");
	//};

	return (
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Landingpage/>} />
			<Route path="/Summer" element={<Summer/>} />
			<Route path="/Winter" element={<Winter/>} />
			<Route path="/Accessories" element={<Accessories/>} />
			<Route path="/Cart" element={<Cart/>} />
			<Route path="/Wishlist" element={<Wishlist/>} />
			<Route path="/Profile" element={<Profile/>} />

		</Routes>
		
		</BrowserRouter>
  );
}
