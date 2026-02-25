export const GA_MEASUREMENT_ID = 'G-KDTR9WBM73';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Generic helper to send events safely
export const trackEvent = (action: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, params);
  }
};

// Specific tracker for CV downloads
export const trackCVDownload = (source: string, version: 'design' | 'printable') => {
  trackEvent('download_cv', {
    event_category: 'Engagement',
    event_label: `Downloaded ${version} version from ${source}`,
    file_name: version === 'design' ? 'Alexandre_Durand_CV_Design.pdf' : 'Alexandre_Durand_CV_Printable.pdf',
    link_url: version === 'design' 
      ? 'https://drive.google.com/file/d/1nMZ7PVTAzCI3Eq2eBk1t46h7ugn8Ryvm/view?usp=drive_link'
      : 'https://drive.google.com/file/d/1qBTyevZVo7Z5jw_GoNM2OyCisKmcBRKf/view?usp=drive_link'
  });
};

// Specific tracker for LinkedIn clicks
export const trackLinkedinClick = (source: string) => {
  trackEvent('social_click', {
    event_category: 'Social',
    event_label: `LinkedIn from ${source}`,
    platform: 'LinkedIn'
  });
};