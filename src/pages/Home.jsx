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
        <div className='relative'>
          <Navbar/>
        </div>
        
    {/*<div name='' className='flex relative justify-center  pt-24 text-white text-4xl'>
        Cake Planet    
  </div>*/}
    <p className='relative text-white text-3xl font-serif flex justify-center  pt-36 m-5'>Discover the ultimate cake experience! At Cake Planet, <br></br>we craft mouthwatering masterpieces for every celebration. <br></br>Indulge in our heavenly flavors and stunning designs that make every occasion unforgettable.</p>
    </div>
    </div>
  )
}

export default Home