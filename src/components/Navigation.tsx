import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about-page' },
  { label: 'Classes', href: '#classes-page' },
  { label: 'Events', href: '#events-page' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Code of Conduct', href: '#code-of-conduct' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open and preserve scroll position
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY;
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const savedPosition = scrollPositionRef.current;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restore scroll position after a brief delay to ensure styles are applied
      setTimeout(() => {
        window.scrollTo(0, savedPosition);
      }, 0);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-logo-purple-1 via-logo-purple-2 to-logo-purple-1/90 backdrop-blur-md py-4 shadow-sm' : 'bg-gradient-to-r from-logo-purple-1 via-logo-purple-2 to-logo-purple-1 py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="z-50 flex items-center"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
            window.scrollTo(0, 0);
          }}
        >
          <img 
            src="/image/Logo new - trắng.png" 
            alt="PTZouk Logo" 
            className="h-7 md:h-8 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.href === '#about-page' || item.href === '#home' || item.href === '#classes-page' || item.href === '#code-of-conduct' || item.href === '#events-page') {
                  e.preventDefault();
                  window.location.hash = item.href.replace('#', '');
                  if (item.href === '#home') {
                    window.location.hash = '';
                  }
                  window.scrollTo(0, 0);
                }
              }}
              className="text-sm uppercase tracking-widest text-white hover:text-white/80 transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 z-40 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'fixed',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsMobileMenuOpen(false);
            }
          }}
          onTouchStart={(e) => {
            // Prevent body scroll when touching menu
            if (e.target === e.currentTarget) {
              e.preventDefault();
            }
          }}
        >
          <div className="flex flex-col items-center space-y-8 py-8 w-full">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                if (item.href === '#about-page' || item.href === '#home' || item.href === '#classes-page' || item.href === '#code-of-conduct' || item.href === '#events-page') {
                  e.preventDefault();
                  window.location.hash = item.href.replace('#', '');
                  if (item.href === '#home') {
                    window.location.hash = '';
                  }
                  window.scrollTo(0, 0);
                }
                }}
                className="text-2xl font-sans text-gray-900 hover:text-logo-purple-2 transition-colors z-50"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;