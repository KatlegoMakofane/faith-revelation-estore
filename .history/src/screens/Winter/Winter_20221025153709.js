
import React from 'react';
import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';
import Wdata from './Wdata';
import { WinterCard } from './WinterCard';
import { Grid } from '@mui/material';



const Winter = () => {
  return (
    <>

    <Container>
    <Banner>
        <Header/>
    </Banner>
    <h1>
            Winter
        </h1>
    <div>
    <Grid container spacing={2} marginTop={2} marginLeft={15} marginRight={3} border={1} borderColor=>
    {Wdata.map(data => (
            <WinterCard 
            key={data.id}
            image={data.image}
                        name={data.name}
                        price={data.price}
                        rating={data.rating}
            />
          ))}
                </Grid>
          </div>
    <Footer/>
</Container>

     
    </>
  )
}


export default Winter;


const Container = styled.div`
`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`




