import React from 'react';
import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';


const about = () => {
  return (
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
  )
}

export default about;

const Container = styled.div`
`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`