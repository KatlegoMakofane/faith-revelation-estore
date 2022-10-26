import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sdata from '../../screens/Sales/Sdata';
import {TbBackspace} from 'react-icons/tb'
import './Product.css'

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
            <br></br>
            <h2>About Product</h2>
            <table className='styled-table'>
                  <thead>
                    <tr>
                    <th style={{textAlign:"center"}}>NO.</th>
                    <th style={{textAlign:"center"}}>Item.</th>
                    <th style={{textAlign:"center"}}>Price.</th>
                    <th style={{textAlign:"center"}}>Range.</th>
                    <th style={{textAlign:"center"}}>Availabilty.</th>
                    <th style={{textAlign:"center"}}>icon.</th>
                  
                    </tr>
                  </thead>
                  <br></br>
                  <tbody>
                    {Object.keys(data).map((id, index)=>{
                
                      return(
                        <tr key={id}> 
                         <td><img src={data[id].image} style={{width:"50px",height:"50px",borderRadius:"10px"}}/> </td>
                           <td>{data[id].item}</td>
                           <td>{data[id].price}</td>
                           <td>{data[id].range}</td>
                           <td>{data[id].availabilty}</td>
                           
                           <td >{data[id].icon}<FaShoppingCart/></td>
                           
                        </tr>
                
                      )
                    })}
                  </tbody> 
                </table>

            <p>MASSDROP X SENNHEISER HD 6XX HEADPHONES</p>
            <h4>Description</h4>
            <p>ihuhljhijkjonjojnojonjijnmnuoujpiunoujoinnjhiuobinouobno</p>
            <h4>Available Sizes</h4>
            <h4>Available Colours</h4>
            <button className='btnWish'>Add to Wishlist</button>
            <button className='btnAdd'> Add to Cartr</button>
            
               
        </div>
      
    </>
  )
}

export default productview