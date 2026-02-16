import React, { useRef, useState, useEffect } from 'react';
import Section from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
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
    <Section className="bg-gradient-to-b from-zinc-950 to-black py-24 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase mb-3 block">Endorsements</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Industry Leaders</span>
          </h2>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {TESTIMONIALS.map((t, index) => (
            <div 
              key={t.id}
              className={`
                relative p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm
                transition-all duration-700 ease-out hover:bg-white/10 hover:border-white/10 hover:-translate-y-2
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-6 right-6 text-white/10">
                <Quote size={40} />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-xs text-cyan-400 uppercase tracking-wide">{t.role}</p>
                  <p className="text-xs text-slate-500">{t.company}</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm italic relative z-10">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;