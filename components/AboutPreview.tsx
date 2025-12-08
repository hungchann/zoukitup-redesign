import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutPreview: React.FC = () => {
  const handleViewMore = () => {
    window.location.hash = 'about-page';
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-24 bg-zouk-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Về <br />
            <span className="text-logo-purple-2 italic">PTZouk</span>
          </h2>
          <div className="space-y-6 text-stone-400 font-light text-lg leading-relaxed">
            <p>
              Thành lập vào năm 2019, PTZ - Phuong & Trang Zouk Vietnam - là studio hàng đầu về Brazilian Zouk tại Hà Nội, cam kết dẫn đầu trong việc lan tỏa điệu nhảy này trong cộng đồng địa phương.
            </p>
            <p>
              Chúng tôi cung cấp lịch trình toàn diện bao gồm các lớp học hàng tuần, social dancing, và các sự kiện Brazilian Zouk thường xuyên. Giáo trình của chúng tôi được cập nhật liên tục để tích hợp những phát triển mới nhất trên toàn cầu về Zouk.
            </p>
          </div>
          <button
            onClick={handleViewMore}
            className="mt-10 flex items-center text-white hover:text-logo-purple-2 transition-colors group"
          >
            <span className="text-sm uppercase tracking-widest mr-2">Tìm hiểu thêm</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="mt-10 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <span className="block text-3xl font-serif text-white">2019</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Thành lập</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-white">2022</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Zouk It Up</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-white">10+</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Nghệ sĩ quốc tế</span>
            </div>
          </div>
        </div>

        {/* Image Composition */}
        <div className="order-1 md:order-2 relative">
            <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                    src="https://picsum.photos/seed/zoukcouple/800/1200" 
                    alt="Couple dancing Zouk" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-zouk-dark-gray -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-logo-purple-2/20 -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
