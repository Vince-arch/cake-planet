import  React from 'react';
import './index.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './pages/About';
//import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './pages/Gallery';
import { useState } from 'react';
import Menu from './pages/Menu';

function App() {
 
  return (
     <div className=''>
      <div className='h-screen'>
      <Home />
      </div>
      <div  className='h-screen'>
      <About/>
      </div>
      <div className='h-screen  bg-blue-500'>
      <Gallery/>
    </div>
    <div className='h-screen bg-black'>
      <Menu/>
    </div>
   </div>
  )
}

export default App
