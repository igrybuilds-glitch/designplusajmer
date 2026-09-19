import React from 'react';
import styles from './EditorialHero.module.css';

export interface EditorialHeroProps {
  subtitle?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  backgroundImageUrl?: string;
  imageAlt?: string;
  className?: string;
  contentClassName?: string;
}

export function EditorialHero({
  subtitle,
  title,
  description,
  backgroundImageUrl,
  imageAlt = 'Editorial hero visual',
  className = '',
  contentClassName = ''
}: EditorialHeroProps) {
  return (
    <div className={`${styles.heroWrapper} ${className}`}>
      {/* Header text section */}
      <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 ${styles.textSection} ${contentClassName}`}>
        <div className="max-w-3xl space-y-4">
          {subtitle && (
            <div className="text-[11px] uppercase tracking-[0.25em] text-stone-500 font-semibold flex items-center gap-2">
              {subtitle}
            </div>
          )}
          
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            {title}
          </h1>
          
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans pt-2">
            {description}
          </p>
        </div>
      </section>

      {/* Visual Section (Optional) */}
      {backgroundImageUrl && (
        <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 ${styles.imageSection}`}>
          <div className={`aspect-16/8 bg-stone-200 overflow-hidden border border-stone-200 ${styles.imageContainer}`}>
            <img
              src={backgroundImageUrl}
              alt={imageAlt}
              width={1600}
              height={800}
              loading="eager"
              fetchPriority="high"
              className={`w-full h-full object-cover object-center ${styles.image}`}
            />
          </div>
        </section>
      )}
    </div>
  );
}
