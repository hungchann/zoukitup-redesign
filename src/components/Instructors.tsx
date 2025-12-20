import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Instructor {
  id: number;
  name: string;
  image: string;
  description: string;
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: 'Instructor 1',
    image: '/image/gv-1.png',
    description: 'Introduction text demo'
  },
  {
    id: 2,
    name: 'Instructor 2',
    image: '/image/gv-2.png',
    description: 'Introduction text demo'
  },
  {
    id: 3,
    name: 'Instructor 3',
    image: '/image/gv-3.png',
    description: 'Introduction text demo'
  },
  {
    id: 4,
    name: 'Instructor 4',
    image: '/image/gv-1.png',
    description: 'Introduction text demo'
  }
];

const Instructors: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, instructors.length - itemsPerView);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => {
      const currentMaxIndex = Math.max(0, instructors.length - (window.innerWidth < 768 ? 1 : 3));
      if (prev >= currentMaxIndex) {
        return 0;
      }
      return prev + 1;
    });
  }, []);

  // Auto-slide every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  return (
    <section className="py-8 md:py-24 pt-8 md:pt-24 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-sans text-gray-900 font-bold">Instructors</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {instructors.map((instructor) => (
                <div key={instructor.id} className="group text-center flex-shrink-0 px-4" style={{ width: `${100 / itemsPerView}%` }}>
                  <div className="relative mb-6 overflow-hidden aspect-square max-w-xs mx-auto">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-sans text-gray-900 mb-3 font-bold">{instructor.name}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{instructor.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {instructors.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
              <div className="flex md:hidden justify-center gap-2 mt-6">
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
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Instructors;

