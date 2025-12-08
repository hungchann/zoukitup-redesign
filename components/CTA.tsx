import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-zouk-black to-[#0f0f0f] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-logo-purple-1 via-logo-purple-3 to-logo-purple-4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-logo-purple-2 via-logo-purple-3 to-logo-purple-4 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-zelda text-white mb-6 leading-tight">
            Sẵn sàng bắt đầu <br />
            <span className="text-logo-purple-2 font-sans italic">hành trình Zouk của bạn?</span>
          </h2>
          <p className="text-stone-400 text-lg md:text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Tham gia cộng đồng PTZouk ngay hôm nay và khám phá niềm đam mê nhảy múa trong bạn.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#classes"
              className="group px-8 py-4 bg-white text-black font-medium tracking-widest uppercase hover:bg-logo-purple-2 hover:text-white transition-all duration-300 min-w-[200px] flex items-center justify-center"
            >
              Đăng ký học
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white/30 text-white font-medium tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all duration-300 min-w-[200px] flex items-center justify-center"
            >
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

