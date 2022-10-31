import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sdata from '../Sales/Sdata';
import {TbBackspace} from 'react-icons/tb'
import './Product.css'

const Productview = () => {

  const [productInfo, setProdInfo]= useState(JSON.parse(localStorage.getItem("prodList")));
  // const {id} = useParams()
  //   const [item, setItem] = useState(null)

  //   useEffect(() => {
  //       let item = Sdata.find((item) => item.id === parseInt(id))

  //       if(item){
  //           setItem(item)
  //       }

  //   }, [id] )
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
      
        <div className=''>
        <Link to='/sales' className=''>
                <TbBackspace size={50}/>
            </Link>
            <h1>Product View</h1>
            <h2>About Product</h2>

            <p>MASSDROP X SENNHEISER HD 6XX HEADPHONES</p>
            <h4>Description</h4>
            <p>ihuhljhijkjonjojnojonjijnmnuoujpiunoujoinnjhiuobinouobno</p>
            <h4>Available Sizes</h4>
            <h4>Available Colours</h4>
            <button className='btnWish'>Add to Wishlist</button>
            <button className='btnAdd'> Add to Cartr</button>
            
               
        </div>
        <div className='App'>
       
       {productInfo.map((productInfo,id)=>{
         console.log(productInfo.prodName)
         return(
         <div className='wintercard' key={id}>
           <img src={productInfo.image}/>
           <h3>{productInfo.prodName}</h3>
           <h3>{productInfo.prodDescription}</h3>
           <h3></h3>
           <h3>Product Code{productInfo.productCode}</h3>
            
           <button  ><Link to="/Productview">ViewProduct</Link></button>
          
         </div>)
   })}
             </div>
      
    </>
  )
}

export default Productview