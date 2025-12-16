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
    <section className="py-24 bg-zouk-light text-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-logo-purple-2 text-sm uppercase tracking-widest">Music</span>
          <h2 className="text-4xl md:text-5xl font-sans text-gray-900 mt-2 font-bold">DJs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {djs.map((dj) => (
            <div key={dj.id} className="group">
              <div className="relative mb-6 overflow-hidden aspect-square">
                <img
                  src={dj.image}
                  alt={dj.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white mb-2">
                    <Music size={20} className="mr-2 text-logo-purple-2" />
                    <span className="text-sm uppercase tracking-widest">{dj.name}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-sans text-gray-900 mb-3 font-bold">{dj.name}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">{dj.description}</p>
              {dj.link && (
                <a
                  href={dj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-logo-purple-2/30 text-logo-purple-2 hover:bg-logo-purple-2 hover:text-white transition-all duration-300 text-sm uppercase tracking-widest group"
                >
                  <Music size={16} />
                  {dj.platform === 'soundcloud' ? 'Listen on SoundCloud' : 'Listen on Mixcloud'}
                  <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DJs;

