import React from 'react';
import { Calendar, MapPin, Music, Users, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { events, EventType } from '../data/events';

const UpcomingEvents: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleEventClick = (slug: string) => {
    window.location.hash = `event-${slug}`;
    window.scrollTo(0, 0);
  };

  const getEventTypeLabel = (type: EventType): string => {
    switch (type) {
      case 'social':
        return 'Social';
      case 'workshop':
        return 'Workshop';
      case 'festival':
        return 'Festival';
      default:
        return 'Event';
    }
  };

  const getEventTypeColor = (type: EventType): string => {
    switch (type) {
      case 'social':
        return 'bg-logo-purple-2/30 text-logo-purple-2 border-logo-purple-2/30';
      case 'workshop':
        return 'bg-zouk-gold/20 text-zouk-gold border-zouk-gold/30';
      case 'festival':
        return 'bg-logo-purple-1/30 text-logo-purple-1 border-logo-purple-1/30';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  // Show first 3 events
  const displayedEvents = events.slice(0, 3);
  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, displayedEvents.length - itemsPerView);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => {
      const currentMaxIndex = Math.max(0, displayedEvents.length - (window.innerWidth < 768 ? 1 : 3));
      if (prev >= currentMaxIndex) {
        return 0;
      }
      return prev + 1;
    });
  }, [displayedEvents.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  React.useEffect(() => {
    if (displayedEvents.length <= itemsPerView) {
      return;
    }
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [displayedEvents.length, itemsPerView, nextSlide]);

  return (
    <section className="py-12 md:py-24 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 border-b border-gray-200 pb-6">
          <div className="text-center md:text-left w-full md:w-auto">
            <span className="text-logo-purple-2 text-sm uppercase tracking-widest">Events</span>
            <h2 className="text-4xl md:text-5xl font-sans text-gray-900 mt-2 font-bold">Upcoming Events</h2>
          </div>
          <a 
            href="#events-page" 
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'events-page';
              window.scrollTo(0, 0);
            }}
            className="hidden md:flex items-center text-gray-600 hover:text-gray-900 transition-colors mt-4 md:mt-0"
          >
            View All Events <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {displayedEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <button
                    onClick={() => handleEventClick(event.slug)}
                    className="group relative overflow-hidden bg-white border border-gray-200 hover:border-logo-purple-2/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer text-left w-full shadow-sm flex flex-col"
                  >
                    {/* Poster Image */}
                    {event.poster && (
                      <div className="relative w-full overflow-hidden bg-white aspect-[4/5]">
                        <img
                          src={event.poster}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 text-xs rounded uppercase tracking-wider border ${getEventTypeColor(event.type)}`}>
                            {getEventTypeLabel(event.type)}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="p-8 flex flex-col flex-1">
                      {!event.poster && (
                        <div className="flex justify-between items-start mb-4">
                          <span className={`px-3 py-1 text-xs rounded uppercase tracking-wider border ${getEventTypeColor(event.type)}`}>
                            {getEventTypeLabel(event.type)}
                          </span>
                          <Sparkles size={18} className="text-logo-purple-2" />
                        </div>
                      )}
                      
                      <h3 className="text-2xl font-zelda text-gray-900 mb-4 group-hover:text-logo-purple-2 transition-colors line-clamp-2 min-h-[3.25rem]">
                        {event.title}
                      </h3>
                      
                      {event.description && event.description !== 'Coming soon' && (
                        <p className="text-gray-600 text-sm mb-6 font-light line-clamp-3">
                          {event.description}
                        </p>
                      )}

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-700 text-sm">
                          <Calendar size={14} className="mr-2 text-logo-purple-2" />
                          {event.dateRange || event.date}
                        </div>
                        <div className="flex items-center text-gray-700 text-sm">
                          <MapPin size={14} className="mr-2 text-logo-purple-2" />
                          {event.location}
                        </div>
                        {event.dj && (
                          <div className="flex items-center text-gray-700 text-sm">
                            <Music size={14} className="mr-2 text-logo-purple-2" />
                            DJ: {event.dj}
                          </div>
                        )}
                        {event.guestInstructors && event.guestInstructors.length > 0 && (
                          <div className="flex items-center text-gray-700 text-sm">
                            <Users size={14} className="mr-2 text-logo-purple-2" />
                            {event.guestInstructors.join(', ')}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center text-logo-purple-2 text-sm uppercase tracking-wider group-hover:gap-2 transition-all mt-auto">
                        View Details
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {displayedEvents.length > itemsPerView && (
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

export default UpcomingEvents;

