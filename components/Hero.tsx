import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/imange/hero-banner.webp"
          alt="Brazilian Zouk & Lambada in Vietnam"
          className="w-full h-full object-cover grayscale opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-zouk-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-logo-purple-2 text-sm md:text-base uppercase tracking-[0.3em] mb-4 fade-in-up">
          PTZ - DANCE YOUR WAY
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-medium mb-8 leading-tight fade-in-up delay-100">
          BRAZILIAN ZOUK <br />
          <span className="italic font-light opacity-90">& LAMBADA IN VIETNAM</span>
        </h1>
        <p className="text-stone-300 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed fade-in-up delay-200">
          Khám phá sự uyển chuyển, kết nối và đam mê trong từng bước nhảy.
          Tham gia cộng đồng PTZouk - nơi đam mê gặp gỡ nghệ thuật.
        </p>
        <div className="flex flex-col md:flex-row gap-4 fade-in-up delay-300">
          <a
            href="#classes"
            className="px-8 py-3 bg-white text-black font-medium tracking-widest uppercase hover:bg-logo-purple-2 hover:text-white transition-all duration-300 min-w-[160px]"
          >
            Lịch học
          </a>
          <a
            href="#gallery"
            className="px-8 py-3 border border-white/30 text-white font-medium tracking-widest uppercase hover:border-white hover:bg-white/5 transition-all duration-300 min-w-[160px]"
          >
            Khám phá
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;