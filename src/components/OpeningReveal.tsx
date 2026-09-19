import React, { useState, useEffect } from 'react';
import styles from './OpeningReveal.module.css';

export function OpeningReveal() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      const hasSeen = sessionStorage.getItem('hasSeenOpeningReveal');
      return !hasSeen;
    }
    return true;
  });

  useEffect(() => {
    if (isVisible) {
      sessionStorage.setItem('hasSeenOpeningReveal', 'true');
      
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2300);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={styles.overlay} 
      aria-hidden="true" 
      role="presentation"
    >
      <div className={styles.gridBackground} />
      
      <div className={styles.frameContainer}>
        {/* Technical Corner Crosshairs */}
        <div className={styles.cornerTL} />
        <div className={styles.cornerTR} />
        <div className={styles.cornerBL} />
        <div className={styles.cornerBR} />

        {/* Geographic / Studio Coordinates */}
        <div className={styles.coordinates}>
          26.4499° N, 74.6399° E — AJMER · RAJASTHAN
        </div>

        {/* Wordmark */}
        <div className={styles.wordmark}>
          DESIGN PLUS
        </div>

        {/* Architectural Hairline & Datum */}
        <div className={styles.dividerWrapper}>
          <div className={styles.line} />
          <div className={styles.datum} />
        </div>

        {/* Subtitle discipline */}
        <div className={styles.subtitle}>
          Architecture &amp; Structural Engineering Studio
        </div>
      </div>
    </div>
  );
}
