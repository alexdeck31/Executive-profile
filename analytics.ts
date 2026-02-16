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
export const trackCVDownload = (source: string) => {
  trackEvent('download_cv', {
    event_category: 'Engagement',
    event_label: `Downloaded from ${source}`,
    file_name: 'Alexandre_Durand_CV.pdf',
    link_url: 'https://drive.google.com/file/d/1A3hftXGzDdbRfDXMYz2ZQeECGEtg0Ysx/view?usp=drive_link'
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
