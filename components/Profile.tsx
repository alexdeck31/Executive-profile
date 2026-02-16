import React, { useState } from 'react';
import Section from './ui/Section';
import { VALUE_CARDS } from '../constants';
import { Plus } from 'lucide-react';

const Profile: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <Section id="profile" className="bg-black py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Content */}
        <div className="mb-16 md:mb-24 max-w-5xl">
          <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase mb-4 block">Executive Summary</span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            A strategic leader bridging <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">technology and business</span> on the global stage.
          </h2>
          
          <div className="max-w-3xl">
            <p className="text-slate-400 text-lg leading-relaxed">
              With over 15 years of experience in international B2B SaaS and solution technology, I specialize in scaling companies from early traction to market leadership. 
              My approach combines deep industry expertise with data-driven go-to-market execution, forging strategic partnerships that unlock sustainable revenue growth. 
              Trilingual (FR, EN, IT) with a dual degree in Engineering and Business, I bring both technical acumen and strong commercial instincts to help fast-growing companies scale in complex B2B environments.
            </p>
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_CARDS.map((card) => {
            const isActive = activeCard === card.id;

            return (
              <div 
                key={card.id}
                onClick={() => toggleCard(card.id)}
                className={`
                  relative group p-8 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden
                  ${isActive 
                    ? 'bg-zinc-900 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]' 
                    : 'bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/80'
                  }
                `}
              >
                {/* Icon Container */}
                <div className={`
                  w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-500
                  ${isActive ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30' : 'bg-white/5 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110'}
                `}>
                  {card.icon}
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 transition-colors ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                  {card.title}
                </h3>
                
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-slate-300' : 'text-slate-500 group-hover:text-slate-400'}`}>
                  {card.description}
                </p>

                {/* Expandable Details */}
                <div 
                  className={`
                    grid transition-[grid-template-rows] duration-500 ease-out
                    ${isActive ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-white/10' : 'grid-rows-[0fr] opacity-0'}
                  `}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-3">
                      {card.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                           <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                           {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Interactive Indicator (Visual hint to click) */}
                <div className={`absolute top-6 right-6 transition-transform duration-500 text-slate-600 ${isActive ? 'rotate-45 text-cyan-500' : 'group-hover:text-white'}`}>
                   <Plus size={20} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </Section>
  );
};

export default Profile;