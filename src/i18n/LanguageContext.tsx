import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { translations, Language, TranslationKey } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); // Default to English

  const t = (key: TranslationKey): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value as string;
  };

  useEffect(() => {
    // Dynamically update SEO tags based on language selection
    document.documentElement.lang = language;
    document.title = t('seo.title');
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo.description'));
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t('seo.title'));
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t('seo.description'));
    }

    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', t('seo.title'));
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', t('seo.description'));
    }

    // JSON-LD Structured Data
    let schemaScript = document.getElementById('json-ld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Alexandre Durand",
      "jobTitle": "Senior international account executive SaaS, Head of international sales B2B & AI expert",
      "url": "https://alexandredurand.com",
      "sameAs": [
        "https://www.linkedin.com/in/alexandre-durand-92336330/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "addressCountry": "FR"
      },
      "knowsAbout": ["SaaS", "Smart City", "Artificial Intelligence", "Business Development", "International Sales", "B2B Sales", "N8N", "B2B", "GTM", "sales leader", "international growth"],
      "image": "https://media.licdn.com/dms/image/v2/C4D03AQE1zWlqjL-G-Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1654871922573?e=1746662400&v=beta&t=Zf2q_B8380rC0w2AAMW1X4Xv-F8-tXmR6mXz4C1pQpE"
    };

    schemaScript.textContent = JSON.stringify(schemaData);

  }, [language, t]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
