'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Store, Mic, Heart, Newspaper } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const cardStyles = [
  { icon: Store, color: 'text-amber-400', bg: 'bg-amber-400/10', hover: 'hover:border-amber-400/40' },
  { icon: Mic, color: 'text-pink-500', bg: 'bg-pink-500/10', hover: 'hover:border-pink-500/40' },
  { icon: Heart, color: 'text-teal-400', bg: 'bg-teal-400/10', hover: 'hover:border-teal-400/40' },
  { icon: Newspaper, color: 'text-orange-400', bg: 'bg-orange-400/10', hover: 'hover:border-orange-400/40' },
];

export default function WhoIsItFor() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const audiences = [
    { title: t('whoIsItFor.audience1.title'), desc: t('whoIsItFor.audience1.desc'), domains: t('whoIsItFor.audience1.domains') },
    { title: t('whoIsItFor.audience2.title'), desc: t('whoIsItFor.audience2.desc'), domains: t('whoIsItFor.audience2.domains') },
    { title: t('whoIsItFor.audience3.title'), desc: t('whoIsItFor.audience3.desc'), domains: t('whoIsItFor.audience3.domains') },
    { title: t('whoIsItFor.audience4.title'), desc: t('whoIsItFor.audience4.desc'), domains: t('whoIsItFor.audience4.domains') },
  ];

  return (
    <section id="who" ref={ref} className="relative z-10 py-24 md:py-32 glow-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-section font-bold text-neutral-white mb-4">
            {t('who.title')}
          </h2>
          <p className="text-[#D1C9B8] text-lg max-w-2xl mx-auto">
            {t('who.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-12">
          {audiences.map((audience, i) => {
            const { icon: Icon, color, bg, hover } = cardStyles[i];
            const isReversed = i % 2 === 1;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`p-8 md:p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 ${hover} transition-all duration-300 flex flex-col md:flex-row items-start gap-6 ${
                  isReversed ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl ${bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-8 h-8 ${color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-neutral-white mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-[#D1C9B8] leading-relaxed mb-4">
                    {audience.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-gold/5 border border-gold/20 rounded-lg px-4 py-2">
                    <span className="text-gold-light font-display text-sm font-bold">
                      {audience.domains}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
