import React from 'react';
import { motion } from 'framer-motion';
import { contentCategories } from '../../data/homeData';

export default function ContentCategories() {
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
        className="space-y-12"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
            Kategori <span className="text-primary-5">Konten</span>
          </h2>
          <p className="text-neutral-6 text-base md:text-lg mx-auto leading-relaxed">
            Berdasarkan Peraturan Menteri Kominfo No 2 Tahun 2024, terdapat 8 parameter utama penilaian konten dalam IGRS.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contentCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 border border-white/5 rounded-3xl p-6 flex flex-col gap-4 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-white/10 hover:border-white/10 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shadow-inner">
                {cat.icon}
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {cat.title}
                </h3>
                <p className="text-neutral-5 text-sm leading-relaxed font-medium">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}