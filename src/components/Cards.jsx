import React from 'react'
import Card from '@mui/joy/Card';


const Cards = () => {
  return (
    <div>
        <div name='card-container' className='flex bg-blue-400 h-42 w-96 m-4 outline'>
          <div name="image"  className='rounded-full bg-white h-32 w-32 m-1'></div>
          <div name="content" className="flex items-center justify-center m-14">Forest cake</div>
          <div name="price" className="flex justify-end top-0">ksh.55</div>

        </div>
    </div>
  )
}

export default Cards