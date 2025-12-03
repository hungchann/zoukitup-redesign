
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
    time: "Thứ 2 & Thứ 4 | 19:30 - 21:00",
    level: "Cơ bản",
    instructor: "Alex & Mina",
    description: "Làm quen với nhịp điệu, bước cơ bản và kết nối đôi."
  },
  {
    id: 2,
    title: "Zouk Intermediate Lab",
    time: "Thứ 3 | 20:00 - 21:30",
    level: "Trung cấp",
    instructor: "Hoang",
    description: "Nâng cao kỹ thuật head movement và counter-balance."
  },
  {
    id: 3,
    title: "Musicality Workshop",
    time: "Thứ 7 | 15:00 - 17:00",
    level: "Mọi cấp độ",
    instructor: "Sarah (Guest)",
    description: "Học cách lắng nghe và nhảy theo từng lớp nhạc cụ."
  },
];

const fallbackEvents: EventItem[] = [
  {
    id: 1,
    title: "Zouk & Chill Social",
    date: "25 Tháng 10",
    location: "The Deck Saigon",
    image: "https://picsum.photos/seed/deck/600/400",
    price: "150.000 VNĐ"
  },
  {
    id: 2,
    title: "Hanoi Zouk Festival Pre-party",
    date: "12 Tháng 11",
    location: "Zoukitup Studio",
    image: "https://picsum.photos/seed/party/600/400",
    price: "200.000 VNĐ"
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
          time: post.acf?.time || "Liên hệ",
          level: post.acf?.level || "Mọi cấp độ",
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
          date: post.acf?.event_date || "Sắp tới",
          location: post.acf?.location || "Zoukitup Studio",
          price: post.acf?.price || "Liên hệ",
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
    <section className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
          <div>
            <span className="text-zouk-gold text-sm uppercase tracking-widest">Lịch trình</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">Lớp Học & Sự Kiện</h2>
          </div>
          <a href="#" className="hidden md:flex items-center text-stone-400 hover:text-white transition-colors mt-4 md:mt-0">
            Xem toàn bộ lịch <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-zouk-gold" size={40} />
          </div>
        ) : (
          <>
            {/* Classes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {classes.map((cls) => (
                <div key={cls.id} className="group bg-zouk-dark-gray p-8 border border-white/5 hover:border-zouk-gold/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-white/5 text-xs text-stone-300 rounded uppercase tracking-wider">{cls.level}</span>
                    <Clock size={18} className="text-zouk-gold" />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-zouk-gold transition-colors" dangerouslySetInnerHTML={{ __html: cls.title }}></h3>
                  <p className="text-stone-400 text-sm mb-6">{cls.time}</p>
                  <div className="text-stone-500 mb-6 font-light text-sm line-clamp-3" dangerouslySetInnerHTML={{ __html: cls.description }}></div>
                  <div className="flex items-center text-stone-300 text-sm">
                     <span className="w-2 h-2 bg-zouk-gold rounded-full mr-2"></span>
                     GV: {cls.instructor}
                  </div>
                  <button className="w-full mt-8 py-3 border border-white/10 text-stone-300 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                    Đăng ký
                  </button>
                </div>
              ))}
            </div>

            {/* Upcoming Events Highlight */}
            <h3 className="text-2xl font-serif text-white mb-8">Sự kiện sắp tới</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {events.map((evt) => (
                    <div key={evt.id} className="relative group overflow-hidden h-64 md:h-80 cursor-pointer">
                        <div className="absolute inset-0">
                            <img src={evt.image} alt={evt.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="flex justify-between items-end">
                                <div>
                                    <span className="text-zouk-gold uppercase text-xs tracking-widest mb-2 block"><Calendar size={14} className="inline mr-1"/> {evt.date}</span>
                                    <h4 className="text-2xl font-serif text-white mb-1" dangerouslySetInnerHTML={{ __html: evt.title }}></h4>
                                    <div className="flex items-center text-stone-400 text-sm">
                                        <MapPin size={14} className="mr-1" /> {evt.location}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-xl font-bold text-white">{evt.price}</span>
                                    <span className="text-xs text-stone-500 uppercase tracking-wider">Vé vào cửa</span>
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
