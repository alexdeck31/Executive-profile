import React from 'react';
import { X, FileText, Printer, Download } from 'lucide-react';
import { CV_DESIGN_URL, CV_PRINTABLE_URL } from '../../constants';
import { trackCVDownload } from '../../analytics';
import { useLanguage } from '../../i18n/LanguageContext';

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  source: string;
}

const CVDownloadModal: React.FC<CVDownloadModalProps> = ({ isOpen, onClose, source }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  const handleDownload = (version: 'design' | 'printable', url: string) => {
    trackCVDownload(source, version);
    
    // Create an invisible anchor element to trigger the download attribute
    const a = document.createElement('a');
    a.href = encodeURI(url);
    a.download = url.split('/').pop() || 'CV_Alexandre_Durand.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-zinc-900/50">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Download className="text-cyan-400" size={20} />
            {t('cvModal.title')}
          </h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/5"
            title={t('cvModal.cancel')}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-slate-400 text-sm mb-4">
            {t('cvModal.description')}
          </p>

          {/* Design Version Option */}
          <button
            onClick={() => handleDownload('design', CV_DESIGN_URL)}
            className="w-full group flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 text-left"
          >
            <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
              <FileText size={24} />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                {t('cvModal.designTitle')}
              </h4>
              <p className="text-slate-400 text-xs">
                {t('cvModal.designDesc')}
              </p>
            </div>
          </button>

          {/* Printable Version Option */}
          <button
            onClick={() => handleDownload('printable', CV_PRINTABLE_URL)}
            className="w-full group flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 text-left"
          >
            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <Printer size={24} />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1 group-hover:text-purple-400 transition-colors">
                {t('cvModal.printableTitle')}
              </h4>
              <p className="text-slate-400 text-xs">
                {t('cvModal.printableDesc')}
              </p>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="p-4 bg-zinc-950/50 text-center border-t border-white/5">
          <p className="text-xs text-slate-500">
            {t('cvModal.footerNote')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CVDownloadModal;
