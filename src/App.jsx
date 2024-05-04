import  React from 'react';
import './index.css'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './pages/About';
//import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './pages/Gallery';

function App() {
 

  return (
   <Router>
     <div>
      <Navbar/>
      <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path='about' exact Component={About}/>
      <Route path='gallery' exact Component={Gallery}/>
      </Routes>
    </div>
   </Router>
  )
}

export default App
