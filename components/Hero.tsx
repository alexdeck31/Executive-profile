import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import Button from './ui/Button';
import { PROFILE_PHOTO_URL, CV_LINK, getEmail, LINKEDIN_URL } from '../constants';

const Hero: React.FC = () => {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${getEmail()}`;
  };

  return (
    <section className="relative min-h-screen flex flex-col md:block bg-zinc-900 overflow-hidden">
      
      {/* 
        Profile Image Container 
        Mobile: Relative block at top (50vh), ensures face is visible.
        Desktop: Absolute positioned to the left (40%), full height.
      */}
      <div className="relative w-full h-[50vh] md:absolute md:inset-0 md:w-[45%] lg:w-[40%] md:h-full z-0 order-1 md:order-none">
         <div className="relative w-full h-full">
            <img 
              src={PROFILE_PHOTO_URL} 
              alt="Alexandre Durand" 
              className="w-full h-full object-cover object-top transition-transform duration-[3s] hover:scale-105"
            />
            
            {/* Desktop Gradient: Fades to background on the right */}
            <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-r from-transparent to-zinc-900 hidden md:block"></div>
            
            {/* Desktop Texture: Subtle grain */}
            <div className="absolute inset-0 bg-black/5 mix-blend-multiply hidden md:block"></div> 
            
            {/* Mobile Gradient: Fades to background at the bottom to blend with text area */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent md:hidden"></div>
         </div>
      </div>

      {/* 
        Content Side 
        Mobile: Sits below the image (with slight overlap for blend).
        Desktop: Right aligned container, full height.
      */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-1 md:h-screen flex flex-col justify-start md:justify-center order-2 md:order-none -mt-12 md:mt-0">
        
        <div className="flex flex-col md:flex-row items-center justify-end w-full">
          
          {/* Glass Card */}
          <div className="w-full md:w-[60%] lg:w-[65%] relative md:-ml-16 lg:-ml-24 animate-slide-in-right">
            
            {/* Glass Effect Container */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 md:bg-zinc-900/80 backdrop-blur-2xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] p-8 md:p-12">
              
              {/* Decorative accent line */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 to-blue-600"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                   <span className="text-xs font-semibold tracking-widest uppercase text-cyan-100">Open for Opportunities</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-[0.9]">
                  Alexandre <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-400">Durand</span>
                </h1>

                {/* Subtitle */}
                <h2 className="text-lg md:text-xl text-slate-200 font-medium mb-6 border-l-2 border-cyan-500/50 pl-4 leading-relaxed">
                  SaaS · Sustainability & Tech · B2B sales leader · Agentic AI enabler
                </h2>

                {/* Personal Quote */}
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 font-light italic border-t border-white/5 pt-6 max-w-xl">
                  "Passionate about innovation, performance and making business scalable especially where Tech and impact meet"
                  <span className="block mt-2 text-slate-500 text-xs uppercase tracking-wider not-italic">Based in Paris, France</span>
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button href={CV_LINK} external className="w-full sm:w-auto ring-1 ring-white/20">
                    Download CV
                  </Button>
                  
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
                    <a 
                      href={LINKEDIN_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 text-white transition-all hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                     <button 
                      onClick={handleEmailClick}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 text-white transition-all hover:scale-110 cursor-pointer"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Subtle background noise/texture */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

          </div>

        </div>
      </div>
      
      {/* Scroll Indicator (Desktop Only) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20 opacity-30 hidden md:block">
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>

    </section>
  );
};

export default Hero;