'use client';

import { useLanguage } from '@/hooks/useLanguage';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const footerNavLinks = [
  { key: 'footer.links.why', href: '#why' },
  { key: 'footer.links.who', href: '#who' },
  { key: 'footer.links.timeline', href: '#timeline' },
  { key: 'footer.links.partners', href: '#partners' },
  { key: 'footer.links.faq', href: '#faq' },
  { key: 'footer.links.contact', href: '#' },
];

const legalLinks = [
  { key: 'footer.legal.privacy', href: '#' },
  { key: 'footer.legal.terms', href: '#' },
  { key: 'footer.legal.abuse', href: '#' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-bold text-gold">.latino</span>
            <p className="mt-4 text-[#D1C9B8] text-sm max-w-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:text-gold hover:border-gold/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-neutral-white text-sm uppercase tracking-wider mb-4">
              {t('footer.links.why').split('.')[0]}
            </h4>
            <ul className="space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-[#D1C9B8] hover:text-gold transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Language */}
          <div>
            <h4 className="font-bold text-neutral-white text-sm uppercase tracking-wider mb-4">
              {t('footer.legal.privacy').split(' ')[0]}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-[#D1C9B8] hover:text-gold transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <LanguageToggle />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <span>{t('footer.copyright')}</span>
          <span>{t('footer.registry')}</span>
        </div>
      </div>
    </footer>
  );
}
