import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';
import { SalesCard } from './SalesCard';
import { useEffect, useState } from 'react';


const Sales = () => 
{
  const [productInfo, setProdInfo]= useState(JSON.parse(localStorage.getItem("prodList")));

  useEffect(() => {

   
      let tempArray = []
      productInfo.map((data, inde)=>{
        tempArray.push(data)
      });
  
      const result = tempArray.filter(product =>product.brandCategory === "Sale");
      setProdInfo(result)
        console.log('Result'+result);
      
    
  }, []);

  return (
    <>

      <Container>
    <Banner>
        <Header/>
    </Banner>
    <h1>Sale</h1>
<<<<<<< HEAD
    <div >
    <Grid container spacing={2} marginTop={2} marginLeft={15} marginRight={3} >
    {Sdata.map(data => (
            <SalesCard 
            key={data.id}
            image={data.image}
                        name={data.name}
                        price={data.price}
                        rating={data.rating}
            />
          ))}
          </Grid>
=======
    <div className='App'>
    {productInfo.map((productInfo,index)=>{
      console.log(productInfo.prodName)
      return(
      <div>
        <img src={productInfo.image}></img>
        <h3>{productInfo.prodDescription}</h3>
        <h3>{productInfo.prodName}</h3>
      </div>)
})}
>>>>>>> b5fccfe6b0261244cd2cd1a7413575856838b537
          </div>
    <Footer/>
</Container>


    </>
  )
}

export default Sales;

const Container = styled.div`
`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  
`

