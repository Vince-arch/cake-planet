import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import items from "../Data.json";

const Gallery = () => {
  return (
    <div className='pt-32 lg:pt-0'>
      <div className='flex flex-col items-center text-5xl m-5'>
        Gallery
      </div>
      <div className='w-screen flex lg:flex-row flex-wrap justify-center gap-5'>
        {items.map(item => (
          <div key={item.id}>
            <LazyLoadImage
              className="h-72 lg:h-96 w-80 lg:w-96"
              src={item.image}
              alt={item.description} 
              effect="blur" 
              placeholderSrc={item.image} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
