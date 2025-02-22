import React from 'react';

import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';

import {Routes, Route, useNavigate} from 'react-router-dom';
import './Aboutnav.css';


export default function About() {
  
  const navigate = useNavigate();
  const About = () => {
    navigate('/');
  };

  const Disclaimer = () => {
    navigate('/disclaimerpage');
  };

  const Terms = () => {
    navigate('/terms');
  };

  const Faqs = () => {
    navigate('/faqs');
  }

  function Disclaimerpage () {
    return (
      <div className="Staticpages">
          <h1 className='Heading'>Disclaimer</h1>
          <div className='Info-section'>
            <h3 className='ques'>Reservation of Rights</h3>
            <p className='ans'>We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.</p>
            <h3 className='ques'>Content Liability</h3>
            <p className='ans'>We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
            <h3 className='ques'>License</h3>
            <p className='ans'>Unless otherwise stated, Faith Revelations and/or it's licensors own the intellectual property rights for all material on Faith Revelations. All intellectual property rights are reserved. You may view and/or print pages from https://faithrevelations.co.za for your own personal use subject to restrictions set in these terms and conditions.</p>
          </div>
        </div>
  
    )
  }

  function Aboutpage () {
    return (
      <>
  
      <div className="Staticpages">
          <h1 className='Heading'>About Revelation</h1>
          <div className='Info-section'>
            <p>Revelation Productions, Registration Number: 2018/369879/07 T/A Revelation Productions.</p>
            <p>
              It was formed in 2018 by its founders, Lebogang Moalusi and Lerato Moalusi, as a part of the rebranding of the company, “Baby Bonolo Creations”. The company that created a baby character named
              “Bonolo” to design and manufacture a kiddies clothing line and accessories.
            </p>  
            <p>
              The company was rebranded to increase the scope of the business and develop into a general
              supply of promotional clothing and equipment, uniforms, PPE, and general office supplies.
            </p>
            <p>
              Revelation Productions is a developing company, with a network of suppliers for sourcing materials as
              well as clothing manufacturing.
              We work closely with our clients to ensure quality and brand satisfaction.
            </p>
          </div>
        </div>
  

const about = () => {
  return (
    <Container>
    <Banner>
        <Header/>
    </Banner>
   

 
  
    return (
      <div>
        <div className='navbar'>
            <button className='navbar-button' onClick={About}>About</button>
            <button className='navbar-button' onClick={Disclaimer}>Disclaimer</button>
            <button className='navbar-button' onClick={Faqs}>FAQS</button>
            <button className='navbar-button' onClick={Terms}>Terms</button>
          </div>
            <Routes>
                <Route path="/" element={<Aboutpage />} />
                <Route path="/disclaimer" element={<Disclaimerpage />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </div>

    )
    
    }



      <Footer/>
</Container>

    </>
    
 


export default about;

const Container = styled.div`
`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`