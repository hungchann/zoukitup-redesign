import React from 'react';
import { ArrowLeft, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { classes } from '../data/classes';

const ClassesPage: React.FC = () => {
  const handleBackToHome = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  const handleClassClick = (slug: string) => {
    window.location.hash = `class-${slug}`;
    window.scrollTo(0, 0);
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
              Lớp Học <span className="text-logo-purple-2 italic">PTZouk</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-logo-purple-2 to-transparent mx-auto mb-4"></div>
            <p className="text-stone-300 font-light text-lg max-w-2xl mx-auto">
              Khám phá các lớp học của chúng tôi và tìm lớp phù hợp với bạn
            </p>
          </div>

          {/* Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {classes.map((cls) => (
              <div
                key={cls.id}
                onClick={() => handleClassClick(cls.slug)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClassClick(cls.slug);
                  }
                }}
                role="button"
                tabIndex={0}
                className="group bg-zouk-dark-gray p-8 border border-white/5 hover:border-logo-purple-2/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 text-xs rounded uppercase tracking-wider ${
                    cls.level === 'Cơ bản' ? 'bg-logo-purple-3/30 text-logo-purple-2 border border-logo-purple-2/30' :
                    cls.level === 'Trung cấp' ? 'bg-logo-purple-4/30 text-logo-purple-1 border border-logo-purple-1/30' :
                    cls.level === 'Nâng cao' ? 'bg-zouk-gold/20 text-zouk-gold border border-zouk-gold/30' :
                    'bg-white/10 text-white border border-white/20'
                  }`}>
                    {cls.level}
                  </span>
                  <Clock size={18} className="text-logo-purple-2" />
                </div>
                
                <h3 className="text-2xl font-zelda text-white mb-4 group-hover:text-logo-purple-2 transition-colors">
                  {cls.title}
                </h3>
                
                <p className="text-stone-400 text-sm mb-6 font-light line-clamp-3">
                  {cls.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-stone-300 text-sm">
                    <Clock size={14} className="mr-2 text-logo-purple-2" />
                    {cls.schedule}
                  </div>
                  <div className="flex items-center text-stone-300 text-sm">
                    <MapPin size={14} className="mr-2 text-logo-purple-2" />
                    {cls.location}
                  </div>
                  <div className="flex items-center text-stone-300 text-sm">
                    <Users size={14} className="mr-2 text-logo-purple-2" />
                    {cls.instructors}
                  </div>
                </div>

                <div className="flex items-center text-logo-purple-2 text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                  Xem chi tiết
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClassesPage;
