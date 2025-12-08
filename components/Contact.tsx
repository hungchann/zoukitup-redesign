
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-logo-purple-2 text-sm uppercase tracking-widest">Liên hệ</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-2 mb-8">Bắt Đầu Hành Trình</h2>
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
                  <p className="text-stone-400 font-light">123 Nguyễn Văn Cừ, Quận 5, TP.HCM</p>
                </div>
              </div>

              <div className="flex items-start group">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-logo-purple-2 group-hover:bg-logo-purple-2 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="text-white text-lg font-medium mb-1">Email</h4>
                  <p className="text-stone-400 font-light">hello@zoukitup.vn</p>
                </div>
              </div>

              <div className="flex items-start group">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-logo-purple-2 group-hover:bg-logo-purple-2 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="text-white text-lg font-medium mb-1">Hotline</h4>
                  <p className="text-stone-400 font-light">+84 90 123 4567</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all rounded-full">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all rounded-full">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zouk-dark-gray p-8 md:p-12 border border-white/5">
            <h3 className="text-2xl font-serif text-white mb-6">Gửi tin nhắn</h3>
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
