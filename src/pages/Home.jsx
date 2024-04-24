import React from 'react'
import Navbar from '../components/Navbar'
import cake1 from "../assets/cake1.jpg"
import Slider from '../components/Slider'
const Home = () => {
  return (
    <div > 
    <div name='section1' className=''>
        <div className='absolute h-screen w-screen inset-0 bg-black opacity-50'>
          <Slider/>
        </div>
        <div name='navbar' className='relative z-10 '>
        <Navbar/>   
        </div>
        
    <div name='' className='flex relative justify-center  pt-24'>
        cake Planet    
    </div>
    </div>
    </div>
  )
}

export default Home