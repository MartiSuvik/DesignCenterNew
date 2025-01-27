import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-serif">D&D Design Center</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-600">Projects</a>
            <a href="#" className="text-gray-900 hover:text-gray-600">Collections</a>
            <a href="#" className="text-gray-900 hover:text-gray-600">Company</a>
            <a href="#" className="text-gray-900 hover:text-gray-600">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-900">Projects</a>
            <a href="#" className="block px-3 py-2 text-gray-900">Collections</a>
            <a href="#" className="block px-3 py-2 text-gray-900">Company</a>
            <a href="#" className="block px-3 py-2 text-gray-900">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;