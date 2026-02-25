'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const PARTNER_NAMES = ['GoDaddy', 'Namecheap', 'Cloudflare', 'Name.com', 'Dynadot', 'Hover'];

export default function Partners() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToSignup = () => {
    const el = document.getElementById('signup');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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
          {PARTNER_NAMES.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-gold/40 hover:scale-[1.03] transition-all"
            >
              <Globe className="w-5 h-5 text-gold/40 mb-3 group-hover:text-gold/60 transition-colors" />
              <span className="font-medium text-white text-sm group-hover:text-gold transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-gray-400 text-sm mb-6">
            {t('partners.note')}
          </p>
          <button
            onClick={scrollToSignup}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gold/10 border border-gold/30 text-gold font-semibold hover:bg-gold/20 hover:border-gold/50 transition-all"
          >
            {t('partners.ctaButton')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
