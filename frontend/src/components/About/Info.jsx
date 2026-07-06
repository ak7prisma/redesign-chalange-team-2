import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function AboutInfo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
      className="space-y-8 pt-16"
    >
      <h2 className="text-3xl md:text-[2.2rem] font-semibold text-white tracking-wide">
        Apa itu IGRS?
      </h2>

      <div className="relative w-full rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative space-y-6 text-[#d1d5db] text-lg md:text-[1.2rem] leading-relaxed font-light">
          <p className="text-white font-semibold text-xl leading-relaxed">
            <span className="text-primary-5 font-bold">Indonesian Game Rating System (IGRS)</span> adalah sistem klasifikasi permainan interaktif
            elektronik berdasarkan kelompok usia pengguna di Indonesia.
          </p>
          <p>
            IGRS diatur melalui Peraturan Menteri Komunikasi dan Digital Republik Indonesia (dahulu
            Komunikasi dan Informatika) No. 2 Tahun 2024 tentang Klasifikasi Permainan Interaktif
            Elektronik (KPIE).
          </p>
          <p>
            Tujuan utamanya adalah untuk membantu orang tua dan pengguna dalam memilih produk
            permainan yang tepat sesuai dengan kematangan psikologis dan konten yang disajikan.
          </p>
        </div>
      </div>
    </motion.div>
  );
}