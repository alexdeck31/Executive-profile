import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Globe } from 'lucide-react';
import CVDownloadModal from './ui/CVDownloadModal';
import { useLanguage } from '../i18n/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.profile'), href: '#profile' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.keynotes'), href: '#keynotes' },
    { name: t('passions.sectionSubtitle'), href: '#passions' },
    { name: t('nav.ai'), href: '#ai-innovation' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'bg-transparent py-4' 
            : isScrolled 
              ? 'bg-black/70 backdrop-blur-md border-b border-white/5 py-4' 
              : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter text-white z-50">
            AD<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-white cursor-pointer"
              title={t('nav.changeLanguage')}
            >
              <Globe size={14} /> {language === 'en' ? 'FR' : 'EN'}
            </button>

            <button 
              onClick={() => setIsCVModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all text-white cursor-pointer"
            >
              <Download size={14} /> CV
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 text-xs font-semibold uppercase tracking-wide bg-white/5 border border-white/10 rounded-full text-white cursor-pointer"
              title={t('nav.changeLanguage')}
            >
              <Globe size={14} /> {language === 'en' ? 'FR' : 'EN'}
            </button>
            <button 
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-2xl font-light text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsCVModalOpen(true);
          }}
          className="text-cyan-400 text-lg flex items-center gap-2 mt-4 cursor-pointer"
        >
          <Download size={18} /> {t('nav.downloadCv')}
        </button>
      </div>

      {/* CV Download Modal */}
      <CVDownloadModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
        source="navbar"
      />
    </>
  );
};

export default Navbar;
