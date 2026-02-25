'use client';

import { ReactNode } from 'react';

interface MarqueeStripProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

export default function MarqueeStrip({ children, reverse = false, className = '' }: MarqueeStripProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        <div className="inline-flex items-center">{children}</div>
        <div className="inline-flex items-center">{children}</div>
      </div>
    </div>
  );
}
