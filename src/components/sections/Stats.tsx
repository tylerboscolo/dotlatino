'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Stats() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: t('stats.stat1.value'), label: t('stats.stat1.label'), desc: t('stats.stat1.desc') },
    { value: t('stats.stat2.value'), label: t('stats.stat2.label'), desc: t('stats.stat2.desc') },
    { value: t('stats.stat3.value'), label: t('stats.stat3.label'), desc: t('stats.stat3.desc') },
    { value: t('stats.stat4.value'), label: t('stats.stat4.label'), desc: t('stats.stat4.desc') },
  ];

  return (
    <section ref={ref} className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-section font-bold text-neutral-white text-center mb-16"
        >
          {t('stats.title')}
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/40 transition-all duration-300 text-center"
            >
              <div className="font-display text-5xl md:text-6xl text-gold-light">
                {stat.value}
              </div>
              <p className="text-neutral-white text-lg font-semibold mt-3">
                {stat.label}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
