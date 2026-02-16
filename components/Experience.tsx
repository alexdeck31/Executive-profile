import React, { useState, useEffect, useRef } from 'react';
import Section from './ui/Section';
import { EXPERIENCES } from '../constants';
import { ChevronDown, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<string[]>([EXPERIENCES[0].id]);
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

  const expandExperience = (id: string) => {
    if (!expandedIds.includes(id)) {
      setExpandedIds((prev) => [...prev, id]);
    }
  };

  const toggleExperience = (id: string) => {
    if (expandedIds.includes(id)) {
      setExpandedIds((prev) => prev.filter((itemId) => itemId !== id));
    } else {
      setExpandedIds((prev) => [...prev, id]);
    }
  };

  return (
    <Section id="experience" className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase mb-3 block">Career Path</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience & <span className="text-cyan-500">Impact</span>
          </h2>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Continuous Vertical Line */}
          <div className="absolute left-[9px] md:left-[11px] top-4 bottom-4 w-[2px] bg-white/10 rounded-full"></div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, index) => {
              const isExpanded = expandedIds.includes(exp.id);

              return (
                <div 
                  key={exp.id} 
                  className={`
                    relative pl-10 md:pl-16 transition-all duration-700 ease-out transform
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
                  `}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  
                  {/* Timeline Dot */}
                  <div 
                    className={`absolute left-0 top-6 w-[20px] h-[20px] md:w-[24px] md:h-[24px] rounded-full border-[3px] transition-all duration-300 z-10 flex items-center justify-center bg-black ${
                      isExpanded 
                        ? 'border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)] scale-110' 
                        : 'border-zinc-700 hover:border-zinc-500'
                    }`}
                  >
                    {isExpanded && <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>}
                  </div>

                  {/* Card */}
                  <div 
                    className={`
                      relative w-full rounded-xl border transition-all duration-500 overflow-hidden group
                      ${isExpanded 
                        ? 'bg-white/5 border-cyan-500/80 shadow-[0_0_40px_rgba(6,182,212,0.1)] ring-1 ring-cyan-500/20' 
                        : 'bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/60'
                      }
                    `}
                    onMouseEnter={() => expandExperience(exp.id)}
                  >
                    {/* Collapsed/Header View */}
                    <div 
                      className="p-6 md:p-8 cursor-pointer"
                      onClick={() => toggleExperience(exp.id)}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="space-y-3">
                          <span className={`text-sm font-semibold tracking-wide ${isExpanded ? 'text-cyan-400' : 'text-slate-500'}`}>
                            {exp.period}
                          </span>
                          
                          <div>
                            <h3 className={`text-xl md:text-2xl font-bold transition-colors mb-1 ${isExpanded ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                              {exp.role}
                            </h3>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:text-base">
                               <p className="text-slate-400 font-medium flex items-center gap-2">
                                  {exp.company}
                               </p>
                               {exp.location && (
                                 <span className="hidden md:flex items-center gap-2 text-slate-500 text-sm">
                                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                    {exp.location}
                                 </span>
                               )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:block hidden">
                          <button 
                            className={`p-2 rounded-full transition-all duration-300 ${isExpanded ? 'bg-white/10 text-cyan-400' : 'text-slate-500 hover:text-white'}`}
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent double trigger
                              toggleExperience(exp.id);
                            }}
                            aria-label={isExpanded ? "Collapse" : "Expand"}
                          >
                            <ChevronDown 
                              className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} 
                              size={20}
                            />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <div 
                      className={`
                        px-6 md:px-8 overflow-hidden transition-all duration-700 ease-in-out bg-black/20
                        ${isExpanded ? 'max-h-[1000px] opacity-100 pb-8' : 'max-h-0 opacity-0'}
                      `}
                    >
                      <div className="pt-6 border-t border-white/10">
                        <p className="text-slate-300 mb-6 leading-relaxed font-light text-lg">
                          {exp.description}
                        </p>
                        
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-3 group/item">
                              <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-cyan-500/80 group-hover/item:bg-cyan-400 transition-colors shadow-[0_0_8px_rgba(6,182,212,0.5)]"></div>
                              <p className="text-slate-400 group-hover/item:text-slate-200 transition-colors text-base leading-relaxed">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;