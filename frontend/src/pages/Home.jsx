import React from 'react';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import AgeCategoryChart from '../components/Home/AgeCategoryChart';
import PopularGames from '../components/Home/PopularGames';
import ContentCategories from '../components/Home/ContentCategories';
import News from '../components/Home/News';
import CTA from '../components/Home/CTA';

export default function Home() {
  return (
    <div className="relative z-20 space-y-16 md:space-y-30 px-4 md:px-8">
      <Hero />
      <About />
      <AgeCategoryChart />
      <PopularGames />
      <ContentCategories />
      <News />
      <CTA />
    </div>
  );
}