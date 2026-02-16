import React, { useState } from 'react';
import { Mail, Linkedin, Copy, Check } from 'lucide-react';
import Button from './ui/Button';
import { getEmail, LINKEDIN_URL } from '../constants';
import { trackLinkedinClick } from '../analytics';

const Footer: React.FC = () => {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    if (!emailRevealed) {
      setEmailRevealed(true);
    } else {
      window.location.href = `mailto:${getEmail()}`;
    }
  };

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(getEmail());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-black py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
          Let’s scale innovation <br /><span className="text-gradient-blue">internationally.</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button 
            href={LINKEDIN_URL} 
            external 
            icon={<Linkedin size={18} className="ml-2"/>}
            onClick={() => trackLinkedinClick('footer')}
          >
            Connect on LinkedIn
          </Button>
          
          <div className="relative group">
            <Button 
              onClick={handleEmailClick} 
              variant="outline" 
              icon={!emailRevealed ? <Mail size={18} className="ml-2"/> : undefined}
              className={emailRevealed ? "pr-12" : ""}
            >
              {emailRevealed ? getEmail() : "Contact via Email"}
            </Button>
            
            {emailRevealed && (
              <button 
                onClick={copyToClipboard}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:text-cyan-400 text-slate-400 transition-colors z-20"
                title="Copy to clipboard"
              >
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Alexandre Durand. All rights reserved.</p>
          <button 
            onClick={scrollToTop} 
            className="mt-4 md:mt-0 hover:text-cyan-400 transition-colors"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;