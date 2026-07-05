import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-primary-1 bg-[url('/HomeBg.png')] bg-cover bg-top bg-no-repeat text-white min-h-screen font-sans overflow-hidden relative selection:bg-primary-4 selection:text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}