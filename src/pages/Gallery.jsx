import React from 'react'
import items from "../Data.json"

const Gallery = () => {
    //console.log(data)
  return (
    <div className='pt-8 flex lg:flex-row flex-wrap justify-center'>
        {items.map(item =>(
            <div className='' key={item.id}>
            <img className= "max-h-96 w-96 " src= {item.image}/>
           
            </div>
        ))}
    </div>
  )
}

export default Gallery