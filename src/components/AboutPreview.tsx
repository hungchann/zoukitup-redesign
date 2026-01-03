import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutPreview: React.FC = () => {
  const handleViewMore = () => {
    window.location.hash = 'about-page';
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-12 md:py-24 bg-white text-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl font-sans mb-8 leading-tight font-bold">
            About <br />
            <span className="text-logo-purple-2 italic">PTZouk</span>
          </h2>
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
          <button
            onClick={handleViewMore}
            className="mt-10 flex items-center text-gray-900 hover:text-logo-purple-2 transition-colors group"
          >
            <span className="text-sm uppercase tracking-widest mr-2">Learn More</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="mt-10 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
            <div>
              <span className="block text-3xl font-sans text-gray-900 font-bold">2019</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Founded</span>
            </div>
            <div>
              <span className="block text-3xl font-sans text-gray-900 font-bold">2022</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Zouk It Up</span>
            </div>
            <div>
              <span className="block text-3xl font-sans text-gray-900 font-bold">#1</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Zouk Hub</span>
            </div>
          </div>
        </div>

        {/* Image Composition */}
        <div className="order-1 md:order-2 relative">
            <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                    src="https://picsum.photos/seed/zoukcouple/800/1200" 
                    alt="Couple dancing Zouk" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-logo-purple-3 to-logo-purple-4 -z-10 opacity-50"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-logo-purple-2/30 bg-gradient-to-br from-logo-purple-2/10 via-logo-purple-3/10 to-logo-purple-4/10 -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
