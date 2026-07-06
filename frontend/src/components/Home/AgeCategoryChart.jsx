import React from 'react';
import { motion } from 'framer-motion';
import { chartData } from '../../data/homeData';

export default function AgeCategoryChart() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative max-w-[1366px] mx-auto z-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(162,89,255,0.08)_0%,transparent_65%)] pointer-events-none z-0" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="space-y-5"
      >
        <div className="text-center space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Jumlah Gim Berdasarkan
          </h3>
          <h4 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-6 to-primary-5 bg-clip-text text-transparent tracking-tight">
            Kategori Usia
          </h4>
          <p className="text-neutral-6 text-sm md:text-base font-normal tracking-wide">
            Ribuan game telah diklasifikasikan berdasarkan usia
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/80 rounded-[2.5rem] md:rounded-[5rem] p-5 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="space-y-12">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <span className="w-12 md:w-16 text-right font-bold text-xl md:text-3xl text-white select-none">
                  {item.label}
                </span>

                <div className="flex-1 flex items-center gap-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                    className="h-10 bg-gradient-to-r from-primary-6 to-primary-4 rounded-xl shadow-[0_0_15px_rgba(162,89,255,0.25)]"
                  />
                  <span className="text-neutral-5 text-sm md:text-lg font-semibold select-none whitespace-nowrap">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between pl-12 md:pl-22 pr-0 md:pr-22 mt-6 md:mt-8 text-sm md:text-lg font-semibold text-neutral-5 select-none border-t border-white/5 pt-4">
            <span>0</span>
            <span>1000</span>
            <span>2000</span>
            <span>3000</span>
            <span>4000</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}