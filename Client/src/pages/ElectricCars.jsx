import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const ElectricCars = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carData = [
    {
      id: 1,
      name: 'Mahindra BE 6',
      price: '₹ 18.90 - 26.90 Lakh*',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/BE-6/9263/1739189295831/front-left-side-47.jpg?tr=w-300',
    },
    {
      id: 2,
      name: 'Mahindra XEV 9e',
      price: '₹ 21.90 - 30.50 Lakh*',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra-XEV/9e/9262/1732688872801/front-left-side-47.jpg?tr=w-300',
    },
    {
      id: 3,
      name: 'MG Windsor EV',
      price: '₹ 14 - 16 Lakh*',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Windsor-EV/11848/1726050481737/front-left-side-47.jpg?tr=w-300',
    },
    {
      id: 4,
      name: 'Hyundai CRETA Electric',
      price: '₹ 17.99.000*',
      image: 'https://tpc.googlesyndication.com/simgad/10005278939216742610',
    }
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carData.length);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Electric cars</h2>
      
      <div className="relative">
        <div className="flex gap-4 overflow-x-hidden">
          {carData.map((car, index) => (
            <div 
              key={car.id} 
              className={`min-w-[280px] bg-white rounded-lg shadow-sm transition-all duration-300 ${
                index < currentSlide ? 'translate-x-[-100%] hidden' : ''
              }`}
            >
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-medium text-lg text-gray-800">{car.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{car.price}</p>
                <button className="w-full border border-orange-500 text-orange-500 rounded-md py-2 hover:bg-orange-50 transition-colors">
                  View April Offers
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={handleNextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="mt-4">
        <a href="#" className="text-orange-500 flex items-center font-medium">
          View All Electric Cars <ChevronRight className="ml-1" size={18} />
        </a>
      </div>
    </div>
  );
};
