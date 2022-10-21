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
      <section className=>

      </section>
    </>
  )
}

export default productview