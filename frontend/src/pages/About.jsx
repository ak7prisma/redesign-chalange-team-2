import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function About() {
  return (
    <div className="relative z-20 font-sans">
      <div className="max-w-[1366px] mx-auto px-3 md:px-7 pt-12 space-y-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-8"
        >
          <div>
            <span className="inline-block px-6 py-3 rounded-full border border-primary-5/70 bg-primary-4/10 text-primary-5 text-base font-medium">
              Tentang IGRS
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-[1.5rem] font-semibold text-white leading-relaxed max-w-4xl tracking-wide">
            Membangun Ekosistem Digital yang{' '}
            <span className="text-[#a855f7]">Aman dan Terpercaya</span>
          </h1>

          {/* Deskripsi */}
          <p className="text-neutral-6 text-lg md:text-[1.25rem] leading-relaxed max-w-[90%] font-light tracking-wide">
            Kami hadir untuk memberikan transparansi dan perlindungan bagi pemain
            game di Indonesia melalui klasifikasi konten yang akurat dan berbasis
            regulasi pemerintah.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <Link
              to="/games"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-[#6d28d9] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#8b5cf6] text-white text-lg font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(109,40,217,0.3)] hover:scale-[1.02]"
            >
              Daftar Game <FiArrowRight className="text-xl" />
            </Link>
            <Link
              to="/informasi-rating"
              className="inline-flex items-center justify-center px-12 py-5 rounded-2xl bg-[#1e1a2f]/80 border border-[#3b3554] hover:bg-[#2e2846] text-[#b3b0cb] text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
            >
              Pelajari Rating
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 pt-10 max-w-5xl">

            <div className="flex items-center gap-6">
              <div className="w-[4px] h-16 bg-white rounded-full opacity-90" />
              <div className="space-y-1">
                <p className="text-white font-bold text-2xl tracking-tight">5225+</p>
                <p className="text-[#9ca3af] text-sm font-semibold tracking-widest uppercase">
                  Total Gim Terdaftar
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-[4px] h-16 bg-white rounded-full opacity-90" />
              <div className="space-y-1">
                <p className="text-white font-bold text-2xl tracking-tight">3116+</p>
                <p className="text-[#9ca3af] text-sm font-semibold tracking-widest uppercase">
                  Penerbit Terdaftar
                </p>
              </div>
            </div>
          </div>
        </motion.div>

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
                <span className="text-[#c8a2ff]">Indonesian Game Rating System (IGRS)</span> adalah sistem klasifikasi permainan interaktif
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
      </div>
    </div>
  );
}