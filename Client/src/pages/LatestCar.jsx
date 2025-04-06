import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const LatestCars = () => {
  const carsData = [
    {
      id: 1,
      name: "Volkswagen Tiguan 2025",
      price: "₹ 55 Lakh",
      launchDate: "APR 14, 2025",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volkswagen/Tiguan-2025/10287/1742894541977/front-left-side-47.jpg?tr=w-300",
      facelift: false,
      estimated: true
    },
    {
      id: 2,
      name: "Skoda Kodiaq 2025",
      price: "₹ 40 Lakh",
      launchDate: "APR 16, 2025",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kodiaq-2024/9930/1701494828487/front-left-side-47.jpg?tr=w-300",
      facelift: false,
      estimated: true
    },
    {
      id: 3,
      name: "BMW 2 Series 2025",
      price: "₹ 46 Lakh",
      launchDate: "APR 20, 2025",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/2-Series-2025/12171/1729141797348/front-left-side-47.jpg?tr=w-300",
      facelift: true,
      estimated: true
    },
    {
      id: 4,
      name: "Renault Kiger 2025",
      price: "₹ 6 Lakh",
      launchDate: "APR 21, 2025",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Kiger-2025/12295/1736164679149/front-left-side-47.jpg?tr=w-300",
      facelift: true,
      estimated: true,
      covered: true
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCars = carsData.slice(currentIndex, currentIndex + 4);

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-sm mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Upcoming cars</h2>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {visibleCars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <div className="relative">
              {car.covered ? (
                <img 
                  src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/Triber-2025/12296/1736164745927/front-left-side-47.jpg?tr=w-300" 
                  alt={car.name} 
                  className="w-full h-40 object-cover bg-gray-200"
                />
              ) : (
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="absolute top-2 left-2 bg-white text-xs py-1 px-2 rounded-full">
                EXPECTED LAUNCH · {car.launchDate}
              </div>
              {car.facelift && (
                <div className="absolute bottom-2 right-2 bg-white text-orange-500 text-xs py-1 px-2 rounded-full flex items-center">
                  <span className="mr-1">🔶</span> Facelift
                </div>
              )}
            </div>
            
            <div className="p-3">
              <h3 className="font-medium text-gray-800">{car.name}</h3>
              <div className="flex items-baseline mt-1">
                <span className="font-medium">{car.price}</span>
                <span className="text-xs text-gray-500 ml-1">Estimated</span>
              </div>
              
              <button className="w-full mt-3 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition-colors">
                Alert Me When Launched
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        <a href="#" className="flex items-center text-orange-500 font-medium">
          View All Upcoming Cars
          <span className="ml-1 p-1  rounded-full">
            <ChevronRight size={16} className="text-orange-500" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default LatestCars;