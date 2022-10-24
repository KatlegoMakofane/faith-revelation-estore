import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sdata from '../../screens/Sales/Sdata';
import {TbBackspace} from 'react-icons/tb'

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
            <button> Add to Cartr</button>
            
               
        </div>
      
    </>
  )
}

export default productview