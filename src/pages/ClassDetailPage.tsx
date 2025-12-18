import React from 'react';
import { ArrowLeft, Clock, MapPin, Users, BookOpen, MessageCircle, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { classes } from '../data/classes';

interface ClassDetailPageProps {
  classSlug: string;
}

const ClassDetailPage: React.FC<ClassDetailPageProps> = ({ classSlug }) => {
  const classData = classes.find(cls => cls.slug === classSlug);

  if (!classData) {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Navigation />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-sans mb-4 font-bold">Class Not Found</h1>
          <a href="#classes-page" className="text-logo-purple-2 hover:underline">
            Back to Classes List
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBackToClasses = () => {
    window.location.hash = 'classes-page';
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-logo-purple-2 selection:text-white">
      <Navigation />
      
      <section className="py-24 bg-white text-gray-900 relative overflow-hidden pt-32">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Back Button */}
          <button
            onClick={handleBackToClasses}
            className="mb-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-widest">Back to Classes List</span>
          </button>

          {/* Class Header */}
          <div className="mb-12 fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-4 py-2 text-xs rounded uppercase tracking-wider ${
                classData.level === 'Basic' ? 'bg-blue-100 text-blue-700 border border-blue-300' :
                classData.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' :
                classData.level === 'Advanced' ? 'bg-purple-100 text-purple-700 border border-purple-300' :
                'bg-gray-100 text-gray-900 border border-gray-300'
              }`}>
                {classData.level}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-sans mb-6 leading-tight font-bold">
              {classData.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-logo-purple-2 to-transparent mb-6"></div>
            <p className="text-gray-600 font-light text-lg leading-relaxed max-w-3xl">
              {classData.description}
            </p>
          </div>

          {/* Video Demo Section */}
          {classData.videoUrl && (
            <div className="mb-12 fade-in-up delay-100">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10">
                <iframe
                  src={classData.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${classData.title} Demo Video`}
                ></iframe>
              </div>
            </div>
          )}

          {/* Class Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 fade-in-up delay-200">
            <div className="border border-gray-200 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors bg-zouk-light">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 mr-3 text-logo-purple-2" />
                <h3 className="text-xl font-sans text-gray-900 font-bold">Schedule</h3>
              </div>
              <p className="text-gray-700 font-light">{classData.schedule}</p>
              {classData.firstClass && (
                <div className="mt-3 flex items-center text-gray-600 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  First Class: {classData.firstClass}
                </div>
              )}
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors bg-zouk-light">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 mr-3 text-logo-purple-2" />
                <h3 className="text-xl font-sans text-gray-900 font-bold">Location</h3>
              </div>
              <p className="text-gray-700 font-light">{classData.location}</p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors md:col-span-2 bg-zouk-light">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 mr-3 text-logo-purple-2" />
                <h3 className="text-xl font-sans text-gray-900 font-bold">Instructors</h3>
              </div>
              <p className="text-gray-700 font-light text-lg">
                {classData.instructors}
              </p>
              <p className="text-gray-600 font-light text-sm mt-2">
                Learn from experienced instructors who have conquered many international dance floors. They will provide step-by-step guidance, helping you build a solid foundation and gain the confidence to truly shine on the dance floor.
              </p>
            </div>
          </div>

          {/* What You Will Learn */}
          <div className="mb-12 fade-in-up delay-300">
            <div className="flex items-center mb-6">
              <BookOpen className="w-6 h-6 mr-3 text-logo-purple-2" />
              <h2 className="text-3xl font-sans text-gray-900 font-bold">What You Will Learn</h2>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg bg-zouk-light">
              <ul className="space-y-3">
                {classData.whatYouWillLearn.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700 font-light">
                    <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Registration Section */}
          <div className="border-t border-gray-200 pt-12 fade-in-up delay-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-sans text-gray-900 mb-4 font-bold">
                Ready to Start Your Journey?
              </h2>
              <p className="text-gray-600 font-light text-lg mb-8">
                Don't miss the opportunity to become part of the warm, passionate, and dynamic PTZ community!
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              {classData.messengerLink && (
                <a
                  href="https://www.facebook.com/messages/t/107012643982143"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#0084FF] text-white font-medium tracking-widest uppercase hover:bg-[#0066CC] transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  More via Messenger
                </a>
              )}
              {!classData.messengerLink && (
                <button className="px-8 py-4 bg-gray-900 text-white font-medium tracking-widest uppercase hover:bg-logo-purple-2 hover:text-white transition-all duration-300 min-w-[200px]">
                  Contact for More
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

export default ClassDetailPage;
