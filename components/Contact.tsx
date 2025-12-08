
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Send, CheckCircle, Loader2 } from 'lucide-react';
import { submitContactForm } from '../api';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-[#0f0f0f] relative">
      <div className="container mx-auto px-6">
        {/* Google Map */}
        <div className="mb-16">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1234567890123!2d106.6822!3d10.7622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ1JzQ0LjAiTiAxMDbCsDQwJzU1LjkiRQ!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            <a 
              href="https://maps.app.goo.gl/9oaPHKmLYY2CWCph8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-logo-purple-2 hover:text-white transition-colors shadow-lg z-10"
            >
              Xem trên Google Maps
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-logo-purple-2 text-sm uppercase tracking-widest">Liên hệ</span>
            <h2 className="text-4xl md:text-5xl font-zelda text-white mt-2 mb-8">Bắt Đầu Hành Trình</h2>
            <p className="text-stone-400 mb-12 font-light leading-relaxed max-w-md">
              Bạn có câu hỏi về lớp học, sự kiện hoặc hợp tác? Đừng ngần ngại liên hệ với chúng tôi. Đội ngũ Zoukitup luôn sẵn sàng hỗ trợ.
            </p>

            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-logo-purple-2 group-hover:bg-logo-purple-2 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="text-white text-lg font-medium mb-1">Địa chỉ</h4>
                  <p className="text-stone-400 font-light">152 Phó Đức Chính, Trúc Bạch, Ba Đình, Hà Nội, Việt Nam</p>
                </div>
              </div>

              <div className="flex items-start group">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-logo-purple-2 group-hover:bg-logo-purple-2 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="text-white text-lg font-medium mb-1">Email</h4>
                  <a href="mailto:phuongtrangzouk@gmail.com" className="text-stone-400 font-light hover:text-logo-purple-2 transition-colors">phuongtrangzouk@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start group">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-logo-purple-2 group-hover:bg-logo-purple-2 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="text-white text-lg font-medium mb-1">Hotline</h4>
                  <a href="tel:0912285125" className="text-stone-400 font-light hover:text-logo-purple-2 transition-colors">0912285125</a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a href="https://www.facebook.com/PhuongTrangZoukVietnam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all rounded-full">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/phuongtrangzouk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all rounded-full">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/channel/UCjCX1AIUnHyCTJM2ClEEyFA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all rounded-full">
                <Youtube size={18} />
              </a>
              <a href="https://www.tiktok.com/@ptz_zouk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all rounded-full">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zouk-dark-gray p-8 md:p-12 border border-white/5">
            <h3 className="text-2xl font-zelda text-white mb-6">Gửi tin nhắn</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Tên của bạn</label>
                  <input 
                    name="name" value={formData.name} onChange={handleChange} required
                    type="text" className="w-full bg-black/30 border border-white/10 text-white p-3 focus:outline-none focus:border-logo-purple-2 transition-colors placeholder-stone-600" placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Số điện thoại</label>
                  <input 
                    name="phone" value={formData.phone} onChange={handleChange}
                    type="tel" className="w-full bg-black/30 border border-white/10 text-white p-3 focus:outline-none focus:border-logo-purple-2 transition-colors placeholder-stone-600" placeholder="+84..." 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email</label>
                <input 
                  name="email" value={formData.email} onChange={handleChange} required
                  type="email" className="w-full bg-black/30 border border-white/10 text-white p-3 focus:outline-none focus:border-logo-purple-2 transition-colors placeholder-stone-600" placeholder="john@example.com" 
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Lời nhắn</label>
                <textarea 
                  name="message" value={formData.message} onChange={handleChange} required
                  rows={4} className="w-full bg-black/30 border border-white/10 text-white p-3 focus:outline-none focus:border-logo-purple-2 transition-colors placeholder-stone-600" placeholder="Tôi muốn đăng ký lớp học..."></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-4 font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center ${
                    status === 'success' ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-logo-purple-2 hover:text-white'
                }`}
              >
                {status === 'submitting' ? <Loader2 className="animate-spin" /> : status === 'success' ? <><CheckCircle className="mr-2" /> Đã gửi thành công</> : 'Gửi ngay'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
