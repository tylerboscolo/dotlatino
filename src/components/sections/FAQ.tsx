'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import AccordionItem from '@/components/ui/AccordionItem';

export default function FAQ() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const items = (t('faq.items') as unknown) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section id="faq" ref={ref} className="relative z-10 py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-display text-section font-bold text-neutral-white text-center mb-16"
        >
          {t('faq.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-6 md:p-8"
        >
          {Array.isArray(items) && items.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
