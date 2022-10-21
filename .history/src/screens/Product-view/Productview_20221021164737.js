import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sdata from '../../screens/Sales/Sdata';

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
      
        <div className='container'>
        <Link to='/sales' className='primary-btn back'>
                <i className='fas fa-long-arrow-alt-left'> Back</i>
            </Link>
            <h1>Product View</h1>
            <h2>About Product</h2>

            <p>MASSDROP X SENNHEISER HD 6XX HEADPHONES</p>
            <h4>Description</h4>
            <p></p>

               
        </div>
      </section>
    </>
  )
}

export default productview