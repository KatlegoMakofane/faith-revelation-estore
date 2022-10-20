import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import './Profile.css';

import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';

const profile = () => {
  return (
    <>
	<Container>
    <Banner>
        <Header/>
    </Banner>
	<Hea
			<h1>My Profile</h1>
			<div className='profile'>
				<div className='image-card'>
					<img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
					<h2 className='ans'>Name</h2>
					<h2 className='ans'>Email</h2>
				</div>
				<div className='button-card'>
					<div>
					<button className='btn'>Account Details <AiOutlineArrowRight /></button>
					<button className='btn'>Pending Orders <AiOutlineArrowRight /></button>
					<button className='btn'>Order History <AiOutlineArrowRight /></button>
					</div>
					<div className='btn-btm'>
					<button className='btn-sec'>Cart <BsFillCartFill size={45} className='icon' /></button>
					<button className='btn-sec'>Wishlist <BsFillHeartFill size={45} className='icon' /></button>
					</div>
				</div>
			</div>
			<Footer/>
</Container>
		</>	
  )
}

export default profile;

const Container = styled.div`
`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`