import React from 'react'
import { useGlobalProductContext } from './context/ProductContext'

const Demo1 = () => {
    const {fname, lname } = useGlobalProductContext();
  return (
    <div>
      MY NAME IS {fname} {lname}
    </div>
  )
}

export default Demo1
