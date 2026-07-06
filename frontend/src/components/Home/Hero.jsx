import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { floatingIcons } from '../../data/homeExtraData';

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full h-[80vh] min-h-[520px] md:h-[85vh] md:min-h-[600px] flex flex-col justify-center items-center">
      {/* Floating Game */}
      <div className="absolute inset-0 pointer-events-none max-w-[1440px] mx-auto w-full">
        <div className="relative w-full h-full">
          {floatingIcons.map((icon) => (
            <motion.div
              key={icon.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: icon.id * 0.1, type: "spring", bounce: 0.3 }}
              className={`absolute bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center ${icon.className}`}
            >
              {icon.src ? (
                <img src={icon.src} alt={icon.alt} className="w-full h-full object-cover" />
              ) : (
                <span className="text-[10px] text-white/40 font-semibold tracking-wider uppercase text-center p-2">
                  {icon.alt}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Text Content & Search */}
      <div className="relative z-20 text-center flex flex-col items-center w-full px-4 -mt-10">
        <motion.h1 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-[4rem] lg:text-[4.5rem] font-semibold mb-4 leading-[1.15] tracking-tight px-2"
        >
          Panduan Rating untuk <br /> Gamer Indonesia
        </motion.h1>
        
        <motion.p 
          initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
          className="text-neutral-6 mb-7 md:mb-10 text-sm md:text-lg font-base tracking-widest px-4"
        >
          Temukan rating game yang sesuai untuk setiap pemain
        </motion.p>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="relative w-full max-w-[650px] flex items-center bg-white rounded-full h-[52px] md:h-[60px] shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
        >
          <input 
            type="text" 
            placeholder="Cari Game..."
            className="flex-1 h-full bg-transparent text-gray-800 py-3 pl-5 md:pl-8 pr-4 outline-none font-medium text-base md:text-lg placeholder:text-gray-400 rounded-l-full"
          />
          <button className="w-[60px] md:w-[75px] h-full shrink-0 bg-primary-4 hover:bg-primary-3 rounded-r-full flex items-center justify-center transition-colors cursor-pointer">
            <FiSearch className="text-white text-xl md:text-2xl" strokeWidth={2.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}