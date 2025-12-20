import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Music, Users, ArrowRight, Sparkles, Play } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { pastEvents } from '../data/pastEvents';
import { EventType } from '../data/events';

const PastEventsPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  
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

  // Get unique years from past events
  const years = Array.from(new Set(pastEvents.map(event => event.year).filter(Boolean) as number[])).sort((a, b) => b - a);
  
  // Filter events by selected year
  const filteredEvents = selectedYear 
    ? pastEvents.filter(event => event.year === selectedYear)
    : pastEvents;

  // Group events by year
  const eventsByYear = filteredEvents.reduce((acc, event) => {
    const year = event.year || 0;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(event);
    return acc;
  }, {} as Record<number, typeof pastEvents>);

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
            <span className="text-sm uppercase tracking-widest">Back to Home</span>
          </button>

          {/* Main Header */}
          <div className="text-center mb-12 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-zelda mb-6 leading-tight">
              Past Events <span className="text-logo-purple-2 italic">PTZouk</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-logo-purple-2 to-transparent mx-auto mb-4"></div>
            <p className="text-stone-300 font-light text-lg max-w-2xl mx-auto">
              Relive the memories from our past events and workshops
            </p>
          </div>

          {/* Year Filter */}
          {years.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedYear(null)}
                className={`px-6 py-2 border rounded uppercase tracking-widest text-sm transition-all ${
                  selectedYear === null
                    ? 'bg-logo-purple-2 text-white border-logo-purple-2'
                    : 'bg-transparent text-stone-300 border-stone-600 hover:border-logo-purple-2 hover:text-logo-purple-2'
                }`}
              >
                All Years
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-6 py-2 border rounded uppercase tracking-widest text-sm transition-all ${
                    selectedYear === year
                      ? 'bg-logo-purple-2 text-white border-logo-purple-2'
                      : 'bg-transparent text-stone-300 border-stone-600 hover:border-logo-purple-2 hover:text-logo-purple-2'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}

          {/* Events by Year */}
          {Object.keys(eventsByYear).length > 0 ? (
            Object.keys(eventsByYear)
              .sort((a, b) => Number(b) - Number(a))
              .map((year) => (
                <div key={year} className="mb-20">
                  {!selectedYear && (
                    <h2 className="text-3xl md:text-4xl font-zelda text-white mb-8 text-center">
                      {year}
                    </h2>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventsByYear[Number(year)].map((event) => (
                      <div
                        key={event.id}
                        className="group relative overflow-hidden bg-zouk-dark-gray border border-white/5 hover:border-logo-purple-2/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer text-left w-full"
                      >
                        {/* Poster Image or Video Thumbnail */}
                        {(event.poster || event.videoUrl) && (
                          <div className="relative h-64 overflow-hidden">
                            {event.videoUrl ? (
                              <div className="relative w-full h-full">
                                <img
                                  src={event.poster || `https://img.youtube.com/vi/${event.videoUrl.split('v=')[1]?.split('&')[0]}/maxresdefault.jpg`}
                                  alt={event.title}
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <a
                                    href={event.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="w-16 h-16 bg-logo-purple-2/80 hover:bg-logo-purple-2 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                                  >
                                    <Play size={24} className="text-white ml-1" />
                                  </a>
                                </div>
                                <div className="absolute top-4 left-4">
                                  <span className={`px-3 py-1 text-xs rounded uppercase tracking-wider border ${getEventTypeColor(event.type)}`}>
                                    {getEventTypeLabel(event.type)}
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <>
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
                              </>
                            )}
                          </div>
                        )}

                        <div className="p-8">
                          {!event.poster && !event.videoUrl && (
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

                          {event.videoUrl && (
                            <a
                              href={event.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center text-logo-purple-2 text-sm uppercase tracking-wider mb-4 hover:gap-2 transition-all"
                            >
                              Watch Video
                              <Play size={14} className="ml-2" />
                            </a>
                          )}

                          <div className="flex items-center text-logo-purple-2 text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                            View Details
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center py-20">
              <p className="text-stone-400 text-lg">No past events found.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PastEventsPage;

