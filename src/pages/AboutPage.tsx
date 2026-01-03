import React from 'react';
import { Calendar, Globe, Music, Trophy, ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const artists = [
    'Luan & Adriana',
    'Lautaro & Ariana',
    'Alisson Sandi',
    'Ariel & Leticia',
    'Brenda & Anderson',
    'Arthur & Layssa',
    'Leo Neves',
    'Rafael & Julia',
    'Ariel & Yasmim',
    'Nhat & Gigi',
    'Saulo Dias'
  ];


  const handleBackToHome = () => {
    window.location.hash = '';
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
              Dance. Connect. Feel the Rhythm.
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-logo-purple-2 to-transparent mx-auto"></div>
          </div>

          {/* Introduction Section */}
          <div className="max-w-4xl mx-auto mb-20 fade-in-up delay-100">
            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <p className="text-xl text-gray-900 font-normal">
                Welcome to PTZ – Hanoi's #1 Brazilian Zouk & Lambada hub!
              </p>
              <p>
                Founded in 2019 by Huyen Trang & Hoai Phuong, PTZ has quickly become the go-to destination for anyone who loves the magic of Brazilian dance.
              </p>
              <p>
                We provide a comprehensive schedule including weekly classes, social dancing, and regular Brazilian Zouk events. Our curriculum is continuously updated to integrate the latest global developments in Zouk, and our parties feature non-stop mixes, live from our DJs.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto fade-in-up delay-200">
            <div className="text-center border border-gray-200 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors bg-zouk-light">
              <Calendar className="w-8 h-8 mx-auto mb-4 text-logo-purple-2" />
              <span className="block text-3xl font-sans text-gray-900 mb-2 font-bold">2019</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Founded</span>
            </div>
            <div className="text-center border border-gray-200 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors bg-zouk-light">
              <Music className="w-8 h-8 mx-auto mb-4 text-logo-purple-2" />
              <span className="block text-3xl font-sans text-gray-900 mb-2 font-bold">2022</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Zouk It Up</span>
            </div>
            <div className="text-center border border-gray-200 p-6 rounded-lg hover:border-logo-purple-2/50 transition-colors bg-zouk-light">
              <Globe className="w-8 h-8 mx-auto mb-4 text-logo-purple-2" />
              <span className="block text-3xl font-sans text-gray-900 mb-2 font-bold">#1</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Zouk Hub</span>
            </div>
          </div>

          {/* Global Vibes Section */}
          <div className="mb-20 fade-in-up delay-300">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-sans mb-6 text-logo-purple-2 font-bold">
                Global Vibes in Hanoi
              </h2>
              <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                <p>
                  We've hosted epic international events like <span className="text-gray-900 font-normal">BraZouky Vietnam 2024</span> & <span className="text-gray-900 font-normal">Lambada Mastery Vietnam 2026</span>, plus unforgettable ZoukItUp weekenders featuring world-class artists:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-6 border-l-2 border-logo-purple-2/30 mt-6">
                  {artists.map((artist) => (
                    <div key={artist} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3"></span>
                      {artist}
                    </div>
                  ))}
                  <div className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3"></span>
                    … and more!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What We Offer Section */}
          <div className="mb-20 fade-in-up delay-300">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-sans mb-8 text-logo-purple-2 font-bold">
                What We Offer
              </h2>
              <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                <ul className="space-y-4 pl-6 border-l-2 border-logo-purple-2/30">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2"></span>
                    <span>Beginner → Advanced courses in Brazilian Zouk & Lambada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2"></span>
                    <span>Zouk syllabus powered by District Zouk (Alisson Sandi & Gui Prada) + Zouk Guidance (Leo Neves)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2"></span>
                    <span>Lambada program built exclusively from Lambada Mastery (Ariel & Leticia)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-logo-purple-2 rounded-full mr-3 mt-2"></span>
                    <span>Weekly classes, socials, workshops & community support</span>
                  </li>
                </ul>
                <p className="mt-8 text-gray-900 font-normal">
                  Whether you're stepping onto the dance floor for the first time or leveling up your skills, PTZ is where passion meets community. Come dance with us, and let's make Hanoi move!
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="max-w-4xl mx-auto fade-in-up delay-300">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <img 
                src="/image/Ảnh full.jpg" 
                alt="PTZouk Vietnam" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
