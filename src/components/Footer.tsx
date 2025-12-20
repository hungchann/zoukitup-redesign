import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200 pt-8 md:pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-3xl font-sans font-bold tracking-tighter text-gray-900 block mb-6">
              ZOUK<span className="text-logo-purple-2 font-sans italic">IT</span>UP
            </a>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed mb-6">
              Elevate your Zouk experience with quality classes and a connected community.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/PhuongTrangZoukVietnam" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all rounded-full">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/phuongtrangzouk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all rounded-full">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/channel/UCjCX1AIUnHyCTJM2ClEEyFA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all rounded-full">
                <Youtube size={18} />
              </a>
              <a href="https://www.tiktok.com/@ptz_zouk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all rounded-full">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-medium mb-6 uppercase text-sm tracking-widest">Links</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#about" className="hover:text-logo-purple-2 transition-colors">About Us</a></li>
              <li><a href="#classes" className="hover:text-logo-purple-2 transition-colors">Classes</a></li>
              <li><a href="#code-of-conduct" className="hover:text-logo-purple-2 transition-colors">Code of Conduct</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-gray-900 font-medium mb-6 uppercase text-sm tracking-widest">Legal</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-logo-purple-2 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-logo-purple-2 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Zoukitup. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed inspired by Lamba London style.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;