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
import Footer from './components/Footer';

function App() {
 
  return (
     <div className=''>
      <div className='h-screen'>
      <Home />
      </div>
      <div  className='h-screen'>
      <About/>
      </div>
      <div className='h-auto pt-20'>
      <Gallery/>
    </div>
    <div className='h-auto pt-32 '>
      <Menu/>
    </div>
    <div className='h-20 '>
    <Footer/>
    </div>
   </div>
  )
}

export default App
