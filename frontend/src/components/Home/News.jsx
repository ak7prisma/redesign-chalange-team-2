import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiFilter } from 'react-icons/fi';

export default function News() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const newsData = [
    {
      tag: "PENGUMUMAN",
      tagColor: "bg-fuchsia-500/40 text-fuchsia-300 border-fuchsia-500/10",
      date: "02 FEBRUARI 2024",
      title: "Pemberitahuan Terkait Proses Verifikasi IGRS 2.0",
      desc: "Langkah-langkah terbaru dalam mempercepat durasi verifikasi konten bagi pengembang gim lokal dan internasional.",
      readTime: "4 MENIT BACA",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80"
    },
    {
      tag: "EDUKASI",
      tagColor: "bg-violet-500/40 text-violet-300 border-violet-500/10",
      date: "28 JANUARI 2024",
      title: "Panduan Cuplikan Konten: Standar Klasifikasi 2024",
      desc: "Bagaimana cara mengirimkan asset visual yang benar untuk memperlancar proses penilaian rating usia.",
      readTime: "7 MENIT BACA",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80"
    },
    {
      tag: "BERITA",
      tagColor: "bg-fuchsia-500/40 text-fuchsia-300 border-fuchsia-500/10",
      date: "20 JANUARI 2024",
      title: "Maklumat Pelayanan: Komitmen IGRS Terhadap Integritas",
      desc: "Pernyataan resmi mengenai standar etika dan kualitas pelayanan bagi seluruh stakeholder ekosistem gim.",
      readTime: "3 MENIT BACA",
      img: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=500&q=80"
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
        {/* Header */}
        <div className="flex justify-between items-center px-2">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Berita Terbaru
          </h2>
          <button className="flex items-center gap-2 border border-white/10 rounded-full px-5 py-2.5 text-xs font-bold tracking-wider text-gray-300 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all cursor-pointer">
            <FiFilter className="text-sm" />
            LIHAT SEMUA
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
              className="bg-white/5 border border-white/5 rounded-3xl overflow-hidden flex flex-col justify-between group hover:bg-white/10 hover:border-white/10 hover:scale-[1.02] transition-all duration-300 shadow-xl"
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
                  <p className="text-neutral-6 text-[10px] font-bold tracking-widest uppercase">
                    {news.date}
                  </p>
                  <h3 className="text-lg font-bold text-primary-5 leading-snug tracking-wide group-hover:text-primary-6 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-neutral-5\6 text-sm leading-relaxed line-clamp-3">
                    {news.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex items-center gap-2 text-neutral-5 text-[10px] font-bold tracking-wider select-none">
                  <FiClock className="text-xs" />
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