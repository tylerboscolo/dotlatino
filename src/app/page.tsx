'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import MarqueeSection from '@/components/sections/MarqueeSection';
import WhyLatino from '@/components/sections/WhyLatino';
import WhoIsItFor from '@/components/sections/WhoIsItFor';
import BrandShowcase from '@/components/sections/BrandShowcase';
import Stats from '@/components/sections/Stats';
import Timeline from '@/components/sections/Timeline';
import Partners from '@/components/sections/Partners';
import ImagineYourLatino from '@/components/sections/ImagineYourLatino';
import FAQ from '@/components/sections/FAQ';
import EmailSignup from '@/components/sections/EmailSignup';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <MarqueeSection />
        <WhyLatino />
        <WhoIsItFor />
        <BrandShowcase />
        <Stats />
        <Timeline />
        <Partners />
        <ImagineYourLatino />
        <FAQ />
        <EmailSignup />
      </main>
      <Footer />
    </>
  );
}
