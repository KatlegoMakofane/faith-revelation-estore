import React from 'react'
import Header from '../../components/banner/Header';
import styled from 'styled-components';

export default function cart() {
  return (
    <>
     <Banner>
        <Header/>
    </Banner>
      <h1>Cart page</h1>
    </>
  )
}

const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`