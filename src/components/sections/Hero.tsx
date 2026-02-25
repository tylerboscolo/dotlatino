'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import Button from '@/components/ui/Button';

const domains = ['musica.latino', 'cocina.latino', 'futbol.latino', 'arte.latino', 'negocio.latino'];

export default function Hero() {
  const { t } = useLanguage();
  const [domainIndex, setDomainIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = domains[domainIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setDomainIndex((prev) => (prev + 1) % domains.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, domainIndex]);

  const headlineWords = t('hero.headline').split(' ');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-mid/50 to-dark-teal/30 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gold text-xs md:text-sm tracking-[0.25em] font-bold uppercase mb-6"
        >
          {t('hero.eyebrow')}
        </motion.p>

        {/* Headline with staggered word reveal */}
        <h1 className="font-display text-hero font-bold leading-tight mb-6">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="inline-block mr-[0.3em] text-neutral-white"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-[#D1C9B8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
        >
          {t('hero.subhead')}
        </motion.p>

        {/* Domain typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mb-10"
        >
          <div className="inline-flex items-center bg-white/5 border border-gold/20 rounded-2xl px-6 py-4 backdrop-blur-sm">
            <span className="text-xl md:text-2xl font-display text-gold-light">
              {displayText}
              <span className="animate-pulse text-gold">|</span>
            </span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#signup" variant="primary">
            {t('hero.cta1')} →
          </Button>
          <Button href="#why" variant="secondary">
            {t('hero.cta2')} ↓
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
