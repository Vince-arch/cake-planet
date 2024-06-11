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
    <div className={`fixed top-0 w-full z-10 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-transparent'} ${scrolled ? 'shadow-lg' : ''}`}>
      <div className='flex flex-col lg:flex-row lg:gap-36 pt-4 px-4 lg:px-32'>
        <div className='flex flex-col items-center lg:items-start font-bold text-3xl text-white'>
          Cake Planet
        </div>
        <nav className='flex justify-center items-center text-lg lg:text-2xl mt-4 lg:mt-0'>
          <ul className='flex flex-row pb-5 lg:flex-row gap-5'>
            <li>
              <Link to="/#home" className='hover:text-gray-300'>
                Home
              </Link>
            </li>
            <li>
              <Link to="/#about" className='hover:text-gray-300'>
                About
              </Link>
            </li>
            <li>
              <Link to="/#gallery" className='hover:text-gray-300'>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/#menu" className='hover:text-gray-300'>
                Menu
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
