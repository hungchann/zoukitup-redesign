import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/image/hero-banner.webp"
          alt="Brazilian Zouk & Lambada in Vietnam"
          className="w-full h-full object-cover grayscale opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-logo-purple-2 text-sm md:text-base uppercase tracking-[0.3em] mb-4 fade-in-up">
          PTZ - DANCE YOUR WAY
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans text-gray-900 font-bold mb-8 leading-tight fade-in-up delay-100">
          BRAZILIAN ZOUK <br />
          <span className="font-sans italic font-light opacity-90">& LAMBADA IN VIETNAM</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed fade-in-up delay-200">
          Discover the grace, connection, and passion in every step.
          Join the PTZouk community - where passion meets art.
        </p>
        <div className="flex flex-col md:flex-row gap-4 fade-in-up delay-300">
          <a
            href="#classes-page"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'classes-page';
              window.scrollTo(0, 0);
            }}
            className="px-8 py-3 bg-gray-900 text-white font-medium tracking-widest uppercase hover:bg-logo-purple-2 hover:text-white transition-all duration-300 min-w-[160px]"
          >
            Class Schedule
          </a>
          <a
            href="#gallery"
            className="px-8 py-3 border border-gray-900 text-gray-900 font-medium tracking-widest uppercase hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 min-w-[160px]"
          >
            Explore
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 inset-x-0 flex justify-center animate-bounce text-gray-900/50">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;