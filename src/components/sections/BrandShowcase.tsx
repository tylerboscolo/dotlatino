'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import MarqueeStrip from '@/components/ui/MarqueeStrip';

const domainRows = [
  ['musica.latino', 'cocina.latino', 'futbol.latino', 'arte.latino', 'moda.latino', 'salud.latino', 'finanzas.latino', 'educacion.latino', 'viajes.latino', 'tecnologia.latino'],
  ['familia.latino', 'deporte.latino', 'negocio.latino', 'cultura.latino', 'radio.latino', 'noticias.latino', 'fiesta.latino', 'comunidad.latino', 'tienda.latino', 'mercado.latino'],
];

export default function BrandShowcase() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative z-10 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-section font-bold text-neutral-white mb-4">
            {t('brands.title')}
          </h2>
          <p className="text-[#D1C9B8] text-lg max-w-2xl mx-auto">
            {t('brands.subtitle')}
          </p>
        </motion.div>
      </div>

      {domainRows.map((row, rowIndex) => (
        <MarqueeStrip key={rowIndex} reverse={rowIndex === 1} className="py-3">
          {row.map((domain) => (
            <div
              key={domain}
              className="inline-flex items-center mx-3 glass-card px-6 py-4 hover:border-gold/40 transition-all group"
            >
              <span className="font-display text-lg font-bold text-gold-light group-hover:text-gold transition-colors">
                {domain}
              </span>
            </div>
          ))}
        </MarqueeStrip>
      ))}
    </section>
  );
}
