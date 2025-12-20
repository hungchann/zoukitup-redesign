import React from 'react';
import { Music, ExternalLink } from 'lucide-react';

interface DJ {
  id: number;
  name: string;
  image: string;
  description: string;
  link?: string;
  platform?: 'soundcloud' | 'mixcloud';
}

const djs: DJ[] = [
  {
    id: 1,
    name: 'DJ AnhQ',
    image: '/image/dj-1.png',
    description: 'Introduction text demo',
    link: 'https://soundcloud.com/dj-anh-q',
    platform: 'soundcloud'
  },
  {
    id: 2,
    name: 'DJ TK',
    image: '/image/dj-2.png',
    description: 'Introduction text demo',
    link: 'https://www.mixcloud.com/PhuongVu201/',
    platform: 'mixcloud'
  }
];

const DJs: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-zouk-light text-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-sans text-gray-900 font-bold">DJs</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center">
            {djs.map((dj) => (
              <div key={dj.id} className="group text-center w-full max-w-sm">
                <div className="relative mb-6 overflow-hidden aspect-square max-w-xs mx-auto">
                  <img
                    src={dj.image}
                    alt={dj.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <h3 className="text-2xl font-sans text-gray-900 font-bold">{dj.name}</h3>
                  {dj.link && (
                    <a
                      href={dj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-logo-purple-2/30 text-logo-purple-2 hover:bg-logo-purple-2 hover:text-white transition-all duration-300 text-xs uppercase tracking-widest group"
                    >
                      <Music size={14} />
                      {dj.platform === 'soundcloud' ? 'SoundCloud' : 'Mixcloud'}
                      <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
                <p className="text-gray-600 font-light leading-relaxed">{dj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DJs;

