import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const floatingIcons = [
    // --- KIRI ---
    { id: 1, src: "", alt: "Genshin", className: "top-[5%] left-[-4%] w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-[2.5rem] -translate-x-[20%]" },
    { id: 2, src: "", alt: "Roblox", className: "top-[43%] left-[11%] w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[1.2rem] " },
    { id: 3, src: "", alt: "MLBB", className: "top-[53%] left-[-3%] w-[130px] h-[130px] md:w-[150px] md:h-[150px] rounded-[2rem] -translate-x-[30%]" },
    { id: 4, src: "", alt: "Neko Kiri", className: "bottom-[7%] left-[7%] w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-[1.5rem]" },
    { id: 5, src: "", alt: "Among Us", className: "bottom-[-5%] left-[-4%] w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-[2rem] -translate-x-[30%]" },
    
    // --- KANAN ---
    { id: 6, src: "", alt: "Outlast", className: "top-[2%] right-[-2%] w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[2rem] translate-x-[20%]" },
    { id: 7, src: "", alt: "PUBG", className: "top-[20%] right-[13%] w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-2xl" },
    { id: 8, src: "", alt: "CoC", className: "top-[32%] right-[0%] w-[220px] h-[220px] md:w-[270px] md:h-[270px] rounded-[3.5rem] translate-x-[35%]" },
    { id: 9, src: "", alt: "Neko Kanan", className: "bottom-[7%] right-[12%] w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-[1.2rem]" },
    { id: 10, src: "", alt: "Resident Evil", className: "bottom-[-13%] right-[0%] w-[140px] h-[140px] md:w-[170px] md:h-[170px] rounded-[2rem] translate-x-[20%]" },
  ];

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-center items-center">
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
          className="text-5xl md:text-[4rem] lg:text-[4.5rem] font-bold mb-4 leading-[1.1] tracking-tight"
        >
          Panduan Rating untuk <br /> Gamer Indonesia
        </motion.h1>
        
        <motion.p 
          initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
          className="text-neutral-5 mb-10 text-base md:text-lg font-medium tracking-wide"
        >
          Temukan rating game yang sesuai untuk setiap pemain
        </motion.p>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="relative w-full max-w-[650px] flex items-center bg-white rounded-full h-[60px] shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
        >
          <input 
            type="text" 
            placeholder="Cari Game..."
            className="flex-1 h-full bg-transparent text-gray-800 py-3 pl-8 pr-4 outline-none font-medium text-lg placeholder:text-gray-400 rounded-l-full"
          />
          <button className="w-[75px] h-[60px] shrink-0 bg-primary-4 hover:bg-primary-3 rounded-r-full flex items-center justify-center transition-colors cursor-pointer">
            <FiSearch className="text-white text-2xl" strokeWidth={2.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}