'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const dotColors = [
  { bg: 'bg-amber-400', shadow: 'shadow-[0_0_20px_rgba(251,191,36,0.5)]', border: 'border-amber-400/30' },
  { bg: 'bg-teal-400', shadow: 'shadow-[0_0_20px_rgba(45,212,191,0.5)]', border: 'border-teal-400/30' },
  { bg: 'bg-orange-400', shadow: 'shadow-[0_0_20px_rgba(251,146,60,0.5)]', border: 'border-orange-400/30' },
  { bg: 'bg-pink-500', shadow: 'shadow-[0_0_20px_rgba(236,72,153,0.5)]', border: 'border-pink-500/30' },
];

export default function Timeline() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const phases = [
    { label: t('timeline.phase1.label'), name: t('timeline.phase1.name'), desc: t('timeline.phase1.desc') },
    { label: t('timeline.phase2.label'), name: t('timeline.phase2.name'), desc: t('timeline.phase2.desc') },
    { label: t('timeline.phase3.label'), name: t('timeline.phase3.name'), desc: t('timeline.phase3.desc') },
    { label: t('timeline.phase4.label'), name: t('timeline.phase4.name'), desc: t('timeline.phase4.desc') },
  ];

  const comingSoon = t('timeline.comingSoon');

  return (
    <section id="timeline" ref={ref} className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-section font-bold text-neutral-white mb-4">
            {t('timeline.title')}
          </h2>
          <p className="text-[#D1C9B8] text-lg max-w-2xl mx-auto">
            {t('timeline.subtitle')}
          </p>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400/30 via-teal-400/40 via-60% to-pink-500/30" />

            <div className="grid grid-cols-4 gap-6">
              {phases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pt-16"
                >
                  <div className="absolute top-[22px] left-1/2 -translate-x-1/2">
                    <div className={`w-4 h-4 rounded-full ${dotColors[i].bg} ${dotColors[i].shadow}`} />
                  </div>

                  <div className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:${dotColors[i].border} transition-all duration-300 text-center`}>
                    <span className="text-gold text-xs font-bold uppercase tracking-wider">
                      {phase.label}
                    </span>
                    <h3 className="font-display text-lg font-bold text-neutral-white mt-2 mb-2">
                      {phase.name}
                    </h3>
                    <p className="text-[#D1C9B8] text-sm mb-4">
                      {phase.desc}
                    </p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold animate-pulse">
                      {comingSoon}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-6">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${dotColors[i].bg} ${dotColors[i].shadow}`} />
                {i < phases.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-amber-400/20 to-pink-500/20 mt-2" />
                )}
              </div>
              <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex-1 mb-2">
                <span className="text-gold text-xs font-bold uppercase tracking-wider">
                  {phase.label}
                </span>
                <h3 className="font-display text-lg font-bold text-neutral-white mt-1 mb-1">
                  {phase.name}
                </h3>
                <p className="text-[#D1C9B8] text-sm mb-3">
                  {phase.desc}
                </p>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold animate-pulse">
                  {comingSoon}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-[#9CA3AF] text-sm mt-10"
        >
          {t('timeline.datesNote')}
        </motion.p>
      </div>
    </section>
  );
}
