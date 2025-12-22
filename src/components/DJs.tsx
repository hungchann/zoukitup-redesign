import React, { useState } from 'react';
import { Music, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface DJ {
  id: number;
  name: string;
  image: string;
  description: string;
  link?: string;
  platform?: 'soundcloud' | 'mixcloud';
}

const djs: DJ[] = [
  {
    id: 1,
    name: 'DJ AnhQ',
    image: '/image/dj-1.png',
    description: 'Introduction text demo',
    link: 'https://soundcloud.com/dj-anh-q',
    platform: 'soundcloud'
  },
  {
    id: 2,
    name: 'DJ TK',
    image: '/image/dj-2.png',
    description: 'Introduction text demo',
    link: 'https://www.mixcloud.com/PhuongVu201/',
    platform: 'mixcloud'
  }
];

const DJs: React.FC = () => {
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

  const itemsPerView = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, djs.length - itemsPerView);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => {
      const currentMaxIndex = Math.max(0, djs.length - (window.innerWidth < 768 ? 1 : 2));
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
    <section className="py-12 md:py-24 bg-zouk-light text-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-sans text-gray-900 font-bold">DJs</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {djs.map((dj) => (
                <div key={dj.id} className="group text-center flex-shrink-0 px-4" style={{ width: `${100 / itemsPerView}%` }}>
                  <div className="relative mb-6 overflow-hidden aspect-square max-w-xs mx-auto">
                    <img
                      src={dj.image}
                      alt={dj.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mb-3 px-2">
                    <h3 className="text-2xl font-sans text-gray-900 font-bold">{dj.name}</h3>
                    {dj.link && (
                      <a
                        href={dj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white border border-logo-purple-2/30 text-logo-purple-2 hover:bg-logo-purple-2 hover:text-white transition-all duration-300 text-xs uppercase tracking-widest group whitespace-nowrap shrink-0"
                      >
                        <Music size={14} className="shrink-0" />
                        <span>{dj.platform === 'soundcloud' ? 'SoundCloud' : 'Mixcloud'}</span>
                        <ExternalLink size={12} className="shrink-0 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed">{dj.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {djs.length > itemsPerView && (
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

export default DJs;

