import { ChevronRight } from 'lucide-react';
import React, { useState, useRef } from 'react';

const CarCard = ({ brand, model, priceStart, priceEnd, imageUrl }) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-md">
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={`${brand} ${model}`} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800">{brand} {model}</h3>
        <p className="text-gray-700 mt-1">
          ₹ {priceStart} - {priceEnd} Lakh<sup>*</sup>
        </p>
        <button className="mt-4 w-full py-2 text-center border border-gray-300 rounded text-orange-500 hover:bg-orange-50 transition-colors">
          View April Offers
        </button>
      </div>
    </div>
  );
};

export const CarSearch = () => {
  const [activeCategory, setActiveCategory] = useState('SUV');
  const sliderRef = useRef(null);
  
  const categories = ['SUV', 'Hatchback', 'Sedan', 'MUV', 'Luxury'];
  
  const allCars = {
    SUV: [
        {
            "id": 1,
            "brand": "Tata",
            "model": "Curvv",
            "priceStart": "10",
            "priceEnd": "19.20",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Curvv/9578/1723033064164/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 2,
            "brand": "Mahindra",
            "model": "XUV700",
            "priceStart": "13.99",
            "priceEnd": "25.74",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV700/10789/1705388477954/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 3,
            "brand": "Mahindra",
            "model": "Scorpio N",
            "priceStart": "13.99",
            "priceEnd": "24.89",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1740050844896/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 4,
            "brand": "Mahindra",
            "model": "Thar ROXX",
            "priceStart": "12.99",
            "priceEnd": "23.09",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg?tr=w-300"
          },
    ],
    Hatchback: [
        {
            "id": 5,
            "brand": "Maruti",
            "model": "Creta",
            "priceStart": "10.87",
            "priceEnd": "19.20",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/9226/1739945896166/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 6,
            "brand": "Maruti",
            "model": "Seltos",
            "priceStart": "10.90",
            "priceEnd": "20.30",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Baleno/10497/1697697558001/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 7,
            "brand": "Tata",
            "model": "Swift",
            "priceStart": "6.49",
            "priceEnd": "9.60",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tiago/10655/1738146879386/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 8,
            "brand": "Maruti",
            "model": "Altroz",
            "priceStart": "6.50",
            "priceEnd": "10.10",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Wagon-R/10365/1687580655855/front-left-side-47.jpg?tr=w-300"
          },
    ],
    Sedan: [
        {
            "id": 9,
            "brand": "Maruti",
            "model": "i20",
            "priceStart": "7.19",
            "priceEnd": "11.80",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire/11387/1731318279714/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 10,
            "brand": "Hyundai",
            "model": "Baleno",
            "priceStart": "6.61",
            "priceEnd": "9.88",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Verna/8703/1736412929424/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 11,
            "brand": "Hyundai",
            "model": "City",
            "priceStart": "11.49",
            "priceEnd": "16.20",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Aura/10126/1694588549389/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 12,
            "brand": "Skoda",
            "model": "Verna",
            "priceStart": "10.90",
            "priceEnd": "17.42",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Slavia/11810/1718773567443/front-left-side-47.jpg?tr=w-300"
          },
    ],
    MUV: [
        {
            "id": 13,
            "brand": "Maruti",
            "model": "Virtus",
            "priceStart": "11.56",
            "priceEnd": "18.77",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga/10293/1697697779799/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 14,
            "brand": "Toyota",
            "model": "Slavia",
            "priceStart": "10.69",
            "priceEnd": "18.69",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9612/1697698611076/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 15,
            "brand": "Kia",
            "model": "Innova Crysta",
            "priceStart": "19.99",
            "priceEnd": "26.30",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Carens/10306/1739596312616/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 16,
            "brand": "Toyota",
            "model": "Carens",
            "priceStart": "10.52",
            "priceEnd": "19.44",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Hycross/10929/1741580277049/front-left-side-47.jpg?tr=w-300"
          },
    ],
    Luxury: [
        {
            "id": 17,
            "brand": "Land-Rover",
            "model": "Ertiga",
            "priceStart": "8.64",
            "priceEnd": "13.08",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Defender/12294/1736235204503/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 18,
            "brand": "Land-Rover",
            "model": "Innova Hycross",
            "priceStart": "19.77",
            "priceEnd": "30.98",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Range-Rover/11540/1719037980777/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 19,
            "brand": "Toyota",
            "model": "E-Class",
            "priceStart": "75.00",
            "priceEnd": "88.00",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Vellfire/10337/1715313437175/front-left-side-47.jpg?tr=w-300"
          },
          {
            "id": 20,
            "brand": "BMW",
            "model": "5 Series",
            "priceStart": "71.49",
            "priceEnd": "77.90",
            "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X5-2023/10452/1688992642182/front-left-side-47.jpg?tr=w-300"
          }
    ]
  };

  

  return (
    <>
    
    <div className="flex items-center justify-center my-8 m">
        <img src="https://redcarpat.com/a/728x90.png" alt="Hostinger" />
      </div>

    <div className="max-w-6xl mx-auto px-6 bg-white rounded-lg shadow-sm mb-10">
      
      <div className="max-w-6xl rounded-lg px-1  p-6 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">The most searched cars</h2>

        <div className="flex border-b">
          {categories.map(category => (
            <button
            key={category}
              className={`py-2 px-4 font-medium text-gray-700 cursor-pointer${
                activeCategory === category ? 'border-b-2 border-red-500 text-red-500 ' : ''
              }`}
              onClick={() => setActiveCategory(category)}
              >
              {category}
            </button>
          ))}
        </div>

        <div className="relative mt-6">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
            {allCars[activeCategory].map(car => (
              <div key={car.id} className="flex-shrink-0 w-64">
                <CarCard
                  brand={car.brand}
                  model={car.model}
                  priceStart={car.priceStart}
                  priceEnd={car.priceEnd}
                  imageUrl={car.imageUrl}
                  />
              </div>
            ))}
          </div>
          
        </div>

        
        <div className="mt-4">
        <a href="#" className="text-orange-500 flex items-center font-medium">
          View All {activeCategory} Cars <ChevronRight className="ml-1" size={18} />
        </a>
      </div>

      </div>
     </div>
    </>
  );
};
