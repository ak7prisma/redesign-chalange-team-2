import React from 'react';
import { motion } from 'framer-motion';
import { FiClock } from 'react-icons/fi';
import { IoFilter } from 'react-icons/io5';
import { newsData } from '../../data/homeData';

export default function News() {
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
        {/* Header */}
        <div className="flex justify-between items-center px-2">
          <h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
            Berita Terbaru
          </h2>
          <button className="flex items-center gap-2 md:gap-4 text-xs font-bold tracking-widest text-neutral-5 hover:text-white transition-all cursor-pointer select-none">
            <span className="p-3 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <IoFilter className="text-base text-white" />
            </span>
            <span>LIHAT SEMUA</span>
          </button>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsData.map((news, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="bg-transparent border-2 border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between group hover:bg-white/10 hover:border-white/10 hover:scale-[1.02] transition-all duration-300 shadow-xl"
            >
              {/* Card Top: Image & Tag */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                  {/* Tag Badge */}
                  <span className={`absolute top-4 left-4 z-10 border rounded-md px-2.5 py-1 text-[10px] font-bold tracking-wider ${news.tagColor}`}>
                    {news.tag}
                  </span>
                  <img
                    src={news.img}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <p className="text-neutral-6 text-sm font-bold tracking-widest uppercase">
                    {news.date}
                  </p>
                  <h3 className="text-xl font-semibold text-primary-5 leading-snug tracking-wide group-hover:text-primary-6 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-neutral-5\6 text-lg leading-relaxed line-clamp-3">
                    {news.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex items-center gap-2 text-primary-5 text-[10px] font-semibold tracking-wider select-none">
                  <FiClock className="text-sm" />
                  {news.readTime}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}