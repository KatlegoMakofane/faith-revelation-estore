import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Sdata from '../../screens/Sales/Sdata';

const productview = () => {
  const {id} = useParams()
  const [ item, setItem ] = useState(null)

  useEffect(() => {
    let item
  })


  return (
    <div>
      
    </div>
  )
}

export default productview