import React from 'react';
import Section from './ui/Section';
import ImageSlider from './ui/ImageSlider';
import { PHOTOGRAPHY_IMAGES } from '../constants';
import { useLanguage } from '../i18n/LanguageContext';

const Passions: React.FC = () => {
  const { t } = useLanguage();
  const climbingImages = [
    "/Alex escalade 1.png",
    "/Alex escalade 2.jpg"
  ];

  return (
    <div id="passions" className="bg-black pb-20">
      <Section className="pb-0">
        <div className="text-center mb-16">
          <span className="text-cyan-500 uppercase tracking-widest text-xs font-bold">{t('passions.sectionTitle')}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">{t('passions.sectionSubtitle')}</h2>
        </div>
      </Section>

      {/* Photography Section with Dynamic Auto Slider */}
      <div className="mb-24">
        <div className="container mx-auto px-4 mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-light text-white border-l-2 border-cyan-500 pl-4">{t('passions.photography')}</h3>
          <p className="hidden md:block text-slate-500 text-sm italic">{t('passions.instruction')}</p>
        </div>
        
        {/* Premium Infinite Slider */}
        <ImageSlider images={PHOTOGRAPHY_IMAGES} />
      </div>

      {/* Climbing Section - Dynamic Hover Reveal */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden group border-t border-zinc-900">
        
        {/* Dual Background Layout */}
        <div className="absolute inset-0 flex flex-col md:flex-row">
          {/* First Image - Top (Mobile) / Left (Desktop) */}
          <div className="relative w-full h-1/2 md:h-full md:w-1/2 overflow-hidden bg-zinc-950">
             <div 
               className="absolute inset-0 bg-cover bg-center transition-all duration-[800ms] ease-out group-hover:scale-110 group-hover:rotate-1 opacity-70 group-hover:opacity-100"
               style={{ backgroundImage: `url('${climbingImages[0]}')` }}
             ></div>
          </div>
          
          {/* Second Image - Bottom (Mobile) / Right (Desktop) */}
          <div className="relative w-full h-1/2 md:h-full md:w-1/2 overflow-hidden bg-zinc-950">
             <div 
               className="absolute inset-0 bg-cover bg-center transition-all duration-[800ms] ease-out group-hover:scale-110 group-hover:-rotate-1 opacity-70 group-hover:opacity-100"
               style={{ backgroundImage: `url('${climbingImages[1]}')`, backgroundPosition: 'center 30%' }}
             ></div>
          </div>
        </div>

        {/* Global Unifying Overlay - Reacts to hover */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-all duration-700 ease-in-out group-hover:bg-black/20 group-hover:backdrop-blur-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-b from-black/80 via-transparent to-black/80 opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 text-center py-20 transition-transform duration-700 ease-out transform group-hover:-translate-y-2">
          <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">{t('passions.climbing')}</h3>
          
          <div className="relative inline-block transition-all duration-700 transform group-hover:scale-105">
             <span className="absolute -top-6 -left-6 md:-left-10 text-6xl text-cyan-500/20 font-serif transition-colors duration-700 group-hover:text-cyan-400/60">"</span>
             <p className="text-xl md:text-2xl text-slate-100 leading-relaxed font-light italic max-w-3xl mx-auto drop-shadow-md">
              {t('passions.climbingQuote')}
            </p>
            <span className="absolute -bottom-8 -right-6 md:-right-10 text-6xl text-cyan-500/20 font-serif transform rotate-180 transition-colors duration-700 group-hover:text-cyan-400/60">"</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passions;