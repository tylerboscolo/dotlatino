'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 min-w-[36px] ${
          lang === 'en'
            ? 'bg-gold text-neutral-black'
            : 'text-white/60 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('es')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 min-w-[36px] ${
          lang === 'es'
            ? 'bg-gold text-neutral-black'
            : 'text-white/60 hover:text-white'
        }`}
      >
        ES
      </button>
    </div>
  );
}
