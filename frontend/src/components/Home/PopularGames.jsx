import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoFilter } from 'react-icons/io5';
import { apiConfig } from '../../config/api';
import { fetchGames } from '../../api/gamesApi';

const RATING_BADGE = {
  '3+':  'bg-blue-500 shadow-[0_4px_12px_rgba(59,130,246,0.3)]',
  '7+':  'bg-green-500 shadow-[0_4px_12px_rgba(34,197,94,0.3)]',
  '13+': 'bg-yellow-500 shadow-[0_4px_12px_rgba(234,179,8,0.3)]',
  '15+': 'bg-orange-500 shadow-[0_4px_12px_rgba(249,115,22,0.3)]',
  '18+': 'bg-red-600 shadow-[0_4px_12px_rgba(220,38,38,0.3)]',
};

export default function PopularGames() {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!apiConfig.isEnabled) {
        setError('API belum diaktifkan');
        setIsLoading(false);
        return;
      }
      try {
        const data = await fetchGames();
        if (!cancelled) setGames(data.slice(0, 4));
      } catch (err) {
        if (!cancelled) setError(err.message ?? 'Gagal memuat data');
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="relative max-w-[1366px] mx-auto z-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="space-y-10"
      >
        <div className="flex justify-between items-center px-2">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight pl-2">
            Gim Populer
          </h2>
          <Link
            to="/games"
            className="flex items-center gap-2 md:gap-4 text-xs font-bold tracking-widest text-neutral-6 hover:text-white transition-all cursor-pointer select-none"
          >
            <span className="p-3 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <IoFilter className="text-base text-white" />
            </span>
            <span>LIHAT SEMUA</span>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-2xl md:rounded-[2rem] p-2.5 md:p-4 animate-pulse h-72"
              />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 text-neutral-5">
            <span className="text-3xl">⚠️</span>
            <p className="mt-2 text-sm">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {games.map((game, i) => (
              <motion.div
                key={game.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl md:rounded-[2rem] p-2.5 md:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.25)] flex flex-col justify-between h-full hover:scale-[1.02] transition-transform duration-300 group"
              >
                <div>
                  <div className="relative w-full aspect-square rounded-xl md:rounded-[1.5rem] overflow-hidden bg-gray-100">
                    <img
                      src={game.img}
                      alt={game.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="mt-3 md:mt-5 px-1">
                    <h3 className="text-sm md:text-2xl font-bold text-[#0D0A14] tracking-tight line-clamp-1">
                      {game.title}
                    </h3>
                    <p className="text-[#6B6B7A] text-[10px] md:text-sm leading-relaxed mt-1 md:mt-2 line-clamp-2">
                      {game.tags?.join(', ') || '—'}
                    </p>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 flex justify-between items-center px-1">
                  <Link
                    to={`/games/${game.id}`}
                    className="text-[#A0A0B3] text-[9px] md:text-xs font-semibold cursor-pointer group-hover:text-primary-4 transition-colors"
                  >
                    Selengkapnya →
                  </Link>
                  <span
                    className={`text-white text-[9px] md:text-sm font-bold px-2.5 py-1 md:px-4 md:py-1.5 rounded-full select-none ${RATING_BADGE[game.rating] ?? RATING_BADGE['13+']}`}
                  >
                    {game.rating}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}