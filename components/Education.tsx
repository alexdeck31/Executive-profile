import React from 'react';
import Section from './ui/Section';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section className="bg-slate-950/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {EDUCATION.map((edu) => (
          <div key={edu.id} className="glass-card p-6 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors">
            <div className="p-3 bg-white/5 rounded-lg text-cyan-400 shrink-0">
              <GraduationCap size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
              <p className="text-slate-300">{edu.institution}</p>
              <p className="text-sm text-slate-500 mt-1">{edu.year}</p>
            </div>
            {edu.logo && (
              <div className="shrink-0 bg-white rounded-full p-1 w-16 h-16 flex items-center justify-center">
                <img 
                  src={edu.logo} 
                  alt={`${edu.institution} logo`} 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;