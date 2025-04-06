import React, { useState } from 'react';
import { Search, ChevronDown, MapPin, Heart, User, Menu, X } from 'lucide-react';
import {Link} from 'react-router-dom'
import RegisterLogin from '../pages/RegisterLogin';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Sample dropdown menu data
  const dropdownMenus = {
    'NEW CARS': [
      'Explore New Cars',
      'Electric Cars',
      'Popular Cars',
      'Upcoming Cars',
      'New Launches',
      'Car Insurance',
      'Popular Brands',
      'Compare Cars',
      'New Car Offers & Discounts',
      'Find Car Dealers',
      'Find EV Charging Stations',
      'Find Fuel Stations',
      'Check Fuel Prices'
    ],

    'USED CARS': [
      'Find Used Cars', 
      'Sell Your Car', 
      'Used Car Valuation', 
      'Used Car Dealers'
    ],

    'NEWS & REVIEWS': [
      'Car News', 
      'Car Reviews', 
      'First Drive', 
      'Road Tests', 
      'User Reviews'
    ],
    
    'VIDEOS': [
      'video Reviews', 
      'visual stories'
    ]
  };

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm w-full relative z-10 sticky top-0">

      <div className="w-full">
        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 py-1 w-full">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <Link to={"/"}>
                  <img 
                    src="https://stimg.cardekho.com/pwa/img/carDekho-newLogo.svg" 
                    alt="CarDekho Logo" 
                    className="h-10"
                    />
                    </Link>
                </div>
              </div>
            </div>
            
            {/* Search Bar - Hide on mobile */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-4">
              <div className="relative w-full max-w-xl">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <div className="px-2 border-r border-gray-300">
                    <button className="flex items-center text-gray-700">
                      <span>All</span>
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Search or Ask a Question"
                    className="py-2 px-3 w-full focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="p-2 text-gray-500">
                    <Search size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Side - Hide most items on mobile */}
            <div className="flex items-center">
              <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center text-gray-700  cursor-pointer hover:border-gray-600">
                <span className='text-sm border-b border-gray-400'>English</span>
                <ChevronDown size={16} className="ml-1" />
                </div>

                
                <button className="text-gray-700">
                  <Heart size={20} />
                </button>
                
                <div className="flex items-center text-gray-700 ">
                  <RegisterLogin/>
                  <span>Login / Register</span>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center ml-4">
                <button 
                  onClick={toggleMobileMenu}
                  className="text-gray-700 focus:outline-none"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Border between navbar and mini navbar */}
        <div className="w-full border-b border-gray-200"></div>
        
        {/* Bottom Mini Navbar - Hide on mobile */}
        <div className="hidden md:block max-w-7xl mx-auto px-4 py-1 w-full">
          <div className="flex items-center space-x-6 py-2">
            {Object.keys(dropdownMenus).map((menu) => (
              <div 
                key={menu}
                className="relative flex items-center text-gray-700 font-medium cursor-pointer"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <span>{menu}</span>
                <ChevronDown size={16} className="ml-1" />
                
                {/* Dropdown Menu */}
                {activeDropdown === menu && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-md py-2 z-20">
                    {dropdownMenus[menu].map((item) => (
                      <a 
                        key={item} 
                        href="#" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex-grow"></div>
            
            <div className="flex items-center text-gray-700">
              <MapPin size={20} className="mr-1" />
              <span>Select City</span>
              <ChevronDown size={16} className="ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full border-t border-gray-200">
          {/* Mobile Search */}
          <div className="px-4 py-2">
            <div className="flex items-center border border-gray-300 rounded-md">
              <input
                type="text"
                placeholder="Search or Ask a Question"
                className="py-2 px-3 w-full focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="p-2 text-gray-500">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Navigation Items */}
          <div className="px-2 pt-2 pb-4">
            {Object.keys(dropdownMenus).map((menu) => (
              <div key={menu} className="px-3 py-2">
                <div className="flex justify-between items-center text-gray-700 font-medium">
                  <span>{menu}</span>
                  <ChevronDown size={16} />
                </div>
                <div className="pl-4 mt-1 border-l-2 border-gray-200">
                  {dropdownMenus[menu].map((item) => (
                    <a 
                      key={item} 
                      href="#" 
                      className="block py-1 text-sm text-gray-600"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            
            {/* <div className="border-t border-gray-200 mt-2 pt-2"> */}
              <div className="px-3 py-2 flex items-center text-gray-700">
                <MapPin size={18} className="mr-2" />
                <span>Select City</span>
              </div>
              
              <div className="px-3 py-2 flex items-center text-gray-700">
                <RegisterLogin/>
                <span>Login / Register</span>
              </div>
              
              <div className="px-3 py-2 flex items-center text-gray-700">
                <Heart size={18} className="mr-2" />
                <span>Favorites</span>
              </div>
            {/* </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;