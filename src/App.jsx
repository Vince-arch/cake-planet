import React, { useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Menu from './pages/Menu';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <div className='overflow-x-hidden'>
        <div id="home" className='h-screen'>
          <Home />
        </div>
        <div id="about" className='h-screen'>
          <About />
        </div>
        <div id="gallery" className='h-auto pt-20'>
          <Gallery />
        </div>
        <div id="menu" className='h-auto pt-32'>
          <Menu />
        </div>
        
          <Footer />
        
      </div>
    </Router>
  );
}

export default App;
