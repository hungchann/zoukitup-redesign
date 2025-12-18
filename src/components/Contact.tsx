
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Send, CheckCircle, Loader2, MessageCircle } from 'lucide-react';
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
    <section className="py-12 md:py-24 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Google Map */}
        <div className="mb-16">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-gray-200">
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
              className="absolute bottom-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-logo-purple-2 hover:text-white transition-colors shadow-lg z-10 border border-gray-200"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <span className="text-logo-purple-2 text-sm uppercase tracking-widest">Contact</span>
            <h2 className="text-4xl md:text-5xl font-sans text-gray-900 mt-2 mb-8 font-bold">Start Your Journey</h2>
            <p className="text-gray-600 mb-12 font-light leading-relaxed max-w-md">
              Have questions about classes, events, or partnerships? Don't hesitate to contact us. The Zoukitup team is always ready to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-logo-purple-2 group-hover:bg-logo-purple-2 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="text-gray-900 text-lg font-medium mb-1">Address</h4>
                  <p className="text-gray-600 font-light">152 Phó Đức Chính, Trúc Bạch, Ba Đình, Hanoi, Vietnam</p>
                </div>
              </div>

              <div className="flex items-start group">
                 <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-logo-purple-2 group-hover:bg-logo-purple-2 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="text-gray-900 text-lg font-medium mb-1">Email</h4>
                  <a href="mailto:phuongtrangzouk@gmail.com" className="text-gray-600 font-light hover:text-logo-purple-2 transition-colors">phuongtrangzouk@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start group">
                 <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-logo-purple-2 group-hover:bg-logo-purple-2 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div className="ml-6">
                  <h4 className="text-gray-900 text-lg font-medium mb-1">Hotline</h4>
                  <a href="tel:0912285125" className="text-gray-600 font-light hover:text-logo-purple-2 transition-colors">0912285125</a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="https://www.facebook.com/messages/t/107012643982143"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0084FF] text-white font-medium tracking-widest uppercase hover:bg-[#0066CC] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Contact via Messenger
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zouk-light p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl font-sans text-gray-900 mb-6 font-bold">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Your Name</label>
                  <input 
                    name="name" value={formData.name} onChange={handleChange} required
                    type="text" className="w-full bg-white border border-gray-300 text-gray-900 p-3 focus:outline-none focus:border-logo-purple-2 transition-colors placeholder-gray-400" placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                  <input 
                    name="phone" value={formData.phone} onChange={handleChange}
                    type="tel" className="w-full bg-white border border-gray-300 text-gray-900 p-3 focus:outline-none focus:border-logo-purple-2 transition-colors placeholder-gray-400" placeholder="+84..." 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input 
                  name="email" value={formData.email} onChange={handleChange} required
                  type="email" className="w-full bg-white border border-gray-300 text-gray-900 p-3 focus:outline-none focus:border-logo-purple-2 transition-colors placeholder-gray-400" placeholder="john@example.com" 
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea 
                  name="message" value={formData.message} onChange={handleChange} required
                  rows={4} className="w-full bg-white border border-gray-300 text-gray-900 p-3 focus:outline-none focus:border-logo-purple-2 transition-colors placeholder-gray-400" placeholder="I would like to learn more about classes..."></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-4 font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center ${
                    status === 'success' ? 'bg-green-600 text-white' : 'bg-gray-900 text-white hover:bg-logo-purple-2 hover:text-white'
                }`}
              >
                {status === 'submitting' ? <Loader2 className="animate-spin" /> : status === 'success' ? <><CheckCircle className="mr-2" /> Message Sent Successfully</> : 'Send Now'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
