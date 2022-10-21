import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';


const productview = () => {
  const {id} = useParams()
  const [ item, setItem ] = useState(null)


  return (
    <div>
      
    </div>
  )
}

export default productview