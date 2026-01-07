
import React, { useState, useEffect, useCallback } from 'react';
import { Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { classes } from '../data/classes';

const Schedule: React.FC = () => {
  // Show only first 3 classes
  const displayedClasses = classes.slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Carousel logic for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerView = isMobile ? 1 : displayedClasses.length;
  const maxIndex = Math.max(0, displayedClasses.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const currentMaxIndex = Math.max(0, displayedClasses.length - (window.innerWidth < 768 ? 1 : displayedClasses.length));
      if (prev >= currentMaxIndex) {
        return 0;
      }
      return prev + 1;
    });
  }, [displayedClasses.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  return (
    <section className="py-12 md:py-24 pb-8 md:pb-24 bg-zouk-light">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 border-b border-gray-200 pb-6">
          <div className="text-center md:text-left w-full md:w-auto">
            <span className="text-logo-purple-2 text-sm uppercase tracking-widest">Schedule</span>
            <h2 className="text-4xl md:text-5xl font-sans text-gray-900 mt-2 font-bold">Classes</h2>
          </div>
          <a 
            href="#classes-page" 
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'classes-page';
              window.scrollTo(0, 0);
            }}
            className="hidden md:flex items-center text-gray-600 hover:text-gray-900 transition-colors mt-4 md:mt-0"
          >
            View Full Schedule <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        {/* View More Button - Mobile */}
        <div className="md:hidden flex justify-center mb-8">
          <a
            href="#classes-page"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'classes-page';
              window.scrollTo(0, 0);
            }}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            View More
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        {/* Classes - Mobile: Carousel, Desktop: Grid */}
        <div className="relative">
          {/* Mobile: Carousel */}
          <div className="md:hidden relative overflow-hidden mb-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {displayedClasses.map((cls) => (
                <div key={cls.id} className="flex-shrink-0 w-full px-4">
                  <div className="group bg-white p-8 border border-gray-200 hover:border-logo-purple-2/50 transition-all duration-300 hover:-translate-y-2 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-3 py-1 text-xs rounded uppercase tracking-wider ${
                        cls.level === 'Basic' ? 'bg-green-100 text-green-700 border border-green-300' :
                        cls.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' :
                        cls.level === 'Advanced' ? 'bg-purple-100 text-purple-700 border border-purple-300' :
                        'bg-gray-100 text-gray-900 border border-gray-300'
                      }`}>{cls.level}</span>
                      <Clock size={18} className="text-logo-purple-2" />
                    </div>
                    <h3 className="text-2xl font-sans text-gray-900 mb-2 group-hover:text-logo-purple-2 transition-colors font-bold">
                      {cls.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">{cls.schedule}</p>
                    <div className="text-gray-500 mb-6 font-light text-sm line-clamp-3">
                      {cls.description}
                    </div>
                    <div className="flex items-center text-gray-700 text-sm">
                      <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-2"></span>
                      Instructor: {cls.instructors}
                    </div>
                    <a
                      href="#classes-page"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = 'classes-page';
                        window.scrollTo(0, 0);
                      }}
                      className="block w-full mt-8 py-3 border border-gray-300 text-gray-900 uppercase text-xs tracking-widest hover:bg-gray-900 hover:text-white transition-all text-center"
                    >
                      More
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {displayedClasses.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                <button
                  onClick={prevSlide}
                  className="bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {displayedClasses.map((cls) => (
              <div key={cls.id} className="group bg-white p-8 border border-gray-200 hover:border-logo-purple-2/50 transition-all duration-300 hover:-translate-y-2 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 text-xs rounded uppercase tracking-wider ${
                    cls.level === 'Basic' ? 'bg-green-100 text-green-700 border border-green-300' :
                    cls.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' :
                    cls.level === 'Advanced' ? 'bg-purple-100 text-purple-700 border border-purple-300' :
                    'bg-gray-100 text-gray-900 border border-gray-300'
                  }`}>{cls.level}</span>
                  <Clock size={18} className="text-logo-purple-2" />
                </div>
                <h3 className="text-2xl font-sans text-gray-900 mb-2 group-hover:text-logo-purple-2 transition-colors font-bold">
                  {cls.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{cls.schedule}</p>
                <div className="text-gray-500 mb-6 font-light text-sm line-clamp-3">
                  {cls.description}
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-2"></span>
                  Instructor: {cls.instructors}
                </div>
                <a
                  href="#classes-page"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = 'classes-page';
                    window.scrollTo(0, 0);
                  }}
                  className="block w-full mt-8 py-3 border border-gray-300 text-gray-900 uppercase text-xs tracking-widest hover:bg-gray-900 hover:text-white transition-all text-center"
                >
                  More
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Schedule;
