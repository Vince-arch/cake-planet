import React, { Suspense } from 'react';
import cake1 from "../assets/cake1.jpg"; // Ensure this image is optimized
const Navbar = React.lazy(() => import('../components/Navbar'));
const Slider = React.lazy(() => import('../components/Slider'));

const Home = () => {
  return (
    <div> 
      <div name='section1'>
        <div className='absolute w-screen inset-0 bg-black opacity-50'>
          <Suspense fallback={<div>Loading...</div>}>
            <Slider/>
          </Suspense>
        </div>
        <p className='relative text-white text-3xl font-serif flex justify-center pt-36 m-5'>
          Discover the ultimate cake experience! At Cake Planet, 
          <br />we craft mouthwatering masterpieces for every celebration. 
          <br />Indulge in our heavenly flavors and stunning designs that make every occasion unforgettable.
        </p>
      </div>
    </div>
  );
}

export default React.memo(Home);
