import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Landmark } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Rooms & Services', href: '#services' },
    { name: 'Why Lakeshore', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-panel py-3 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-chocolate flex items-center justify-center text-white">
              <Landmark size={20} />
            </div>
            <div>
              <span className="font-bengali text-xl font-bold text-coffee block leading-none">লেকশোর উইমেন্স মেস</span>
              <span className="text-xs text-chocolate font-semibold uppercase tracking-wider">Lakeshore Women's Mess</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-coffee hover:text-chocolate transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+91873293404"
              className="flex items-center space-x-2 bg-chocolate text-white px-4 py-2 rounded-full font-medium hover:bg-coffee transition-all duration-300 transform hover:scale-105 shadow-md shadow-chocolate/10"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-coffee hover:text-chocolate focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-panel shadow-lg border-t border-blueGrey/20 animate-fadeIn">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-coffee hover:bg-warmOffWhite hover:text-chocolate transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+91873293404"
              className="flex items-center justify-center space-x-2 bg-chocolate text-white mx-3 my-4 py-3 rounded-full font-medium hover:bg-coffee transition-colors shadow-md"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
