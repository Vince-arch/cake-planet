import React from 'react';
import Card from '@mui/joy/Card';
import data from '../Cakedata.json';

const Cards = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:flex-wrap'>
      {data.map(item => (
        <div name='card-container' className='flex flex-row h-42 w-96 m-4 outline-none rounded-100 bg-base-300 shadow-md hover:bg-base-200 duration-700' key={item.id}>
          <div name="image" className='rounded-full h-32 w-32 m-1'>
            <img className='rounded-full h-32 w-32 m-1' src={item.image} alt={item.name} />
          </div>
          <div className='flex-grow flex items-center justify-center pl-4'>
            <span>{item.content}</span>
          </div>
          <div name="price" className="flex  w-30 m-1 ">
            <span>Ksh.{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
