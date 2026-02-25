'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-bold text-sm tracking-wide transition-all duration-200 min-h-[44px]';

  const variants = {
    primary: 'bg-gradient-to-br from-amber-400 via-orange-500 to-pink-600 text-neutral-black hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,168,67,0.3)] active:translate-y-0 active:brightness-95',
    secondary: 'bg-transparent border border-gold text-gold hover:bg-gold/10',
  };

  const classes = `${baseClasses} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
