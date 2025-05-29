
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              Stay<span className="text-saffron-400">Desi</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Authentic Indian experiences that connect travelers with local culture, traditions, and hospitality.
            </p>
            <div className="text-sm text-gray-400 font-hindi">
              भारतीय संस्कृति का अनुभव करें
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Village Stays</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Heritage Homes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Spiritual Retreats</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Royal Palaces</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Farm Stays</a></li>
            </ul>
          </div>

          {/* Host */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">For Hosts</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">List Your Property</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Host Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Host Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Earnings Calculator</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Safety Information</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Trust & Safety</a></li>
              <li><a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 StayDesi. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-saffron-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
