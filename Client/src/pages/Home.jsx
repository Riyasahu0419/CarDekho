import React, { useState } from 'react';
import CarSearch from './mostSearches';
import ElectricCars from './ElectricCars';
import LatestCars from './LatestCar';

const Home = () => {
  const [searchType, setSearchType] = useState('new');
  const [filterBy, setFilterBy] = useState('budget');

  return (
    <>
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden flex flex-col items-center">
      {/* Background Image */}
      <img 
        src="https://wallpapers.com/images/hd/2018-audi-r8-v10-plus-black-l6u8zq0ueij1d2nz.webp" 
        alt="Car Background" 
        className="absolute inset-0 w-full h-full "
        />
      
      {/* Search Panel (Hidden on Small Screens) */}
      <div className="relative  bg-white md:p-6 rounded-lg shadow-md w-full max-w-md mx-4 mt-10 hidden md:block">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">Find your right car</h2>
        
        {/* Car Type Tabs */}
        <div className="flex mb-4 space-x-2">
          <button 
            className={`py-2 px-4 text-sm rounded ${searchType === 'new' ? 'bg-gray-800 text-white' : 'bg-white border border-gray-300 text-gray-700'}`}
            onClick={() => setSearchType('new')}
            >
            New Car
          </button>
          <button 
            className={`py-2 px-4 text-sm rounded ${searchType === 'used' ? 'bg-gray-800 text-white' : 'bg-white border border-gray-300 text-gray-700'}`}
            onClick={() => setSearchType('used')}
            >
            Used Car
          </button>
        </div>
        
        {/* Filter Options */}
        <div className="flex items-center space-x-4 mb-6">
          <label className="flex items-center">
            <input 
              type="radio" 
              name="filterType" 
              checked={filterBy === 'budget'} 
              onChange={() => setFilterBy('budget')} 
              className="mr-1 h-4 w-4 accent-red-500"
              />
            <span className={`text-sm ${filterBy === 'budget' ? 'text-red-500' : 'text-gray-700'}`}>By Budget</span>
          </label>
          <label className="flex items-center">
            <input 
              type="radio" 
              name="filterType" 
              checked={filterBy === 'brand'} 
              onChange={() => setFilterBy('brand')} 
              className="mr-1 h-4 w-4 accent-red-500"
              />
            <span className={`text-sm ${filterBy === 'brand' ? 'text-red-500' : 'text-gray-700'}`}>By Brand</span>
          </label>
        </div>
        
        {/* Dropdown Selects */}
        <div className="mb-4">
          <select className="w-full p-2 border border-gray-300 rounded mb-2 text-sm text-gray-600">
            <option>Select Budget</option>
            <option>Under $20,000</option>
            <option>$20,000 - $40,000</option>
            <option>$40,000 - $60,000</option>
            <option>Above $60,000</option>
          </select>
          
          <select className="w-full p-2 border border-gray-300 rounded text-sm text-gray-600">
            <option>All Vehicle Types</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Hatchback</option>
            <option>Pickup Truck</option>
            <option>Electric</option>
          </select>
        </div>
        
        {/* Search Button */}
        <button className="w-full py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 transition duration-200">
          Search
        </button>
        
        {/* Advanced Search Link */}
        <div className="mt-2 text-right">
          <a href="#" className="text-gray-600 text-xs hover:text-gray-800">
            Advanced Search →
          </a>
        </div>
      </div>
      
      {/* Showcased Car Info (Centered on Mobile) */}
      <div className="relative  w-full px-4 mt-4 md:mt-0 flex flex-1 items-center justify-center text-center text-white">
        <div className=" bg-opacity-80 p-4 rounded-lg">
          <span className="px-3 py-1 text-xs rounded-full bg-red-500">Showcased</span>
          <div className="mt-1 text-xl font-bold">AWD, tech-laden, and more</div>
          <h1 className="text-3xl font-bold my-1">Tata Harrier EV</h1>
          
          <div className="flex items-center justify-center mt-2">
            <span className="text-base mr-1">Know More</span>
            <span className="bg-red-500 rounded-full p-1 inline-flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-80 text-white px-4 py-2 text-xs">
        Tekho, Ask Anything
      </div>

    </div>
    <CarSearch/>
    <ElectricCars/> 
    <LatestCars/> 
</>
  );
};

export default Home;
