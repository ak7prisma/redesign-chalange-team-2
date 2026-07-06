import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Badge from '../ui/Badge';
import { IoCheckboxOutline } from 'react-icons/io5';
import { MdAppShortcut } from 'react-icons/md';
import { BiCategoryAlt } from 'react-icons/bi';
import { ratingTheme } from '../../data/ratingData';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

export default function RatingDescription({ activeTab, current }) {
  const theme = ratingTheme[activeTab] || ratingTheme['18'];

  return (
    <div className="relative lg:col-span-7 bg-white/5 border border-white/50 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="relative space-y-8"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Rating Logo */}
            <div className="w-[120px] h-[150px] shrink-0 rounded-[1.5rem] bg-[#0c0a12] border border-white/10 p-2 flex flex-col justify-between shadow-2xl">
              <div className={`flex-1 flex items-center justify-center rounded-[1rem] ${theme.logoBg}`}>
                <span className={`text-[2.2rem] font-black tracking-tighter leading-none ${theme.logoText}`}>
                  {activeTab}+
                </span>
              </div>
              <div className="h-8 flex items-center justify-center">
                <span className="text-white text-lg font-bold tracking-widest uppercase">
                  IGRS
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider select-none ${theme.badgeCls}`}>
                <IoCheckboxOutline className="text-xl" />
                {current.badge}
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                {current.title}
              </h2>
              <p className="text-neutral-6 text-sm md:text-base leading-relaxed">
                {current.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-[#2C7FEB]/10 border border-white/50 rounded-xl p-4">
            <RiVerifiedBadgeFill className='text-2xl mt-0.5' />
            <p className="text-[#c8c5e0] text-sm font-medium leading-relaxed">
              {current.alertText}
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg md:text-xl font-bold text-white tracking-wide flex items-center gap-2">
              <BiCategoryAlt className='text-2xl mt-0.5' /> {current.criteriaTitle}
            </h3>
            <ul className="space-y-4">
              {current.criteriaList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-neutral-6">
                  <IoCheckboxOutline className="text-xl shrink-0 mt-0.5" />
                  <p className="text-sm md:text-[14px] leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}