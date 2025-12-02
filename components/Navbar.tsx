import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { ESHOP_URL, LOGO_IMAGE_URL } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Domů', path: '/' },
    { name: 'O nás', path: '/o-nas' },
    { name: 'Služby', path: '/sluzby' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-200 shadow-sm h-24 md:h-20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo Area - Pouze obrázek */}
          <div className="flex-shrink-0 flex items-center pt-2 md:pt-0">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src={LOGO_IMAGE_URL} 
                alt="MICROWARE" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-wide transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-mw-orange' 
                    : 'text-gray-600 hover:text-mw-blue'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            
            <a 
              href={ESHOP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-bold shadow-sm hover:shadow-md transform hover:-translate-y-0.5 bg-mw-dark text-white hover:bg-mw-blue"
            >
              <ShoppingCart className="w-4 h-4" /> <span className="hidden lg:inline">E-SHOP</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none transition-colors text-gray-600 hover:text-mw-blue"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white border-b border-gray-200 overflow-hidden transition-all duration-300 absolute w-full left-0 top-24 ${
          isOpen ? 'max-h-96 opacity-100 shadow-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-bold transition-colors ${
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
            className="block w-full mt-6 text-center bg-mw-blue text-white px-4 py-3 rounded-lg font-bold hover:bg-mw-dark transition-colors"
          >
            Přejít na E-shop
          </a>
        </div>
      </div>
    </nav>
  );
};