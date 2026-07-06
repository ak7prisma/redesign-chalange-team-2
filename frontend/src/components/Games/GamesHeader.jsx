import React from 'react';
import { RiFilter3Line, RiArrowUpDownLine } from 'react-icons/ri';

export default function GamesHeader() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary-5 via-primary-5 to-primary-3 bg-clip-text text-transparent">
          Pustaka Game Terdaftar
        </h1>
        <p className="text-neutral-5 text-sm md:text-base leading-relaxed">
          Telusuri koleksi game yang telah diklasifikasikan oleh Indonesian Game Rating System.
          Temukan konten yang sesuai dengan kategori usia keluarga Anda.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button className="flex items-center gap-2.5 px-6 py-3 rounded-lg bg-neutral-4/30 border border-white/10 hover:border-primary-4/50 text-neutral-5 hover:text-white transition-all duration-300 shadow-lg cursor-pointer">
          <RiFilter3Line className="w-5 h-5 text-primary-4" />
          <span className="font-semibold text-sm">Filter Kategori</span>
        </button>

        <button className="flex items-center gap-2.5 px-6 py-3 rounded-lg bg-neutral-4/30 border border-white/10 hover:border-primary-4/50 text-neutral-5 hover:text-white transition-all duration-300 shadow-lg cursor-pointer">
          <RiArrowUpDownLine className="w-5 h-5 text-primary-4" />
          <span className="font-semibold text-sm">Urutkan: Terbaru</span>
        </button>
      </div>
    </div>
  );
}