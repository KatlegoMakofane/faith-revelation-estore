import React from 'react';

import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';
import { SummerCard } from './SummerCard';
import Sumdata from './Sumdata';



const Summer = () => {
  return (
    <>

   <Container>
    <Banner>
        <Header/>
    </Banner>
    <h1>
            Summer
        </h1>
    <div className='App'>
       
    {Sumdata.map(data => (
            <SummerCard 
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

     <Banner>
        <Header/>
    </Banner>
      <h1>Summer</h1>

    </>
  )
}


export default Summer;

const Container = styled.div`
`


const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`
