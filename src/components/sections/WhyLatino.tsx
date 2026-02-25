'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Search, Handshake, Languages, Building2, Shield } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const cards = [
  { icon: Globe, color: 'text-amber-400', bg: 'bg-amber-400/10', hover: 'hover:border-amber-400/40' },
  { icon: Search, color: 'text-teal-400', bg: 'bg-teal-400/10', hover: 'hover:border-teal-400/40' },
  { icon: Handshake, color: 'text-pink-500', bg: 'bg-pink-500/10', hover: 'hover:border-pink-500/40' },
  { icon: Languages, color: 'text-orange-400', bg: 'bg-orange-400/10', hover: 'hover:border-orange-400/40' },
  { icon: Building2, color: 'text-teal-400', bg: 'bg-teal-400/10', hover: 'hover:border-teal-400/40' },
  { icon: Shield, color: 'text-amber-400', bg: 'bg-amber-400/10', hover: 'hover:border-amber-400/40' },
];

export default function WhyLatino() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    { title: t('whyLatino.feature1.title'), desc: t('whyLatino.feature1.desc') },
    { title: t('whyLatino.feature2.title'), desc: t('whyLatino.feature2.desc') },
    { title: t('whyLatino.feature3.title'), desc: t('whyLatino.feature3.desc') },
    { title: t('whyLatino.feature4.title'), desc: t('whyLatino.feature4.desc') },
    { title: t('whyLatino.feature5.title'), desc: t('whyLatino.feature5.desc') },
    { title: t('whyLatino.feature6.title'), desc: t('whyLatino.feature6.desc') },
  ];

  return (
    <section id="why" ref={ref} className="relative z-10 py-24 md:py-32 glow-teal">
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
          {features.map((feature, i) => {
            const { icon: Icon, color, bg, hover } = cards[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 ${hover} hover:scale-[1.02] transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#D1C9B8] text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
