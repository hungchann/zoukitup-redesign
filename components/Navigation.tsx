import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Về chúng tôi', href: '#about-page' },
  { label: 'Lớp học', href: '#classes-page' },
  { label: 'Thư viện', href: '#gallery' },
  { label: 'Liên hệ', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
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
            src="/imange/Logo new - trắng.png" 
            alt="PTZouk Logo" 
            className="h-10 md:h-12 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.href === '#about-page' || item.href === '#home' || item.href === '#classes-page') {
                  e.preventDefault();
                  window.location.hash = item.href.replace('#', '');
                  if (item.href === '#home') {
                    window.location.hash = '';
                  }
                  window.scrollTo(0, 0);
                }
              }}
              className="text-sm uppercase tracking-widest text-stone-300 hover:text-white hover:text-logo-purple-2 transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-logo-purple-2 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#classes-page"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'classes-page';
              window.scrollTo(0, 0);
            }}
            className="px-6 py-2 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
          >
            Đăng Ký Ngay
          </a>
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
          className={`fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (item.href === '#about-page' || item.href === '#home' || item.href === '#classes-page') {
                  e.preventDefault();
                  window.location.hash = item.href.replace('#', '');
                  if (item.href === '#home') {
                    window.location.hash = '';
                  }
                  window.scrollTo(0, 0);
                }
              }}
              className="text-2xl font-serif text-white hover:text-logo-purple-2 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;