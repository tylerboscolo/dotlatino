'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, ShoppingBag, Music, Heart, ChefHat, Briefcase } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const iconMap: Record<string, React.ElementType> = {
  User,
  ShoppingBag,
  Music,
  Heart,
  ChefHat,
  Briefcase,
};

export default function ImagineYourLatino() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const domains = (t('imagine.domains') as unknown) as Array<{
    domain: string;
    tagline: string;
    icon: string;
  }>;

  return (
    <section ref={ref} className="relative z-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-section font-bold text-neutral-white mb-4">
            {t('imagine.title')}
          </h2>
          <p className="text-[#D1C9B8] text-lg max-w-2xl mx-auto">
            {t('imagine.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.isArray(domains) && domains.map((item, i) => {
            const Icon = iconMap[item.icon] || User;
            return (
              <motion.div
                key={item.domain}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-gold/40 hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/5 transition-all group"
              >
                {/* Mock browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-[6px] h-[6px] rounded-full bg-red-500/70" />
                    <div className="w-[6px] h-[6px] rounded-full bg-yellow-500/70" />
                    <div className="w-[6px] h-[6px] rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 bg-white/5 rounded-md px-3 py-1 ml-2">
                    <span className="font-mono text-sm text-gold">
                      {item.domain}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="relative px-5 py-5">
                  <Icon className="absolute top-3 right-4 w-10 h-10 text-gold/10 group-hover:text-gold/20 transition-colors" />
                  <p className="text-white text-sm relative z-10">
                    {item.tagline}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
