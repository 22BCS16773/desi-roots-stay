
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, User } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white">
              Stay<span className="text-saffron-400">Desi</span>
            </div>
            <div className="ml-2 text-sm text-white/80 font-hindi">
              स्वदेशी आवास
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-saffron-400 transition-colors font-medium">
              Discover
            </a>
            <a href="#" className="text-white hover:text-saffron-400 transition-colors font-medium">
              Experiences
            </a>
            <a href="#" className="text-white hover:text-saffron-400 transition-colors font-medium">
              Become a Host
            </a>
            <a href="#" className="text-white hover:text-saffron-400 transition-colors font-medium">
              Help
            </a>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-saffron-400 hover:bg-white/10">
              Sign In
            </Button>
            <Button className="gradient-saffron hover:opacity-90 text-white">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-saffron-400 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/20 backdrop-blur-md rounded-lg mt-2 p-4 space-y-4">
            <a href="#" className="block text-white hover:text-saffron-400 transition-colors font-medium">
              Discover
            </a>
            <a href="#" className="block text-white hover:text-saffron-400 transition-colors font-medium">
              Experiences
            </a>
            <a href="#" className="block text-white hover:text-saffron-400 transition-colors font-medium">
              Become a Host
            </a>
            <a href="#" className="block text-white hover:text-saffron-400 transition-colors font-medium">
              Help
            </a>
            <div className="border-t border-white/20 pt-4 space-y-2">
              <Button variant="ghost" className="w-full text-white hover:text-saffron-400 hover:bg-white/10">
                Sign In
              </Button>
              <Button className="w-full gradient-saffron hover:opacity-90 text-white">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
