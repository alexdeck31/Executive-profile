import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', noPadding = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative ${noPadding ? '' : 'py-20 md:py-32'} ${className} transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;