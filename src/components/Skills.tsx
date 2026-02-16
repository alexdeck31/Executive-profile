import React, { useEffect, useRef, useState } from 'react';
import Section from './ui/Section';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const coreSkills = SKILLS.filter(s => s.category === 'core' || s.category === 'tech');
  const languages = SKILLS.filter(s => s.category === 'language');
  
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.disconnect();
    };
  }, []);

  return (
    <Section className="bg-slate-950">
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Core Skills */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Core Competencies</h3>
          <div className="space-y-6">
            {coreSkills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">{skill.name}</span>
                  <span 
                    className={`text-cyan-400 text-sm font-bold transition-opacity duration-500`}
                    style={{ 
                      opacity: isVisible ? 1 : 0, 
                      transitionDelay: `${index * 100 + 500}ms` 
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-600 to-blue-500 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transition: `width 3s cubic-bezier(0.22, 1, 0.36, 1) ${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Languages</h3>
          <div className="grid grid-cols-1 gap-4">
            {languages.map((lang, langIndex) => (
              <div key={lang.name} className="flex items-center justify-between p-4 glass-card rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <span className="text-lg text-white font-medium">{lang.name}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => {
                    const isFilled = (lang.level / 20) > i;
                    // Stagger language animations after core skills (approx 800ms offset)
                    const delay = 800 + (langIndex * 150) + (i * 100);
                    
                    return (
                      <div 
                        key={i} 
                        className={`w-2 h-8 rounded-full transform -skew-x-12 ${
                          isFilled ? 'bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]' : 'bg-white/5'
                        }`}
                        style={{
                           opacity: isVisible ? (isFilled ? 1 : 0.3) : 0,
                           transform: isVisible 
                             ? `skewX(-12deg) scaleY(1)` 
                             : `skewX(-12deg) scaleY(0)`,
                           transition: `all 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </Section>
  );
};

export default Skills;