import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-3xl font-zelda font-bold tracking-tighter text-white block mb-6">
              ZOUK<span className="text-logo-purple-2 font-sans italic">IT</span>UP
            </a>
            <p className="text-stone-500 text-sm max-w-xs leading-relaxed">
              Nâng tầm trải nghiệm Zouk của bạn với những lớp học chất lượng, cộng đồng gắn kết và những sự kiện đẳng cấp.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase text-sm tracking-widest">Liên kết</h4>
            <ul className="space-y-3 text-stone-400 text-sm">
              <li><a href="#about" className="hover:text-logo-purple-2 transition-colors">Về chúng tôi</a></li>
              <li><a href="#classes" className="hover:text-logo-purple-2 transition-colors">Lớp học</a></li>
              <li><a href="#events" className="hover:text-logo-purple-2 transition-colors">Sự kiện</a></li>
              <li><a href="#faq" className="hover:text-logo-purple-2 transition-colors">Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-medium mb-6 uppercase text-sm tracking-widest">Pháp lý</h4>
            <ul className="space-y-3 text-stone-400 text-sm">
              <li><a href="#" className="hover:text-logo-purple-2 transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-logo-purple-2 transition-colors">Chính sách bảo mật</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Zoukitup. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed inspired by Lamba London style.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;