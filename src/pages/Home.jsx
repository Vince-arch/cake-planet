import React from 'react'
import Navbar from '../components/Navbar'
import cake1 from "../assets/cake1.jpg"
import Slider from '../components/Slider'
const Home = () => {
  return (
    <div > 
    <div name='section1' className='bg-yellow-300 absolute w-screen'>
       {/*needs slider */} <img src={cake1} className='absolute'></img>
        <div name='navbar' className='relative z-10'>
        <Navbar/>   
        </div>
        <Slider/>
    <div name='' className='flex relative justify-center pt-24'>
        cake Planet    
    </div>
    </div>
    </div>
  )
}

export default Home