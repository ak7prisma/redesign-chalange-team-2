import React from 'react';
import { motion } from 'framer-motion';
import { FaSkull, FaGlassMartini, FaDiceFive } from 'react-icons/fa';
import { GiCrossedSwords } from 'react-icons/gi';
import { FiGlobe, FiDroplet, FiUser, FiMessageSquare } from 'react-icons/fi';

export default function ContentCategories() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const categories = [
    {
      icon: <FaSkull className="text-pink-400 text-xl" />,
      title: "Horor",
      desc: "Unsur ketakutan, ketegangan psikologis, dan elemen supranatural."
    },
    {
      icon: <GiCrossedSwords className="text-purple-400 text-xl" />,
      title: "Kekerasan",
      desc: "Penggunaan senjata, kontak fisik, dan visualisasi pertarungan."
    },
    {
      icon: <FiGlobe className="text-cyan-400 text-xl" />,
      title: "Interaksi Daring",
      desc: "Fitur chat, komunitas terbuka, dan transaksi dalam aplikasi."
    },
    {
      icon: <FiDroplet className="text-red-400 text-xl" />,
      title: "Darah & Mutilasi",
      desc: "Visualisasi luka, organ tubuh, dan efek darah realistis."
    },
    {
      icon: <FiUser className="text-emerald-400 text-xl" />,
      title: "Penampilan Tokoh",
      desc: "Desain karakter, pakaian, dan estetika visual permainan."
    },
    {
      icon: <FaGlassMartini className="text-indigo-400 text-xl" />,
      title: "Rokok & Alkohol",
      desc: "Referensi atau penggunaan zat adiktif dalam alur cerita."
    },
    {
      icon: <FiMessageSquare className="text-teal-400 text-xl" />,
      title: "Bahasa Kasar",
      desc: "Penggunaan kata-kata kasar, umpatan, atau istilah tidak pantas."
    },
    {
      icon: <FaDiceFive className="text-amber-400 text-xl" />,
      title: "Simulasi Judi",
      desc: "Elemen taruhan atau permainan yang menyerupai perjudian."
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Kategori Konten
          </h2>
          <p className="text-neutral-5 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            Berdasarkan Peraturan Menteri Kominfo No 2 Tahun 2024, terdapat 8 parameter utama penilaian konten dalam IGRS.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
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
                <p className="text-neutral-5 text-xs leading-relaxed font-normal">
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