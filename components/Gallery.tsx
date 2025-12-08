
import React, { useEffect, useState } from 'react';
import { fetchMedia } from '../api';
import { WPMedia } from '../types';
import { Loader2 } from 'lucide-react';

const fallbackImages = [
  "https://picsum.photos/seed/dance1/600/800",
  "https://picsum.photos/seed/dance2/800/600",
  "https://picsum.photos/seed/dance3/600/600",
  "https://picsum.photos/seed/dance4/600/900",
  "https://picsum.photos/seed/dance5/800/800",
  "https://picsum.photos/seed/dance6/600/400",
];

const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>(fallbackImages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      const mediaItems = await fetchMedia();
      if (mediaItems.length > 0) {
        setImages(mediaItems.map(item => item.source_url));
      }
      setLoading(false);
    };

    // Uncomment to enable real WP fetching
    // loadImages();
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-zouk-black via-logo-purple-4/5 to-zouk-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-logo-purple-2 text-sm uppercase tracking-widest">Thư viện</span>
          <h2 className="text-4xl md:text-5xl font-zelda text-white mt-2">Khoảnh Khắc Đẹp</h2>
        </div>

        {loading ? (
           <div className="flex justify-center py-20">
             <Loader2 className="animate-spin text-logo-purple-2" size={40} />
           </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((src, index) => (
              <div key={index} className="break-inside-avoid relative group overflow-hidden">
                <img
                  src={src}
                  alt={`Gallery ${index}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-sans italic text-xl border-b border-logo-purple-2 pb-1">Xem chi tiết</span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-block text-stone-400 hover:text-logo-purple-2 transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-logo-purple-2 pb-1">
                Theo dõi chúng tôi trên Instagram
            </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
