import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
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
        <Link to='/sa' className='primary-btn back'>
                <i className='fas fa-long-arrow-alt-left'> Back</i>
            </Link>
        </div>
      </section>
    </>
  )
}

export default productview