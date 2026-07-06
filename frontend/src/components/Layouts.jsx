import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri';
import Navbar from './Navbar';
import Footer from './Footer';

export function Layout({ children }) {
  return (
    <div className="bg-primary-1 bg-[url('/HomeBg.png')] bg-cover bg-top bg-no-repeat text-white min-h-screen font-sans overflow-hidden relative selection:bg-primary-4 selection:text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function RatingLayout({ children }) {
  return (
    <div className="bg-primary-1 bg-[url('/RatingBg.png')] bg-cover bg-top bg-no-repeat text-white min-h-screen font-sans overflow-hidden relative selection:bg-primary-4 selection:text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function GamesLayout({ children }) {
  return (
    <div className="bg-primary-1 bg-[url('/GamesBg.png')] bg-cover bg-top bg-no-repeat text-white min-h-screen font-sans overflow-hidden relative selection:bg-primary-4 selection:text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function GameLayout({ children }) {
  return (
    <div className="bg-primary-1 bg-[url('/DetailGameBg.png')] bg-cover bg-top bg-no-repeat text-white min-h-screen font-sans overflow-hidden relative selection:bg-primary-4 selection:text-white">
      <Navbar />
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 pt-6">
        <Link
          to="/games"
          className="inline-flex items-center gap-2 text-[#a7a2cb] font-semibold hover:text-white transition-colors duration-200 text-sm md:text-base"
        >
          <RiArrowLeftLine /> Kembali
        </Link>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}