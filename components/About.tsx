import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-zouk-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Nơi Đam Mê <br />
            <span className="text-zouk-gold italic">Gặp Gỡ</span>
          </h2>
          <div className="space-y-6 text-stone-400 font-light text-lg leading-relaxed">
            <p>
              Zoukitup không chỉ là một lớp học nhảy, đó là một phong cách sống. Được thành lập với sứ mệnh lan tỏa vẻ đẹp của Brazilian Zouk tại Việt Nam, chúng tôi mang đến một không gian chuyên nghiệp, cởi mở và đầy cảm hứng.
            </p>
            <p>
              Lấy cảm hứng từ những studio hàng đầu thế giới như Lamba London, chúng tôi chú trọng vào kỹ thuật nền tảng, sự kết nối âm nhạc và sự tự do trong biểu đạt cơ thể. Dù bạn là người mới bắt đầu hay vũ công chuyên nghiệp, Zoukitup luôn có chỗ dành cho bạn.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <span className="block text-3xl font-serif text-white">500+</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Học viên</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-white">5+</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Năm hoạt động</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-white">100%</span>
              <span className="text-xs uppercase tracking-widest text-stone-500">Đam mê</span>
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
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-zouk-gold/20 -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default About;