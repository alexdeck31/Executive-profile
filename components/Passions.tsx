import React from 'react';
import Section from './ui/Section';
import ImageSlider from './ui/ImageSlider';
import { PHOTOGRAPHY_IMAGES } from '../constants';

const Passions: React.FC = () => {
  const climbingImages = [
    "https://lh3.googleusercontent.com/d/1vAwiq6NU4NhnJsEn5aL8U_vP9aEnBUhR",
    "https://lh3.googleusercontent.com/d/1bMNMdptgfJYo0nviEGPb2L4j13uGu7Zo"
  ];

  return (
    <div id="passions" className="bg-black pb-20">
      <Section className="pb-0">
        <div className="text-center mb-16">
          <span className="text-cyan-500 uppercase tracking-widest text-xs font-bold">Personal Interests</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Beyond Business</h2>
        </div>
      </Section>

      {/* Photography Section with Dynamic Auto Slider */}
      <div className="mb-24">
        <div className="container mx-auto px-4 mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-light text-white border-l-2 border-cyan-500 pl-4">Photography</h3>
          <p className="hidden md:block text-slate-500 text-sm italic">Drag or hover to pause • Click to expand</p>
        </div>
        
        {/* Premium Infinite Slider */}
        <ImageSlider images={PHOTOGRAPHY_IMAGES} />
      </div>

      {/* Climbing Section - Combined Dual Background */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        
        {/* Dual Background Layout */}
        <div className="absolute inset-0 flex flex-col md:flex-row">
          {/* First Image - Top (Mobile) / Left (Desktop) */}
          <div className="relative w-full h-1/2 md:h-full md:w-1/2 overflow-hidden">
             <div 
               className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
               style={{ backgroundImage: `url('${climbingImages[0]}')` }}
             ></div>
             {/* Gradient overlay for better text blend in center */}
             <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/40 via-transparent to-black/60"></div>
          </div>
          
          {/* Second Image - Bottom (Mobile) / Right (Desktop) */}
          <div className="relative w-full h-1/2 md:h-full md:w-1/2 overflow-hidden">
             <div 
               className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
               style={{ backgroundImage: `url('${climbingImages[1]}')`, backgroundPosition: 'center 30%' }}
             ></div>
             <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/40 via-transparent to-black/60"></div>
          </div>
        </div>

        {/* Global Unifying Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 text-center py-20 animate-fade-in">
          <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl">Climbing</h3>
          
          <div className="relative inline-block">
             <span className="absolute -top-6 -left-6 text-6xl text-cyan-500/20 font-serif">"</span>
             <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-light italic max-w-3xl mx-auto drop-shadow-md">
              Resilience, discipline, and the pursuit of long-term progression. The mindset on the wall mirrors the strategy in the boardroom: analyze, adapt, and reach new heights.
            </p>
            <span className="absolute -bottom-8 -right-6 text-6xl text-cyan-500/20 font-serif transform rotate-180">"</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passions;