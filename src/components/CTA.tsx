import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-zouk-light text-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-logo-purple-1 via-logo-purple-3 to-logo-purple-4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-logo-purple-2 via-logo-purple-3 to-logo-purple-4 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans text-gray-900 mb-6 leading-tight font-bold">
            Ready to Begin <br />
            <span className="text-logo-purple-2 font-sans italic">Your Zouk Journey?</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Join the PTZouk community today and discover your passion for dance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#classes"
              className="group px-8 py-4 bg-gray-900 text-white font-medium tracking-widest uppercase hover:bg-logo-purple-2 hover:text-white transition-all duration-300 min-w-[200px] flex items-center justify-center"
            >
              More
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium tracking-widest uppercase hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 min-w-[200px] flex items-center justify-center"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

