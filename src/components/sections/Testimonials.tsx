'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function Testimonials() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  const items = (t('testimonials.items') as unknown) as Array<{
    quote: string;
    name: string;
    role: string;
    domain: string;
  }>;

  const count = Array.isArray(items) ? items.length : 0;

  useEffect(() => {
    if (count === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % count);
    }, 6000);
    return () => clearInterval(timer);
  }, [count]);

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section ref={ref} className="relative z-10 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-section font-bold text-neutral-white text-center mb-16"
        >
          {t('testimonials.title')}
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />
              <p className="text-neutral-white text-lg md:text-xl leading-relaxed mb-8 font-display italic">
                &ldquo;{items[current].quote}&rdquo;
              </p>
              <div>
                <p className="text-gold font-bold">{items[current].name}</p>
                <p className="text-[#D1C9B8] text-sm">{items[current].role}</p>
                <p className="text-gold-light/60 text-xs mt-1 font-display">{items[current].domain}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + count) % count)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? 'bg-gold w-6' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % count)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
