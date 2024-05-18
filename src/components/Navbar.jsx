import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className={`fixed h-grow top-0 w-full z-10 transition-all duration-300 ${scrolled ? 'bg-gray-400' : 'bg-transparent'} lg:gap-36 pt-4`}>
      <div className='flex flex-col lg:flex-row lg:gap-36'>
        <div name='left' className='flex flex-col items-center lg:pl-32 font-bold text-3xl text-white'>
          Cake Planet
        </div>
        <nav name='center' className='flex justify-center items-center text-2xl '>
          <ul className='flex flex-row justify-center gap-5 mb-5 lg:mb-10'>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Menu</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
