'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Timeline() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const phases = (t('timeline.phases') as unknown) as Array<{
    phase: string;
    name: string;
    description: string;
    status: string;
  }>;

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
            {/* Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20" />

            <div className="grid grid-cols-4 gap-6">
              {Array.isArray(phases) && phases.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pt-16"
                >
                  {/* Dot */}
                  <div className="absolute top-[22px] left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-gold shadow-[0_0_20px_rgba(212,168,67,0.5)]" />
                  </div>

                  <div className="glass-card p-6 text-center">
                    <span className="text-gold text-xs font-bold uppercase tracking-wider">
                      {phase.phase}
                    </span>
                    <h3 className="font-display text-lg font-bold text-neutral-white mt-2 mb-2">
                      {phase.name}
                    </h3>
                    <p className="text-[#D1C9B8] text-sm mb-4">
                      {phase.description}
                    </p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold animate-pulse">
                      {phase.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-6">
          {Array.isArray(phases) && phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_15px_rgba(212,168,67,0.5)]" />
                {i < (Array.isArray(phases) ? phases.length : 0) - 1 && (
                  <div className="w-0.5 flex-1 bg-gold/20 mt-2" />
                )}
              </div>
              <div className="glass-card p-5 flex-1 mb-2">
                <span className="text-gold text-xs font-bold uppercase tracking-wider">
                  {phase.phase}
                </span>
                <h3 className="font-display text-lg font-bold text-neutral-white mt-1 mb-1">
                  {phase.name}
                </h3>
                <p className="text-[#D1C9B8] text-sm mb-3">
                  {phase.description}
                </p>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold animate-pulse">
                  {phase.status}
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
