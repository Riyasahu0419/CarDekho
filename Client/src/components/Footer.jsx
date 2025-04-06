import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 mt-10">
      {/* Top Features Section */}
      <div className="container mx-auto mb-8">
        <div className="flex flex-wrap justify-between items-center mb-12">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-3">
              <div className="w-8 h-8  rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold">🏆</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm">India's #1</h4>
              <p className="text-gray-500 text-xs">Largest Auto portal</p>
            </div>
          </div>
          
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-3">
              <div className="w-8 h-8  rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold">🚗</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm">Car Sold</h4>
              <p className="text-gray-500 text-xs">Every 4 minute</p>
            </div>
          </div>
          
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-3">
              <div className="w-8 h-8  rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold">🏷️</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm">Offers</h4>
              <p className="text-gray-500 text-xs">Stay updated pay less</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="mr-3">
              <div className="w-8 h-8  rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold">📊</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-sm">Compare</h4>
              <p className="text-gray-500 text-xs">Decode the right car</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Links */}
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* About CarDekho */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-bold text-sm uppercase mb-4">About CarDekho</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">About</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">Careers With Us</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">Corporate Policies</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">Investors</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">FAQs</a></li>
            </ul>
          </div>
          
          {/* Connect With Us */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-bold text-sm uppercase mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">Feedback</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">Advertise with Us</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">Become Partner Dealer</a></li>
            </ul>
          </div>
          
          {/* Others */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-bold text-sm uppercase mb-4">Others</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">TrucksDekho</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">TyreDekho</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">TractorsDekho</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">Girnar Vision Fund</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">Emergency Response</a></li>
              <li><a href="#" className="text-gray-500 text-sm hover:text-gray-700">Car Sales Trends</a></li>
            </ul>
          </div>
          
          {/* Experience CarDekho App */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="font-bold text-sm uppercase mb-4">Experience CarDekho App</h3>
            <div className="flex space-x-2 mb-6">
              <a href="#" className="block">
                <img src="https://stimg.cardekho.com/pwa/img/appstore.png" alt="App Store" className="h-10" />
              </a>
              <a href="#" className="block">
                <img src="https://stimg.cardekho.com/pwa/img/playstore.png" alt="Google Play" className="h-10" />
              </a>
            </div>
            
            <h3 className="font-bold text-sm uppercase mb-4">CarDekho Group Ventures</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="block">
                <img src="https://stimg.cardekho.com/pwa/img/footer-BdLogo.svg" alt="BikeDekho" className="h-8" />
              </a>
              <a href="#" className="block">
                <img src="https://stimg.cardekho.com/pwa/img/footer-rupyyLogo.svg" alt="Rupyy" className="h-8" />
              </a>
              <a href="#" className="block">
                <img src="https://stimg.cardekho.com/pwa/img/footer-zwLogo.svg" alt="ZigWheels" className="h-8" />
              </a>
              <a href="#" className="block">
                <img src="https://stimg.cardekho.com/pwa/img/footer-IdLogo.svg" alt="InsuranceDekho" className="h-8" />
              </a>
              <a href="#" className="block">
                <img src="https://stimg.cardekho.com/pwa/img/Revv_Logo.svg" alt="Revv" className="h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="container mx-auto pt-8 mt-8 border-t border-gray-200">
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-xs">© 2025 Girnar Software Pvt. Ltd.</p>
          </div>
          
          <div>
            <div className="flex items-center">
              <p className="mr-4 text-gray-700 font-medium text-sm">Connect:</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 w-5 h-5 flex items-center justify-center">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 w-5 h-5 flex items-center justify-center">
                  <span className="text-sm">𝕏</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 w-5 h-5 flex items-center justify-center">
                  <span className="text-sm">▶</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 w-5 h-5 flex items-center justify-center">
                  <span className="text-sm">📷</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 w-5 h-5 flex items-center justify-center">
                  <span className="text-sm">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;