import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // We duplicate the images to create a seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <div className="relative w-full overflow-hidden group py-10">
        
        {/* Gradient Masks for fade effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

        {/* Scrolling Container */}
        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
          {duplicatedImages.map((src, index) => (
            <div 
              key={`img-${index}`} 
              className="relative mx-4 w-[280px] md:w-[400px] h-[200px] md:h-[280px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 border border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Hover overlay icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                 <ZoomIn className="text-white w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors z-[80]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>
          
          <div 
            className="relative max-w-7xl max-h-[90vh] rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={selectedImage} 
              alt="Full screen view" 
              className="max-w-full max-h-[90vh] object-contain" 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageSlider;