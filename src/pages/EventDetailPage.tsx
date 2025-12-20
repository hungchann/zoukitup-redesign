import React from 'react';
import { ArrowLeft, Calendar, MapPin, Music, Users, MessageCircle, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { events, EventType } from '../data/events';
import { pastEvents } from '../data/pastEvents';

interface EventDetailPageProps {
  eventSlug: string;
}

const EventDetailPage: React.FC<EventDetailPageProps> = ({ eventSlug }) => {
  // Search in both upcoming and past events
  const eventData = events.find(event => event.slug === eventSlug) || 
                    pastEvents.find(event => event.slug === eventSlug);

  if (!eventData) {
    return (
      <div className="min-h-screen bg-zouk-black text-stone-200 font-sans">
        <Navigation />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-zelda mb-4">Event Not Found</h1>
          <a href="#events-page" className="text-logo-purple-2 hover:underline">
            Back to Events List
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBackToEvents = () => {
    window.location.hash = 'events-page';
    window.scrollTo(0, 0);
  };

  const getEventTypeLabel = (type: EventType): string => {
    switch (type) {
      case 'social':
        return 'Weekly Social';
      case 'workshop':
        return 'Special Workshop';
      case 'festival':
        return 'Festival / Pre-party';
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
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Back Button */}
          <button
            onClick={handleBackToEvents}
            className="mb-8 flex items-center text-stone-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-widest">Back to Events List</span>
          </button>

          {/* Event Header */}
          <div className="mb-12 fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-4 py-2 text-xs rounded uppercase tracking-wider border ${getEventTypeColor(eventData.type)}`}>
                {getEventTypeLabel(eventData.type)}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-zelda mb-6 leading-tight">
              {eventData.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-logo-purple-2 to-transparent mb-6"></div>
            <p className="text-stone-300 font-light text-lg leading-relaxed max-w-3xl whitespace-pre-line">
              {eventData.description}
            </p>
          </div>

          {/* Poster Section */}
          {eventData.poster && (
            <div className="mb-12 fade-in-up delay-100">
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg border border-white/10">
                <img
                  src={eventData.poster}
                  alt={eventData.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none rounded-lg"></div>
              </div>
            </div>
          )}

          {/* Event Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 fade-in-up delay-200">
            <div className="border border-white/10 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 mr-3 text-logo-purple-2" />
                <h3 className="text-xl font-zelda text-white">Time</h3>
              </div>
              <p className="text-stone-300 font-light text-lg">{eventData.dateRange || eventData.date}</p>
            </div>

            <div className="border border-white/10 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 mr-3 text-logo-purple-2" />
                <h3 className="text-xl font-zelda text-white">Location</h3>
              </div>
              <p className="text-stone-300 font-light">{eventData.location}</p>
            </div>

            {eventData.dj && (
              <div className="border border-white/10 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors">
                <div className="flex items-center mb-4">
                  <Music className="w-6 h-6 mr-3 text-logo-purple-2" />
                  <h3 className="text-xl font-zelda text-white">DJ</h3>
                </div>
                <p className="text-stone-300 font-light text-lg">{eventData.dj}</p>
              </div>
            )}

            {eventData.guestInstructors && eventData.guestInstructors.length > 0 && (
              <div className={`border border-white/10 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors ${eventData.dj ? '' : 'md:col-span-2'}`}>
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 mr-3 text-logo-purple-2" />
                  <h3 className="text-xl font-zelda text-white">Guest Instructors</h3>
                </div>
                <div className="space-y-2">
                  {eventData.guestInstructors.map((instructor) => (
                    <p key={instructor} className="text-stone-300 font-light text-lg">
                      {instructor}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Schedule Section */}
          {eventData.schedule && eventData.schedule.length > 0 && (
            <div className="mb-12 fade-in-up delay-300">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 mr-3 text-logo-purple-2" />
                <h2 className="text-3xl font-zelda text-white">Schedule</h2>
              </div>
              <div className="border border-white/10 p-6 rounded-lg bg-gradient-to-r from-logo-purple-2/5 to-transparent">
                <ul className="space-y-3">
                  {eventData.schedule.map((item) => (
                    <li key={item} className="flex items-start text-stone-300 font-light">
                      <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Content Section (for workshops) */}
          {eventData.content && (
            <div className="mb-12 fade-in-up delay-300">
              <h2 className="text-3xl font-zelda text-white mb-6">Content</h2>
              <div className="border border-white/10 p-6 rounded-lg">
                <p className="text-stone-300 font-light leading-relaxed whitespace-pre-line">
                  {eventData.content}
                </p>
              </div>
            </div>
          )}

          {/* CTA Buy Tickets Section */}
          <div className="border-t border-white/10 pt-12 fade-in-up delay-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-zelda text-white mb-4">
                Ready to Join?
              </h2>
              <p className="text-stone-300 font-light text-lg mb-8">
                Don't miss the opportunity to join this amazing event with the PTZouk community!
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              {eventData.zaloLink && (
                <a
                  href={eventData.zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#0068FF] text-white font-medium tracking-widest uppercase hover:bg-[#0052CC] transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Buy Tickets via Zalo
                </a>
              )}
              {eventData.messengerLink && (
                <a
                  href="https://www.facebook.com/messages/t/107012643982143"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#0084FF] text-white font-medium tracking-widest uppercase hover:bg-[#0066CC] transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Buy Tickets via Messenger
                </a>
              )}
              {!eventData.zaloLink && !eventData.messengerLink && (
                <button className="px-8 py-4 bg-white text-black font-medium tracking-widest uppercase hover:bg-logo-purple-2 hover:text-white transition-all duration-300 min-w-[200px]">
                  Contact to Buy Tickets
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetailPage;
