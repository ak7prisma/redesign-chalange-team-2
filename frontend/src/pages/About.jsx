import React from 'react';
import AboutHero from '../components/About/Hero';
import AboutInfo from '../components/About/Info';

export default function About() {
  return (
    <div className="relative z-20 font-sans">
      <div className="max-w-[1366px] mx-auto px-3 md:px-7 pt-12 space-y-12">
        <AboutHero />
        <AboutInfo />
      </div>
    </div>
  );
}