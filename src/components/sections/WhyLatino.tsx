'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Search, Handshake, Languages, Building2, Shield } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const icons = [Globe, Search, Handshake, Languages, Building2, Shield];

export default function WhyLatino() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = (t('why.cards') as unknown) as Array<{ title: string; description: string }>;

  return (
    <section id="why" ref={ref} className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-section font-bold text-neutral-white mb-4">
            {t('why.title')}
          </h2>
          <p className="text-[#D1C9B8] text-lg max-w-2xl mx-auto">
            {t('why.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(cards) && cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-white mb-3">
                  {card.title}
                </h3>
                <p className="text-[#D1C9B8] text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
