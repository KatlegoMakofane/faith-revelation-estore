import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
//import "../styles/navbar.css";
//import Logo from './images/logo.jpg'

export default function Webpagenav() {
    const navRef = useRef();

	const signIn = () => {}
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
        <a href="/#" onClick={signOut} >Home</a>
        <a href="/Summer" onClick={signOut} >Summer</a>
        <a href="/Winter" onClick={signOut} >Winter</a>
        <a href="/Accessories" onClick={signOut} >Accessories</a>
        <div className='icons'>
				<a href="/Cart" onClick={signOut} className='icon' ><BsFillCartFill size={20}/></a>
        <a href="/Wishlist" onClick={signOut} className='icon' ><BsFillHeartFill size={20}/></a>
        <a href="/#" onClick={signIn} className='icon' ><GoPerson size={20}/></a>
        </div>
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
