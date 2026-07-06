import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RiFilter3Line, RiCloseLine } from 'react-icons/ri';
import SortDropdown from './SortDropdown';
import { BiSearch } from 'react-icons/bi';

const RATING_OPTIONS = ['Semua', '3+', '7+', '13+', '15+', '18+'];

export default function GamesHeader({
  searchQuery,
  onSearchChange,
  selectedRating,
  onRatingChange,
  sortOrder,
  onSortChange,
  showFilterPanel,
  onToggleFilter,
}) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center space-y-4 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary-5 via-primary-5 to-primary-3 bg-clip-text text-transparent">
          Pustaka Gim Terdaftar
        </h1>
        <p className="text-neutral-5 text-sm md:text-base leading-relaxed">
          Telusuri koleksi gim yang telah diklasifikasikan oleh Indonesian Game Rating System.
          Temukan konten yang sesuai dengan kategori usia keluarga Anda.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="space-y-4 max-w-4xl mx-auto w-full"
      >
        <div className="flex flex-col lg:flex-row gap-3 items-center w-full">
          <div className="flex-[2] flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:h-12 focus-within:border-primary-4/50 transition-colors duration-300">
            <BiSearch className="text-neutral-5 w-4 h-4" />
            <input
              type="text"
              placeholder="Cari gim berdasarkan nama atau genre..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder:text-neutral-5 outline-none text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-neutral-5 hover:text-white transition-colors"
              >
                <RiCloseLine className="text-lg" />
              </button>
            )}
          </div>

          <div className="flex-1 flex items-center gap-3 w-full lg:w-auto min-w-0 lg:min-w-[360px]">

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={onToggleFilter}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300 shadow-lg cursor-pointer flex-1 text-center text-xs md:text-sm font-semibold ${
                showFilterPanel
                  ? 'bg-primary-4/20 border-primary-4/60 text-white'
                  : 'bg-neutral-4/30 border-white/10 hover:border-primary-4/50 text-primary-5 hover:text-white'
              }`}
            >
              <RiFilter3Line className="w-4 h-4 shrink-0" />
              <span>Filter Rating</span>
              {selectedRating !== 'Semua' && (
                <span className="ml-1 px-2 py-0.5 text-[10px] rounded-full bg-primary-4 text-white font-bold">
                  {selectedRating}
                </span>
              )}
            </motion.button>

            <SortDropdown value={sortOrder} onChange={onSortChange} />
          </div>
        </div>

        <AnimatePresence>
          {showFilterPanel && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 pt-1 pb-2">
                {RATING_OPTIONS.map((opt) => (
                  <motion.button
                    key={opt}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onRatingChange(opt)}
                    className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold border transition-all duration-200 cursor-pointer ${
                      selectedRating === opt
                        ? 'bg-primary-4 border-primary-4 text-white shadow-[0_0_12px_rgba(139,92,246,0.4)]'
                        : 'bg-white/5 border-white/10 text-neutral-5 hover:border-primary-4/50 hover:text-white'
                    }`}
                  >
                    {opt}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}