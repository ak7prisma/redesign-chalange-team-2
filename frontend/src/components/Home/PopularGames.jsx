import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoFilter } from 'react-icons/io5';
import { popularGamesData } from '../../data/homeExtraData';

export default function PopularGames() {
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
        className="space-y-10"
      >
        <div className="flex justify-between items-center px-2">
          <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight pl-2">
            Gim Populer
          </h2>
          <Link to="/games" className="flex items-center gap-2 md:gap-4 text-xs font-bold tracking-widest text-neutral-6 hover:text-white transition-all cursor-pointer select-none">
            <span className="p-3 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <IoFilter className="text-base text-white" />
            </span>
            <span>LIHAT SEMUA</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {popularGamesData.map((game, i) => (
            <motion.div
              key={i}
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
                    {game.desc}
                  </p>
                </div>
              </div>

              <div className="mt-4 md:mt-6 flex justify-between items-center px-1">
                <span className="text-[#A0A0B3] text-[9px] md:text-xs font-semibold cursor-pointer group-hover:text-primary-4 transition-colors">
                  Selengkapnya →
                </span>
                <span className={`text-white text-[9px] md:text-sm font-bold px-2.5 py-1 md:px-4 md:py-1.5 rounded-full select-none ${game.badgeColor}`}>
                  {game.rating}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}