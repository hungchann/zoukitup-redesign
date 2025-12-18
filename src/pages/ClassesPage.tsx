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
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-logo-purple-2 selection:text-white">
      <Navigation />
      
      <section className="py-24 bg-white text-gray-900 relative overflow-hidden pt-32">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={handleBackToHome}
            className="mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-widest">Back to Home</span>
          </button>

          {/* Main Header */}
          <div className="text-center mb-20 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-sans mb-6 leading-tight font-bold">
              <span className="text-logo-purple-2 italic">PTZouk</span> Classes
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-logo-purple-2 to-transparent mx-auto mb-4"></div>
            <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">
              Explore our classes and find the one that's right for you
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
                className="group bg-white p-8 border border-gray-200 hover:border-logo-purple-2/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-sm"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 text-xs rounded uppercase tracking-wider ${
                    cls.level === 'Basic' ? 'bg-blue-100 text-blue-700 border border-blue-300' :
                    cls.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' :
                    cls.level === 'Advanced' ? 'bg-purple-100 text-purple-700 border border-purple-300' :
                    'bg-gray-100 text-gray-900 border border-gray-300'
                  }`}>
                    {cls.level}
                  </span>
                  <Clock size={18} className="text-logo-purple-2" />
                </div>
                
                <h3 className="text-2xl font-sans text-gray-900 mb-4 group-hover:text-logo-purple-2 transition-colors font-bold">
                  {cls.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 font-light line-clamp-3">
                  {cls.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700 text-sm">
                    <Clock size={14} className="mr-2 text-logo-purple-2" />
                    {cls.schedule}
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <MapPin size={14} className="mr-2 text-logo-purple-2" />
                    {cls.location}
                  </div>
                  <div className="flex items-center text-gray-700 text-sm">
                    <Users size={14} className="mr-2 text-logo-purple-2" />
                    {cls.instructors}
                  </div>
                </div>

                <div className="flex items-center text-logo-purple-2 text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                  View Details
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
