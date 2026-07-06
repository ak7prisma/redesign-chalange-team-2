import React from 'react';
import { motion } from 'motion/react';
import { RiFilter3Line, RiArrowUpDownLine } from 'react-icons/ri';

export default function GamesHeader() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center space-y-4 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary-5 via-primary-5 to-primary-3 bg-clip-text text-transparent">
          Pustaka Game Terdaftar
        </h1>
        <p className="text-neutral-5 text-sm md:text-base leading-relaxed">
          Telusuri koleksi game yang telah diklasifikasikan oleh Indonesian Game Rating System.
          Temukan konten yang sesuai dengan kategori usia keluarga Anda.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="flex items-center justify-between gap-4 w-full max-w-xl mx-auto px-2"
      >
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-neutral-4/30 border border-white/10 hover:border-primary-4/50 text-primary-5 hover:text-white transition-all duration-300 shadow-lg cursor-pointer flex-1 text-center"
        >
          <RiFilter3Line className="w-5 h-5 shrink-0" />
          <span className="font-semibold text-xs md:text-sm">Filter Kategori</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-neutral-4/30 border border-white/10 hover:border-primary-4/50 text-primary-5 hover:text-white transition-all duration-300 shadow-lg cursor-pointer flex-1 text-center"
        >
          <RiArrowUpDownLine className="w-5 h-5 shrink-0" />
          <span className="font-semibold text-xs md:text-sm">Urutkan: Terbaru</span>
        </motion.button>
      </motion.div>
    </div>
  );
}