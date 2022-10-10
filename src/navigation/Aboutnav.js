import './App.css';
import React from 'react';
import './Aboutnav.css';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
//import Logo from './images/logo.jpg'


function Aboutnav() {

		const navRef = useRef();

		//const signIn = () => {}
	  const signOut = () => {}
	
		const showNavbar = () => {
			navRef.current.classList.toggle("responsive_nav");
		};
	
		return (
			<header>
				<div className="logo">
					<img src={''} alt="" width="70" height="70" />
				</div>
				<nav ref={navRef}>
			<a href="/#" onClick={signOut} >About</a>
			<a href="/Paymentprocess" onClick={signOut} >Payment Process</a>
			<a href="/Terms" onClick={signOut} >Terms</a>
			<a href="/FAQs" onClick={signOut} >FAQs</a>
			<a href="/Disclaimer" onClick={signOut} >Disclaimer</a>
			
					<button
						className="nav-btn nav-close-btn"
						onClick={showNavbar}>
						<FaTimes />
					</button>
				</nav>
				<button className="nav-btn" onClick={showNavbar}>
					<FaBars />
				</button>
			</header>
	);
}


export default Aboutnav;
