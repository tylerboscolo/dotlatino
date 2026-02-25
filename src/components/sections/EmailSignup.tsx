'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function EmailSignup() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'invalid'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('invalid');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, language: lang }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="signup" ref={ref} className="relative z-10 py-24 md:py-32" style={{ background: 'linear-gradient(135deg, rgba(212,168,67,0.1) 0%, rgba(168,85,168,0.08) 50%, rgba(26,171,184,0.1) 100%)' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <h2 className="font-display text-section font-bold text-neutral-white mb-4">
            {t('email.title')}
          </h2>
          <p className="text-[#D1C9B8] text-lg mb-8 max-w-lg mx-auto">
            {t('email.subtitle')}
          </p>

          {status === 'success' ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center gap-3 text-teal-light text-lg font-bold"
            >
              <Check className="w-6 h-6" />
              <span>{t('email.success')} 🎉</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'invalid' || status === 'error') setStatus('idle');
                }}
                placeholder={t('email.placeholder')}
                className="flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-neutral-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all min-h-[44px]"
                aria-label={t('email.placeholder')}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-br from-gold to-orange text-neutral-black font-bold hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,168,67,0.3)] transition-all min-h-[44px] disabled:opacity-50 cursor-pointer"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    {t('email.button')}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {(status === 'invalid' || status === 'error') && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-orange text-sm mt-4"
            >
              <AlertCircle className="w-4 h-4" />
              {status === 'invalid' ? t('email.invalid') : t('email.error')}
            </motion.p>
          )}

          <p className="text-[#9CA3AF] text-xs mt-4">
            {t('email.privacy')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
