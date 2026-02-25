'use client';

import { useLanguage } from '@/hooks/useLanguage';
import MarqueeStrip from '@/components/ui/MarqueeStrip';

export default function MarqueeSection() {
  const { t } = useLanguage();

  const strip1Text = `🌎 ${t('marquee.strip1')} 🌎`;
  const strip2Text = `✨ ${t('marquee.strip2')} ✨`;

  const separator = '  ·  ';

  return (
    <section className="relative z-10 py-4 -rotate-1 scale-105">
      <MarqueeStrip className="bg-gold/10 border-y border-gold/20 py-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="text-gold font-bold text-sm md:text-base tracking-wider px-2">
            {strip1Text}{separator}
          </span>
        ))}
      </MarqueeStrip>
      <MarqueeStrip reverse className="bg-teal-dark/30 border-y border-teal/10 py-3 mt-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="text-teal-400 font-bold text-sm md:text-base tracking-wider px-2">
            {strip2Text}{separator}
          </span>
        ))}
      </MarqueeStrip>
    </section>
  );
}
