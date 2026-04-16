import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white mb-10 ${
        scrolled || isOpen ? 'backdrop-blur-md shadow-sm py-3' : 'py-5 shadow-sm'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0" onClick={() => setIsOpen(false)}>
            <div className="p-1 rounded-lg flex items-center justify-center bg-accent-blue/10 group-hover:bg-accent-blue/20 transition-colors">
              <img src="/favicon.ico" alt="Vagwiin Logo" className="h-8 w-8" />
            </div>
            <span className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors hidden sm:inline ${scrolled || isOpen ? 'text-accent-dark' : 'text-accent-dark'}`}>
              Vagwiin
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors relative ${
                  isActive(link.href)
                    ? 'text-accent-blue'
                    : 'text-gray-600 hover:text-accent-blue'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent-blue text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-accent-blue focus:outline-none transition-colors p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed top-full left-0 right-0 bg-white border-b border-gray-100 overflow-hidden shadow-lg"
        >
          <div className="w-full px-4 py-6 space-y-3 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all ${
                  isActive(link.href)
                    ? 'text-white bg-accent-blue'
                    : 'text-gray-700 hover:text-accent-blue hover:bg-blue-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-accent-blue text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
