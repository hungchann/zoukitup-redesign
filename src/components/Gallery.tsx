import React, { useEffect, useState, useCallback } from 'react';
import { Loader2, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  galleryMedia, 
  GalleryItem, 
  convertDriveLinkToDirectUrl, 
  getYouTubeEmbedUrl 
} from '../data/galleryMedia';

const fallbackImages = [
  "https://picsum.photos/seed/dance1/600/800",
  "https://picsum.photos/seed/dance2/800/600",
  "https://picsum.photos/seed/dance3/600/600",
  "https://picsum.photos/seed/dance4/600/900",
  "https://picsum.photos/seed/dance5/800/800",
  "https://picsum.photos/seed/dance6/600/400",
];

const Gallery: React.FC = () => {
  const [mediaItems, setMediaItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const loadMedia = async () => {
      try {
        // Process gallery media from config
        const processedMedia: GalleryItem[] = galleryMedia.map(item => {
          if (item.type === 'image') {
            // Convert Google Drive link to direct image URL
            return {
              ...item,
              url: convertDriveLinkToDirectUrl(item.url)
            };
          }
          return item;
        });


        if (processedMedia.length > 0) {
          setMediaItems(processedMedia);
        } else {
          // Fallback to placeholder images
          setMediaItems(fallbackImages.map(url => ({ type: 'image' as const, url })));
        }
      } catch (error) {
        console.error('Error loading gallery media:', error);
        // Fallback to placeholder images
        setMediaItems(fallbackImages.map(url => ({ type: 'image' as const, url })));
      } finally {
        setLoading(false);
      }
    };

    loadMedia();
  }, []);

  // Carousel logic
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, mediaItems.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const currentMaxIndex = Math.max(0, mediaItems.length - (window.innerWidth < 768 ? 1 : 3));
      if (prev >= currentMaxIndex) {
        return 0;
      }
      return prev + 1;
    });
  }, [mediaItems.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  const handleVideoClick = (youtubeUrl: string) => {
    const embedUrl = getYouTubeEmbedUrl(youtubeUrl);
    if (embedUrl) {
      setSelectedVideo(embedUrl);
    }
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-logo-purple-2 text-sm uppercase tracking-widest">Gallery</span>
            <h2 className="text-4xl md:text-5xl font-sans text-gray-900 mt-2 font-bold">Beautiful Moments</h2>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin text-logo-purple-2" size={40} />
            </div>
          ) : (
            <div className="relative max-w-6xl mx-auto">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                >
                  {mediaItems.map((item, index) => {
                    const itemWidth = `${100 / itemsPerView}%`;
                    
                    if (item.type === 'video') {
                      const embedUrl = getYouTubeEmbedUrl(item.url);
                      if (!embedUrl) return null;

                      // Extract thumbnail from YouTube
                      const videoId = embedUrl.split('/embed/')[1];
                      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

                      return (
                        <div 
                          key={index} 
                          className="flex-shrink-0 px-4"
                          style={{ width: itemWidth }}
                        >
                          <div 
                            className="relative group overflow-hidden cursor-pointer rounded-lg aspect-[4/3]"
                            onClick={() => handleVideoClick(item.url)}
                          >
                            <img
                              src={thumbnailUrl}
                              alt={item.title || `Video ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              onError={(e) => {
                                // Fallback to default thumbnail if maxresdefault fails
                                const target = e.target as HTMLImageElement;
                                target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                              }}
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-opacity duration-300 flex items-center justify-center">
                              <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                                <Play className="text-logo-purple-2" size={32} fill="currentColor" />
                              </div>
                            </div>
                            {item.title && (
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white font-sans text-sm">{item.title}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div 
                          key={index} 
                          className="flex-shrink-0 px-4"
                          style={{ width: itemWidth }}
                        >
                          <div className="relative group overflow-hidden rounded-lg aspect-[4/3]">
                            <img
                              src={item.url}
                              alt={item.title || `Gallery ${index + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                              onError={(e) => {
                                // Fallback to placeholder if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.src = `https://picsum.photos/seed/fallback${index}/600/800`;
                              }}
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white font-sans italic text-xl border-b border-logo-purple-2 pb-1">
                                {item.title || 'View Details'}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              
              {mediaItems.length > itemsPerView && (
                <>
                  <button
                    onClick={prevSlide}
                    className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
                    aria-label="Next"
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="flex md:hidden justify-center gap-2 mt-6">
                    <button
                      onClick={prevSlide}
                      className="bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                      aria-label="Previous"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                      aria-label="Next"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
          
          <div className="text-center mt-12">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block text-gray-600 hover:text-logo-purple-2 transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-logo-purple-2 pb-1"
            >
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={`${selectedVideo}?autoplay=1&rel=0`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
