import React, { useState, useEffect, useRef } from 'react';
import Section from './ui/Section';
import { Bot, Workflow, Code2, BrainCircuit, Target, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { trackAppPresentationDownload } from '../analytics';

const AIInnovation: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <Section id="ai-innovation" className="bg-zinc-950 py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase mb-3 block flex items-center gap-2">
              <BrainCircuit size={16} />
              {t('ai.sectionTitle')}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {t('ai.titlePart1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t('ai.titlePart2')}</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mt-4" dangerouslySetInnerHTML={{ __html: t('ai.description') }} />
          </div>
          
          {/* Certificates Badge */}
          <div className="mt-8 md:mt-0 flex flex-col items-end gap-2">
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>{t('ai.cert1')}</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>{t('ai.cert2')}</span>
            </div>
          </div>
        </div>

        {/* Main Grid Content */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: MEDDIC App Feature */}
          <div 
            className={`
              relative group rounded-3xl overflow-hidden min-h-[400px] lg:min-h-full border border-white/10 bg-black/40
              transition-all duration-700 ease-out transform
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
            `}
          >
            {/* Image Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 transition-all duration-[15s] ease-out group-hover:scale-110 group-hover:opacity-100"
              style={{ backgroundImage: 'url("/meddic-bg.png")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/20 transition-opacity duration-[3s] group-hover:opacity-70"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex flex-col h-full justify-end">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 border border-cyan-500/30 backdrop-blur-md">
                <Target size={24} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">{t('ai.meddicTitle')}</h3>
              <p className="text-slate-300 leading-relaxed mb-8 max-w-lg">
                {t('ai.meddicDesc')}
              </p>
              
              {/* Clever PDF Download System */}
              <div className="mb-6">
                <a 
                  href="/MEDDIC_APP_Presentation.pdf" 
                  download="MEDDIC_APP_Presentation_Alexandre_Durand.pdf"
                  onClick={() => trackAppPresentationDownload('ai_innovation_section')}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:from-cyan-500 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transform hover:-translate-y-1"
                >
                  <div className="bg-white/20 p-1.5 rounded-lg">
                    <BrainCircuit size={18} />
                  </div>
                  <span className="flex flex-col items-start leading-none">
                    <span className="text-xs text-cyan-100 font-normal uppercase tracking-wider mb-1">Preview Software</span>
                    <span>Download App Presentation</span>
                  </span>
                </a>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-400">GenAI</span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-400">MEDDIC Framework</span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-400">Prompt Engineering</span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-400">Custom SaaS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Use Cases */}
          <div className="flex flex-col gap-6">
            
            {/* Card 1: SDR Automation */}
            <div 
              className={`
                p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 hover:bg-zinc-900 transition-all duration-300 group
                transform transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
              `}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                  <Workflow size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase">{t('ai.sdrTag')}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{t('ai.sdrTitle')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {t('ai.sdrDesc')}
              </p>
            </div>

            {/* Card 2: Vibe Coding */}
            <div 
              className={`
                p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 hover:bg-zinc-900 transition-all duration-300 group
                transform transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
              `}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400">
                  <Code2 size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase">PROTOTYPING</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{t('ai.vibeTitle')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {t('ai.vibeDesc')}
              </p>
            </div>

            {/* Card 3: N8N Orchestration */}
            <div 
              className={`
                p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 hover:bg-zinc-900 transition-all duration-300 group
                transform transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
              `}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                  <Bot size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 uppercase">{t('ai.orchTag')}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{t('ai.orchTitle')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('ai.orchDesc')}
              </p>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};

export default AIInnovation;