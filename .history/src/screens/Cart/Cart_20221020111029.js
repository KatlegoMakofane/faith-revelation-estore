import React from 'react';
import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';

const cart = () = {
  return (
    <>
    <Container>
    <Banner>
        <Header/>
    </Banner>
    <Footer/>
</Container>
    </>
  )
}

export default cart;


const Container = styled.div`
`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`


