import React from 'react';
import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';
import { ACard } from './Acard';


const Accessories = () => {
  return (
    <>
      <Container>
    <Banner>
        <Header/>
    </Banner>
    <h1>
    Accessories
        </h1>
    <div >
       
    {Wdata.map(data => (
            <ACard 
            key={data.id}
            image={data.image}
                        name={data.name}
                        price={data.price}
                        rating={data.rating}
            />
          ))}
          </div>
    <Footer/>
</Container>
    </>
  )
}

export default Accessories;


const Container = styled.div`
`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`

