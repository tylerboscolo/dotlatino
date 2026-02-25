'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  prefix?: string;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({ value, prefix = '', suffix = '', label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    const target = parseFloat(value);
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const isDecimal = value.includes('.');
    let current = 0;

    const timer = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setDisplayValue(isDecimal ? current.toFixed(1) : Math.floor(current).toString());
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-hero text-gold-light">
        {prefix}{displayValue}{suffix}
      </div>
      <p className="text-[#D1C9B8] mt-2 text-sm md:text-base">{label}</p>
    </div>
  );
}
