'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Partners() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const names = (t('partners.names') as unknown) as string[];

  return (
    <section id="partners" ref={ref} className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-section font-bold text-neutral-white mb-4">
            {t('partners.title')}
          </h2>
          <p className="text-[#D1C9B8] text-lg max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array.isArray(names) && names.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:scale-[1.02] transition-transform"
            >
              <span className="font-bold text-white/60 text-lg group-hover:text-gold transition-colors">
                {name}
              </span>
              <span className="text-[10px] text-gold/60 mt-2 font-bold uppercase tracking-wider">
                {t('partners.comingSoon')}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
