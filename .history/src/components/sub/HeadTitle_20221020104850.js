import React from 'react'
import { useLocation } from 'react-router-dom'
import './Headtitle.css'

const HeadTitle = () => {
    const location = useLocation()
  return (
    <>
        <section className='image-heading'>
        <div className='container'>
            <h1>{location.pathname.split("/")[1]}</h1>

           
        </div>
        </section>
    
    </>
  )
}

export default HeadTitle