import React from 'react'
import Card from '@mui/joy/Card';
import data from '../Cakedata.json'


const Cards = () => {
  return (
    <div className=' flex flex-col lg:flex-row lg:flex-wrap '>
        {data.map(item =>(
        <div name='card-container' className='flex  h-42 w-96 m-4 outline-none rounded-100 bg-base-300' key={item.id}>
          <img name="image"  className='rounded-full h-32 w-32 m-1' src={item.image} />
          <div name="content" className="flex items-center justify-center m-10">{item.content}</div>
          <div name="price" className="flex justify-end top-0 ">Ksh.{item.price}</div>
        </div>
        ))}
    </div>
  )
}

export default Cards