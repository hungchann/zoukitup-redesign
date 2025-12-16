
import React, { useEffect, useState } from 'react';
import { ClassItem, EventItem, WPPost } from '../types';
import { Clock, MapPin, Calendar, ArrowRight, Loader2 } from 'lucide-react';
import { fetchPosts } from '../api';
import { WP_CONFIG } from '../config';

// Fallback data (giữ lại dữ liệu cũ để hiển thị khi chưa có API thực)
const fallbackClasses: ClassItem[] = [
  {
    id: 1,
    title: "Zouk Beginner Level 1",
    time: "Monday & Wednesday | 7:30 PM - 9:00 PM",
    level: "Basic",
    instructor: "Alex & Mina",
    description: "Get familiar with rhythm, basic steps, and partner connection."
  },
  {
    id: 2,
    title: "Zouk Intermediate Lab",
    time: "Tuesday | 8:00 PM - 9:30 PM",
    level: "Intermediate",
    instructor: "Hoang",
    description: "Advance your head movement and counter-balance techniques."
  },
  {
    id: 3,
    title: "Musicality Workshop",
    time: "Saturday | 3:00 PM - 5:00 PM",
    level: "All Levels",
    instructor: "Sarah (Guest)",
    description: "Learn to listen and dance to each layer of the music."
  },
];

const fallbackEvents: EventItem[] = [
  {
    id: 1,
    title: "Zouk & Chill Social",
    date: "October 25",
    location: "The Deck Saigon",
    image: "https://picsum.photos/seed/deck/600/400",
    price: "150,000 VND"
  },
  {
    id: 2,
    title: "Hanoi Zouk Festival Pre-party",
    date: "November 12",
    location: "Zoukitup Studio",
    image: "https://picsum.photos/seed/party/600/400",
    price: "200,000 VND"
  }
];

const Schedule: React.FC = () => {
  const [classes, setClasses] = useState<ClassItem[]>(fallbackClasses);
  const [events, setEvents] = useState<EventItem[]>(fallbackEvents);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // 1. Fetch Classes
      const wpClasses = await fetchPosts(WP_CONFIG.CATEGORIES.CLASSES);
      if (wpClasses.length > 0) {
        const mappedClasses: ClassItem[] = wpClasses.map((post: WPPost) => ({
          id: post.id,
          title: post.title.rendered,
          description: post.excerpt.rendered.replace(/<[^>]*>?/gm, ''), // Strip HTML
          time: post.acf?.time || "Contact",
          level: post.acf?.level || "All Levels",
          instructor: post.acf?.instructor || "Zoukitup Team"
        }));
        setClasses(mappedClasses);
      }

      // 2. Fetch Events
      const wpEvents = await fetchPosts(WP_CONFIG.CATEGORIES.EVENTS);
      if (wpEvents.length > 0) {
        const mappedEvents: EventItem[] = wpEvents.map((post: WPPost) => ({
          id: post.id,
          title: post.title.rendered,
          date: post.acf?.event_date || "Coming Soon",
          location: post.acf?.location || "Zoukitup Studio",
          price: post.acf?.price || "Contact",
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://picsum.photos/seed/dance/600/400"
        }));
        setEvents(mappedEvents);
      }

      setLoading(false);
    };

    // Uncomment line below to enable Real API fetching when you have WP setup
    // loadData(); 
    
    // For demo purposes, we simulate loading then use fallback
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <section className="py-24 bg-zouk-light">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-6">
          <div>
            <span className="text-logo-purple-2 text-sm uppercase tracking-widest">Schedule</span>
            <h2 className="text-4xl md:text-5xl font-sans text-gray-900 mt-2 font-bold">Classes & Events</h2>
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

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-logo-purple-2" size={40} />
          </div>
        ) : (
          <>
            {/* Classes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {classes.map((cls) => (
                <div key={cls.id} className="group bg-white p-8 border border-gray-200 hover:border-logo-purple-2/50 transition-all duration-300 hover:-translate-y-2 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 text-xs rounded uppercase tracking-wider ${
                      cls.level === 'Cơ bản' ? 'bg-logo-purple-3/20 text-logo-purple-2 border border-logo-purple-2/30' :
                      cls.level === 'Trung cấp' ? 'bg-logo-purple-4/20 text-logo-purple-1 border border-logo-purple-1/30' :
                      'bg-zouk-gold/20 text-zouk-gold border border-zouk-gold/30'
                    }`}>{cls.level}</span>
                    <Clock size={18} className="text-logo-purple-2" />
                  </div>
                  <h3 className="text-2xl font-sans text-gray-900 mb-2 group-hover:text-logo-purple-2 transition-colors font-bold" dangerouslySetInnerHTML={{ __html: cls.title }}></h3>
                  <p className="text-gray-600 text-sm mb-6">{cls.time}</p>
                  <div className="text-gray-500 mb-6 font-light text-sm line-clamp-3" dangerouslySetInnerHTML={{ __html: cls.description }}></div>
                  <div className="flex items-center text-gray-700 text-sm">
                     <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-2"></span>
                     Instructor: {cls.instructor}
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
                    Register
                  </a>
                </div>
              ))}
            </div>

            {/* Upcoming Events Highlight */}
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-sans text-gray-900 font-bold">Upcoming Events</h3>
              <a 
                href="#events-page" 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = 'events-page';
                  window.scrollTo(0, 0);
                }}
                className="hidden md:flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                View All <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {events.map((evt) => (
                    <div 
                      key={evt.id} 
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = 'events-page';
                        window.scrollTo(0, 0);
                      }}
                      className="relative group overflow-hidden h-64 md:h-80 cursor-pointer"
                    >
                        <div className="absolute inset-0">
                            <img src={evt.image} alt={evt.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="flex justify-between items-end">
                                <div>
                                    <span className="text-logo-purple-2 uppercase text-xs tracking-widest mb-2 block"><Calendar size={14} className="inline mr-1"/> {evt.date}</span>
                                    <h4 className="text-2xl font-sans text-white mb-1 font-bold" dangerouslySetInnerHTML={{ __html: evt.title }}></h4>
                                    <div className="flex items-center text-gray-200 text-sm">
                                        <MapPin size={14} className="mr-1" /> {evt.location}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xl font-bold text-white">{evt.price}</span>
                                    <span className="text-xs text-gray-300 uppercase tracking-wider">Entry Fee</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default Schedule;
