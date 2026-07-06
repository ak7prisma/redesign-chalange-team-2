import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RiToolsFill, RiArrowLeftLine, RiTimeLine } from 'react-icons/ri';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.12 },
  }),
};

export default function Maintenance() {
  return (
    <div
      className="bg-primary-1 bg-[url('/HomeBg.png')] bg-cover bg-top bg-no-repeat text-white min-h-screen font-sans overflow-hidden relative selection:bg-primary-4 selection:text-white"
    >
      <Navbar />

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary-4/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full bg-primary-3/15 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-primary-5/10 blur-[120px]" />
      </div>

      <main className="relative z-20 pt-20 md:pt-28">

        <section className="relative w-full min-h-[70vh] flex flex-col justify-center items-center px-4 md:px-8 py-16 md:py-24">

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', type: 'spring', bounce: 0.25 }}
            className="relative mb-10 w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: [0, -8, 8, -4, 4, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
            >
              <RiToolsFill className="text-5xl md:text-6xl text-primary-5" />
            </motion.div>

            <span className="absolute inset-0 rounded-3xl animate-ping opacity-10 bg-primary-4" />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={1}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-4/20 border border-primary-4/30 text-primary-5 text-xs font-bold tracking-widest uppercase"
          >
            <RiTimeLine className="text-sm" />
            Segera Hadir
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={2}
            className="text-4xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] font-semibold text-center leading-[1.15] tracking-tight mb-5 px-2"
          >
            Sedang dalam <br />
            <span className="bg-gradient-to-r from-primary-5 via-purple-400 to-primary-3 bg-clip-text text-transparent">
              Pengembangan
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={3}
            className="text-neutral-6 text-sm md:text-lg font-base tracking-widest text-center max-w-xl mb-10 px-4"
          >
            Kami sedang menyempurnakan fitur ini agar dapat memberikan pengalaman terbaik untukmu.
            Nantikan kehadirannya!
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={4}
            className="flex flex-col sm:flex-row gap-3 items-center"
          >
            <Link
              to="/"
              className="px-8 py-3 rounded-full bg-primary-3 text-white font-semibold hover:bg-primary-4 transition-all duration-300 shadow-[0_0_20px_rgba(108,43,217,0.45)] hover:shadow-[0_0_28px_rgba(139,92,246,0.6)] text-sm md:text-base"
            >
              Jelajahi Beranda
            </Link>
            <Link
              to="/games"
              className="px-8 py-3 rounded-full border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-sm md:text-base"
            >
              Lihat Daftar Gim
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}