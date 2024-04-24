import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col  lg:flex-row lg:gap-36 pt-16 '>
        <div name='left' className='flex flex-col items-center lg:pl-32 font-bold text-3xl'>Cake Planet</div>
        <div name='center'></div>
        <div name='right'className='flex flex-col lg:flex-row gap-8 items-center text-2xl'><div>About</div> <div>Gallery</div> <div>Menu</div> <div> Contact</div> </div>
    </div>
  )
}

export default Navbar