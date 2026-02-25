'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import AccordionItem from '@/components/ui/AccordionItem';

export default function FAQ() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
    { question: t('faq.q7'), answer: t('faq.a7') },
    { question: t('faq.q8'), answer: t('faq.a8') },
    { question: t('faq.q9'), answer: t('faq.a9') },
    { question: t('faq.q10'), answer: t('faq.a10') },
  ];

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
          className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          {faqs.map((item, i) => (
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
