import React from 'react'
import styled from 'styled-components';
import Tabs from '../../components/Tabs/Tabs';
import BannerComp from '../../components/banner/Banner';
import Footer from '../../components/Footer/Footer';


const landingpage = () => {
  return (
    <Container>
    <Banner>
        <BannerComp/>
    </Banner>
    <Tabs/>
    <Footer/>
</Container>
  )
}

export def