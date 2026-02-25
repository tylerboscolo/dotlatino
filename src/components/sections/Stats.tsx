'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function Stats() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const items = (t('stats.items') as unknown) as Array<{
    value: string;
    prefix?: string;
    suffix: string;
    label: string;
  }>;

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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {Array.isArray(items) && items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AnimatedCounter
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                label={item.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
