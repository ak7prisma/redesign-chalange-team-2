import React from 'react';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import AgeCategoryChart from '../components/Home/AgeCategoryChart';

export default function Home() {
  return (
    <div className="relative z-20 space-y-35">
      <Hero />
      <About />
      <AgeCategoryChart />
    </div>
  );
}