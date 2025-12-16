import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-3xl font-sans font-bold tracking-tighter text-gray-900 block mb-6">
              ZOUK<span className="text-logo-purple-2 font-sans italic">IT</span>UP
            </a>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
              Elevate your Zouk experience with quality classes, a connected community, and premium events.
            </p>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-medium mb-6 uppercase text-sm tracking-widest">Links</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#about" className="hover:text-logo-purple-2 transition-colors">About Us</a></li>
              <li><a href="#classes" className="hover:text-logo-purple-2 transition-colors">Classes</a></li>
              <li><a href="#events" className="hover:text-logo-purple-2 transition-colors">Events</a></li>
              <li><a href="#code-of-conduct" className="hover:text-logo-purple-2 transition-colors">Code of Conduct</a></li>
              <li><a href="#faq" className="hover:text-logo-purple-2 transition-colors">FAQ</a></li>
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