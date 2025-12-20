
import React, { useEffect, useState } from 'react';
import { ClassItem } from '../types';
import { Clock, ArrowRight, Loader2 } from 'lucide-react';

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

const Schedule: React.FC = () => {
  const [classes, setClasses] = useState<ClassItem[]>(fallbackClasses);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading then use fallback data
    setTimeout(() => setLoading(false), 1000);
  }, []);

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
                      cls.level === 'Basic' ? 'bg-blue-100 text-blue-700 border border-blue-300' :
                      cls.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' :
                      cls.level === 'Advanced' ? 'bg-purple-100 text-purple-700 border border-purple-300' :
                      'bg-gray-100 text-gray-900 border border-gray-300'
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
                    More
                  </a>
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
