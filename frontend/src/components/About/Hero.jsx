import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function AboutHero() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="space-y-8"
    >
      <div>
        <Badge variant="primary">
          Tentang IGRS
        </Badge>
      </div>

      <h1 className="text-3xl md:text-4xl font-base text-white leading-relaxed">
        Membangun Ekosistem Digital yang{' '}
        <span className="text-primary-4">Aman dan Terpercaya</span>
      </h1>

      <p className="text-neutral-6 text-lg md:text-2xl leading-relaxed max-w-[90%] font-light tracking-wide">
        Kami hadir untuk memberikan transparansi dan perlindungan bagi pemain
        gim di Indonesia melalui klasifikasi konten yang akurat dan berbasis
        regulasi pemerintah.
      </p>

      <div className="flex flex-wrap items-center gap-6 pt-4">
        <Button 
          to="/games" 
          variant="primary" 
          icon={FiArrowRight}
        >
          Daftar Gim
        </Button>
        
        <Button 
          to="/informasi-rating" 
          variant="secondary"
        >
          Pelajari Rating
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 pt-10 max-w-5xl">
        <div className="flex items-center gap-6">
          <div className="w-[4px] h-16 bg-white rounded-full opacity-90" />
          <div className="space-y-1">
            <p className="text-white font-bold text-2xl tracking-tight">5225+</p>
            <p className="text-[#9ca3af] text-sm font-semibold tracking-widest uppercase">
              Total Gim Terdaftar
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-[4px] h-16 bg-white rounded-full opacity-90" />
          <div className="space-y-1">
            <p className="text-white font-bold text-2xl tracking-tight">3116+</p>
            <p className="text-[#9ca3af] text-sm font-semibold tracking-widest uppercase">
              Penerbit Terdaftar
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}