import React from 'react'
import { useGlobalProductContext } from './context/ProductContext';

const Demo2 = () => {
    const {fname, lname} = useGlobalProductContext();
  return (
    <div>
      {fname} {lname}
    </div>
  )
}

export default Demo2
