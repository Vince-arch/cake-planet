import React from 'react'
import items from "../Data.json"

const Gallery = () => {
    //console.log(data)
  return (
    <div>
    <div className='flex flex-col items-center text-5xl m-5'>
    Gallery
  </div>
    <div className=' w-screen flex lg:flex-row flex-wrap justify-center text'>
  
        {items.map(item =>(
            <div className='' key={item.id}>
            <img className= "h-96 w-96  " src= {item.image}/>
           
            </div>
        ))}
    </div>
    </div>
  )
}

export default Gallery