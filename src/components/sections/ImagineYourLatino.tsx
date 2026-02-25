'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, ShoppingBag, Music, Heart, UtensilsCrossed, Briefcase } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const DOMAIN_CARDS = [
  { icon: User, domainColor: 'text-amber-400', hover: 'hover:border-amber-400/40' },
  { icon: ShoppingBag, domainColor: 'text-teal-400', hover: 'hover:border-teal-400/40' },
  { icon: Music, domainColor: 'text-pink-500', hover: 'hover:border-pink-500/40' },
  { icon: Heart, domainColor: 'text-orange-400', hover: 'hover:border-orange-400/40' },
  { icon: UtensilsCrossed, domainColor: 'text-teal-400', hover: 'hover:border-teal-400/40' },
  { icon: Briefcase, domainColor: 'text-amber-400', hover: 'hover:border-amber-400/40' },
];

export default function ImagineYourLatino() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const domains = [
    { name: t('pictureYourself.domain1.name'), tag: t('pictureYourself.domain1.tag') },
    { name: t('pictureYourself.domain2.name'), tag: t('pictureYourself.domain2.tag') },
    { name: t('pictureYourself.domain3.name'), tag: t('pictureYourself.domain3.tag') },
    { name: t('pictureYourself.domain4.name'), tag: t('pictureYourself.domain4.tag') },
    { name: t('pictureYourself.domain5.name'), tag: t('pictureYourself.domain5.tag') },
    { name: t('pictureYourself.domain6.name'), tag: t('pictureYourself.domain6.tag') },
  ];

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
          {domains.map((item, i) => {
            const { icon: Icon, domainColor, hover } = DOMAIN_CARDS[i];
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden ${hover} hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/5 transition-all group`}
              >
                {/* Mock browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-[6px] h-[6px] rounded-full bg-red-500/70" />
                    <div className="w-[6px] h-[6px] rounded-full bg-yellow-500/70" />
                    <div className="w-[6px] h-[6px] rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 bg-white/5 rounded-md px-3 py-1 ml-2">
                    <span className={`font-mono text-sm ${domainColor}`}>
                      {item.name}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="relative px-5 py-5">
                  <Icon className="absolute top-3 right-4 w-10 h-10 text-gold/10 group-hover:text-gold/20 transition-colors" />
                  <p className="text-white text-sm relative z-10">
                    {item.tag}
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
