import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zouk-black text-stone-200 font-sans selection:bg-zouk-gold selection:text-black">
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="classes">
          <Schedule />
        </div>
        
        <div id="gallery">
          <Gallery />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-white text-black rounded-full shadow-lg transition-all duration-300 z-50 hover:bg-zouk-gold hover:text-white ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;