import React from 'react'
import styled from 'styled-components';
import Tabs from '../../components/Tabs/Tabs';
import BannerComp from '../../components/banner/Banner';
import Footer from '../../components/Footer/Footer';
import ProfileComp from '../components/banner/';


const landingpage = () => {
  return (
    
   
    <Container>
    
    <Banner>
        <BannerComp/>
    </Banner>
    <ProfileComp/>
    <Tabs/>
    <Footer/>
</Container>

  )
}

export default landingpage;

const Container = styled.div`

`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  
`