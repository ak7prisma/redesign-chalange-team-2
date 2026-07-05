import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative max-w-[1366px] mx-auto z-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] py-16 px-8 md:py-20 md:px-16 text-center shadow-2xl overflow-hidden"
      >
        {/* Glow Effects inside card */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(162,89,255,0.15)_0%,transparent_75%)] pointer-events-none z-0" />

        <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Siap Daftarkan Game Anda?
          </h2>
          
          <p className="text-neutral-5 text-sm md:text-base font-normal leading-relaxed max-w-2xl mx-auto tracking-wide">
            Gabung bersama ribuan pengembang game lainnya untuk membangun ekosistem digital Indonesia yang aman dan mengedukasi.
          </p>

          <div className="pt-4">
            <button className="bg-[#E2E0FF] hover:bg-white text-[#0D0A14] font-bold px-12 py-4.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:scale-105 transition-all text-lg cursor-pointer">
              Mulai Sekarang
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}