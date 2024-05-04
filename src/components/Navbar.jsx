import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-col  lg:flex-row lg:gap-36 pt-16 relative z-10 '>
        <div name='left' className='flex flex-col items-center lg:pl-32 font-bold text-3xl'>Cake Planet</div>
        <nav name='center'className=' items-center text-2xl '>
          <ul className='flex flex-col lg:flex-row lg:gap-5'>
            <li><Link to ="/">Home</Link></li>
            <li><Link to="/about">About</Link> </li>
            <li><Link to = "/gallery">Gallery</Link></li>
            <li><Link to ="/menu">Menu</Link></li>
            <li><Link to ="/contact">Contact</Link></li>  
          </ul>          
        </nav>
    </div>
  )
}

export default Navbar