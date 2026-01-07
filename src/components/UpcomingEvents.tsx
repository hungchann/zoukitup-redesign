import React from 'react';
import { Calendar, MapPin, Music, Users, ArrowRight, Sparkles } from 'lucide-react';
import { events, EventType } from '../data/events';

const UpcomingEvents: React.FC = () => {
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

  // Show first 4 events
  const displayedEvents = events.slice(0, 4);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedEvents.map((event) => (
            <button
              key={event.id}
              onClick={() => handleEventClick(event.slug)}
              className="group relative overflow-hidden bg-white border border-gray-200 hover:border-logo-purple-2/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer text-left w-full shadow-sm"
            >
              {/* Poster Image */}
              {event.poster && (
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={event.poster}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs rounded uppercase tracking-wider border ${getEventTypeColor(event.type)}`}>
                      {getEventTypeLabel(event.type)}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {!event.poster && (
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 text-xs rounded uppercase tracking-wider border ${getEventTypeColor(event.type)}`}>
                      {getEventTypeLabel(event.type)}
                    </span>
                    <Sparkles size={18} className="text-logo-purple-2" />
                  </div>
                )}
                
                <h3 className="text-2xl font-zelda text-gray-900 mb-4 group-hover:text-logo-purple-2 transition-colors">
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

                <div className="flex items-center text-logo-purple-2 text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                  View Details
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

