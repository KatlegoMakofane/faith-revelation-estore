
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';
import Wdata from './Wdata';
import { WinterCard } from './WinterCard';
import productview from '../Product-view/Productview';
import { Link } from 'react-router-dom';
import './Winter.css'


const Winter = () => {

  const [productInfo, setProdInfo]= useState(JSON.parse(localStorage.getItem("prodList")));

  useEffect(() => {

   
      let tempArray = []
      productInfo.map((data, inde)=>{
        tempArray.push(data)
      });
  
      const result = tempArray.filter(product =>product.brandCategory === "Winter");
      setProdInfo(result)
        console.log('Result'+result);
      
    
  }, []);

  return (
    <>

    <Container>
    <Banner>
        <Header/>
    </Banner>
    <h1>
            Winter
        </h1>
    <div className='App'>
       
    {productInfo.map((productInfo,index)=>{
      console.log(productInfo.prodName)
      return(
      <div className='wintercard' key={index}>
        <img src={productInfo.image}/>
        <h3>{productInfo.prodName}</h3>
        <h3>R{productInfo.coloursList[index].price}</h3>
         
        <button ><Link to="/Productview">ViewProduct</Link></button>
       
      </div>)
})}
          </div>
          {/* <div className='wintercon'>
       
    {colour.map((productInfo,index)=>{
      console.log(productInfo.prodName)
      return(
      <div className='wintercard'>
        <img src={productInfo.image}/>
        <h3>{productInfo.prodName}</h3>
        <h3>{productInfo.prodDescription}</h3>
        <h3>{productInfo.price}</h3>
      </div>)
})}
          </div> */}
            {/* <div className='productList'>
            <div key={props.id} className='productCard'>
                <img src={props.image} alt='product-img' className='productImage'></img>

                <FaShoppingCart className={"productCard__cart"} />
                <FaRegBookmark className={"productCard__wishlist"} />
                <FaFireAlt className={"productCard__fastSelling"} />

                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                    <div className='displayStack__1'>
                        <div className='productPrice'>${props.price}</div>
                        
                    </div>
                    <div className='displayStack__2'>
                        <div className='productRating'>
                            {[...Array(props.rating)].map((index) => (
                                <FaStar id={index + 1 } key={index} />
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div> */}
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




