import React from 'react';
import { ArrowLeft, Calendar, MapPin, Music, Users, ArrowRight, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { events, EventType } from '../data/events';

const EventsPage: React.FC = () => {
  const handleBackToHome = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

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
        return 'bg-white/10 text-white border-white/20';
    }
  };

  return (
    <div className="min-h-screen bg-zouk-black text-stone-200 font-sans selection:bg-logo-purple-2 selection:text-white">
      <Navigation />
      
      <section className="py-24 bg-zouk-black text-white relative overflow-hidden pt-32">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={handleBackToHome}
            className="mb-8 flex items-center text-stone-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-widest">Về trang chủ</span>
          </button>

          {/* Main Header */}
          <div className="text-center mb-20 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-zelda mb-6 leading-tight">
              Sự Kiện <span className="text-logo-purple-2 italic">PTZouk</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-logo-purple-2 to-transparent mx-auto mb-4"></div>
            <p className="text-stone-300 font-light text-lg max-w-2xl mx-auto">
              Khám phá các sự kiện sắp tới và tham gia cùng cộng đồng PTZouk
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {events.map((event) => (
              <button
                key={event.id}
                onClick={() => handleEventClick(event.slug)}
                className="group relative overflow-hidden bg-zouk-dark-gray border border-white/5 hover:border-logo-purple-2/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer text-left w-full"
              >
                {/* Poster Image */}
                {event.poster && (
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.poster}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
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
                  
                  <h3 className="text-2xl font-zelda text-white mb-4 group-hover:text-logo-purple-2 transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-stone-400 text-sm mb-6 font-light line-clamp-3">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-stone-300 text-sm">
                      <Calendar size={14} className="mr-2 text-logo-purple-2" />
                      {event.dateRange || event.date}
                    </div>
                    <div className="flex items-center text-stone-300 text-sm">
                      <MapPin size={14} className="mr-2 text-logo-purple-2" />
                      {event.location}
                    </div>
                    {event.dj && (
                      <div className="flex items-center text-stone-300 text-sm">
                        <Music size={14} className="mr-2 text-logo-purple-2" />
                        DJ: {event.dj}
                      </div>
                    )}
                    {event.guestInstructors && event.guestInstructors.length > 0 && (
                      <div className="flex items-center text-stone-300 text-sm">
                        <Users size={14} className="mr-2 text-logo-purple-2" />
                        {event.guestInstructors.join(', ')}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center text-logo-purple-2 text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                    Xem chi tiết
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;
