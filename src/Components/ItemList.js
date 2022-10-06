import React, { useEffect, useState } from 'react'
import Products from '../Mocks/Products.js'
import Item from './Item.js'


const ItemList = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {    
      return () => {
        GetProducts()
      }
    }, [])
    

    const GetProducts = () => {
        const ListProducts = new Promise((resolve) => {
          setTimeout( () => {
            resolve(Products)
          }, 2000);  
        })

        ListProducts
            .then ( respond => {
               setProduct(respond)
            })
            .catch( error => {
                console.log( 'error: ' + error);
            })
    }

  return (
    <div className='flex justify-around mt-6'>
        { product.map ( p => <Item key={p.id} {...p} />)}    
    </div>
  )
}

export default ItemList