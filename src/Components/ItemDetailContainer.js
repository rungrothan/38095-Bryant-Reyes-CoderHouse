import React from 'react'
import { useEffect } from 'react'
import Products from '../Mocks/Products'
const ItemDetailContainer = () => {

    useEffect(() => {
      return () => {
        GetProduct()
      }
    }, [])
    
    const GetProduct = () => {
        const Product = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Products)
            }, 2000);   
        })
    }


  return (
    <div>

    </div>
  )
}

export default ItemDetailContainer