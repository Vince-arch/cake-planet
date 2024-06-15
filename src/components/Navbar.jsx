import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 w-full  z-10 transition-all duration-300 ${scrolled ? 'bg-base-300' : 'bg-transparent'} ${scrolled ? 'shadow-lg' : ''}`}>
      <div className='flex flex-col lg:flex-row lg:gap-56 pt-4 px-4 lg:px-32'>
        <div className='flex flex-col items-center lg:items-start font-bold text-3xl text-black'>
          Cake Planet
        </div>
 
          <ul className='flex flex-row pb-5  gap-5 items-center justify-center'>
            
            <div className="navbar  gap-4 flex flex-row justify-center items-center ">
            <Link to="home" smooth={true} duration={500} className="text-xl cursor-pointer">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="text-xl cursor-pointer">
              About
            </Link>
            <Link to="gallery" smooth={true} duration={500} className="text-xl cursor-pointer">
              Gallery
            </Link>
            <Link to="menu" smooth={true} duration={500} className="text-xl cursor-pointer">
              Menu
            </Link>
            </div>
            
          </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
