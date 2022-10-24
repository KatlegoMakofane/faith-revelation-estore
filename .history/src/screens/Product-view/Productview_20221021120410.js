import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sdata from '../../screens/Sales/Sdata';

const productview = () => {

  const {id} = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = Sdata.find((item) => item.id === parseInt(id))

        if(item){
            setItem(item)
        }

    }, [id] )


  return (
    <>
      <section className='Product-view top'>
        <div className='container'>
        <Link to='/sales' className='primary-btn back'>
                <i className='fas fa-long-arrow-alt-left'> Back</i>
            </Link>
            
                <div className='main-content'>
                    <img src={item.image} alt='' />
                   

                    
                    <h1> {item.title}</h1>
                    <p>{item.desc}</p>
                    <div className='image grid1'>
                        <img src={item.paraImage_one} alt='' />
                        <img src={item.paraImage_two} alt='' />
                    </div>
                    <div className='para flex_space'>
                       <p>{item.sidepara}</p>
                       
                    </div>
                </div>

                <div className='side-content'>
                    <div className='box'>
                        <h2>Like What you See?</h2>
                       
                        <Link to='/bookings'>
                        <button className='outline-btn' >
                            
                            <i className='fa fa-book'>
                                Book Now
                            </i>
                           
                        </button>
                        </Link>
                    </div>
                   
                </div>
        </div>
      </section>
    </>
  )
}

export default productview