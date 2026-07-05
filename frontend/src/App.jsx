import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="bg-[#0D0A14] bg-[url('/HomeBg.png')] bg-cover bg-top bg-no-repeat text-white min-h-screen font-sans overflow-x-hidden relative selection:bg-[#A259FF] selection:text-white">
      <Navbar />
      <Home />
    </div>
  );
}