import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { COMPANY_INFO, ESHOP_URL, LOGO_IMAGE_URL } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Domů', path: '/' },
    { name: 'O nás', path: '/o-nas' },
    { name: 'Služby', path: '/sluzby' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              {isHomePage ? (
                /* Image Logo ONLY on Home Page */
                <img 
                  src={LOGO_IMAGE_URL} 
                  alt="MICROWARE" 
                  className="h-12 w-auto object-contain"
                />
              ) : (
                /* Text Logo on other pages */
                <div className="font-bold text-2xl tracking-tighter text-mw-blue">
                  MICRO<span className="text-mw-red">WARE</span>
                  <span className="text-xs text-gray-400 font-normal align-top ml-1">TM</span>
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-mw-orange' 
                    : 'text-gray-600 hover:text-mw-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <a 
              href={ESHOP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-mw-dark text-white px-4 py-2 rounded hover:bg-mw-blue transition-colors text-sm font-medium"
            >
              <ShoppingCart className="w-4 h-4" /> E-shop
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-mw-blue focus:outline-none"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-orange-50 text-mw-orange'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-mw-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={ESHOP_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full mt-4 text-center bg-mw-blue text-white px-3 py-3 rounded-md font-medium"
            >
              Přejít na E-shop
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};