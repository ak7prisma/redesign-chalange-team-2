import React from 'react';
import { motion } from 'framer-motion';

export default function PopularGames() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const gamesData = [
    {
      title: "Genshin Impact",
      desc: "Petualangan fantasi di dunia terbuka.",
      rating: "18+",
      badgeColor: "bg-red-600 shadow-[0_4px_12px_rgba(220,38,38,0.3)]",
      img: ""
    },
    {
      title: "Mobile Legends",
      desc: "MOBA strategi dengan pertarungan tim.",
      rating: "18+",
      badgeColor: "bg-red-600 shadow-[0_4px_12px_rgba(220,38,38,0.3)]",
      img: ""
    },
    {
      title: "Resident Evil",
      desc: "Horor bertahan hidup melawan zombie.",
      rating: "18+",
      badgeColor: "bg-red-600 shadow-[0_4px_12px_rgba(220,38,38,0.3)]",
      img: ""
    },
    {
      title: "Neko Michi",
      desc: "Petualangan ringan dengan karakter kucing.",
      rating: "3+",
      badgeColor: "bg-blue-500 shadow-[0_4px_12px_rgba(59,130,246,0.3)]",
      img: ""
    }
  ];

  return (
    <section className="relative max-w-[1366px] mx-auto z-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="space-y-10"
      >
        {/* Title */}
        <h2 className="text-4xl font-bold text-white tracking-tight pl-2">
          Gim Populer
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gamesData.map((game, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.25)] flex flex-col justify-between h-full hover:scale-[1.02] transition-transform duration-300 group"
            >
              {/* Card Content Wrapper */}
              <div>
                {/* Image Container */}
                <div className="relative w-full aspect-square rounded-[1.5rem] overflow-hidden bg-gray-100">
                  <img
                    src={game.img}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Details */}
                <div className="mt-5 px-1">
                  <h3 className="text-2xl font-bold text-[#0D0A14] tracking-tight line-clamp-1">
                    {game.title}
                  </h3>
                  <p className="text-[#6B6B7A] text-sm leading-relaxed mt-2 line-clamp-2">
                    {game.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 flex justify-between items-center px-1">
                <span className="text-[#A0A0B3] text-xs font-semibold cursor-pointer group-hover:text-primary-4 transition-colors">
                  Selengkapnya →
                </span>
                <span className={`text-white text-sm font-bold px-4 py-1.5 rounded-full select-none ${game.badgeColor}`}>
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