import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sdata from '../../screens/Sales/Sdata';
import {TbBackspace} from 'react-icons/tb'
import './Product.css'
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";

const productview = () => {

  // const {id} = useParams()
  //   const [item, setItem] = useState(null)

  //   useEffect(() => {
  //       let item = Sdata.find((item) => item.id === parseInt(id))

  //       if(item){
  //           setItem(item)
  //       }

  //   }, [id] )


  return (
    <>
      
        <div className='Container'>
        <Link to='/sales' className=''>
                <TbBackspace size={50}/>
            </Link>
            <h1 className='heading'>Product View</h1>
            <br></br>
            <div className='info'>
            <h2 className='heading2'>About Product</h2>
           
            <p className='name'>MASSDROP X SENNHEISER HD 6XX HEADPHONES</p>
            <h4 className='heading4'>Description</h4>
            <p className='desc'>ihuhljhijkjonjojnojonjijnmnuoujpiunoujoinnjhiuobinouobno</p>
            <h4 className='AvailS'>Available Sizes</h4>
            <button className=''>  XS  </button> 
            <button>  S  </button>
            <button>  M  </button>
            <button>  L  </button>
            <button>  XL  </button>
            <button>  XXL  </button>
            <h4 className='AvailC'>Available Colours</h4>
            </div>
            <button className='btnWish'>Add to Wishlist</button>
            <button className='btnAdd'> Add to Cart <BsFillCartFill size={30} /></button>
            
               
        </div>
      
    </>
  )
}

export default productview