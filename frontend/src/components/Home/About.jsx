import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative max-w-[1200px] mx-auto px-8 py-24 z-20">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={fadeInUp}
        className="space-y-16"
      >
        {/* Title & Description */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tentang <span className="text-primary-4 bg-gradient-to-r from-primary-5 to-primary-4 bg-clip-text text-transparent">Kami</span>
          </h2>
          
          <div className="border-l-[3px] border-white/20 pl-6 space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide leading-snug">
              IGRS atau Klasifikasi Permainan Interaktif Elektronik <span className="text-primary-5">(KPIE)</span>
            </h3>
            <p className="text-neutral-5 max-w-4xl leading-relaxed text-base md:text-[1.05rem] font-normal">
              Indonesia Game Rating System (IGRS) adalah platform dari Kementerian Komunikasi dan Digital RI agar permainan digital di Indonesia lebih tepat sasaran.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <h4 className="text-5xl md:text-6xl font-bold text-primary-5 tracking-tight drop-shadow-[0_0_20px_rgba(215,180,255,0.2)]">
              5225
            </h4>
            <p className="text-neutral-5 text-md md:text-base font-base tracking-widest">
              Total gim yang terdaftar
            </p>
          </div>
          
          <div className="text-center space-y-2">
            <h4 className="text-5xl md:text-6xl font-bold text-primary-5 tracking-tight drop-shadow-[0_0_20px_rgba(215,180,255,0.2)]">
              3116
            </h4>
            <p className="text-neutral-5 text-sm md:text-base font-medium tracking-wide">
              Total penerbit gim yang terdaftar
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
