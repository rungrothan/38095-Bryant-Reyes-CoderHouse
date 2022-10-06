import React from 'react'

const Item = ({title, description, price, pictureURL}) => {
  return (
    <div className='grid grid-rows-3 grid-flow-col gap-4'>
    <div className="card row-span-3 w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={pictureURL} alt={title} className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <div className="flex justify-around">
        <div>
            
            <div className="card-actions">
            <p className='text-4xl capitalize'>{price}$</p>  
            <button className="btn btn-accent">Comprar</button>
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Item