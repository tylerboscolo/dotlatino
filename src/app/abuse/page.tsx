'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Loader2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export default function AbusePage() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <nav className="relative z-10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="font-display text-2xl font-bold text-gold">.latino</Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#D1C9B8] hover:text-gold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t('abuse.backHome')}
          </Link>
        </div>
      </nav>

      {/* Content */}
      <section className="relative z-10 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-white mb-4">
              {t('abuse.title')}
            </h1>
            <p className="text-[#D1C9B8] text-lg max-w-xl mx-auto">
              {t('abuse.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-4 py-8"
              >
                <div className="w-16 h-16 rounded-full bg-teal-400/10 flex items-center justify-center">
                  <Check className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-white">
                  {t('abuse.successTitle')}
                </h3>
                <p className="text-[#D1C9B8] text-sm text-center max-w-md">
                  {t('abuse.successDesc')}
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-gold to-orange text-neutral-black font-bold hover:brightness-110 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t('abuse.backHome')}
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#D1C9B8] mb-1.5">
                    {t('abuse.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-neutral-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#D1C9B8] mb-1.5">
                    {t('abuse.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-neutral-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#D1C9B8] mb-1.5">
                    {t('abuse.messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-neutral-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-gold focus:ring-gold/30 accent-[#D4A843]"
                  />
                  <span className="text-[#D1C9B8] text-xs leading-relaxed">
                    {t('abuse.consent')}
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-br from-gold to-orange text-neutral-black font-bold hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,168,67,0.3)] transition-all disabled:opacity-50 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    t('abuse.submit')
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <span>{t('footer.copyright')}</span>
          <span>{t('footer.registry')}</span>
        </div>
      </footer>
    </div>
  );
}
