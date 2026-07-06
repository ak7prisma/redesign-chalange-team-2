import React from 'react';
import { motion } from 'motion/react';
import { ratingCategories, ratingTheme } from '../../data/ratingData';

export default function RatingNavigation({ activeTab, setActiveTab }) {
  const theme = ratingTheme[activeTab] || ratingTheme['18'];

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="space-y-4">
        <motion.span
          layout
          className={`inline-block px-6 py-3 rounded-full font-bold text-base transition-all duration-300 select-none ${theme.navCls}`}
        >
          Panduan Rating Usia IGRS
        </motion.span>
        <h1 className="text-xl md:text-2xl font-semibold text-neutral-6">
          Pilih kategori usia untuk melihat penjelasan
        </h1>
      </div>

      <div className="flex items-center gap-3">
        {ratingCategories.map((cat) => {
          const isSelected = activeTab === cat.id;
          const catTheme = ratingTheme[cat.id];
          return (
            <motion.button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative w-14 h-9 md:w-16 md:h-8 rounded-xl font-bold text-lg md:text-xl transition-all duration-200 cursor-pointer flex items-center justify-center overflow-hidden border border-transparent ${
                isSelected
                  ? ''
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              {isSelected && (
                <motion.span
                  layoutId="active-rating-tab"
                  className={`absolute inset-0 ${catTheme.navCls} flex items-center justify-center`}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
              <span className={`relative z-10 ${isSelected ? 'text-white' : 'text-gray-900'} ${cat.id === '13' && isSelected ? 'text-gray-900' : ''}`}>
                {cat.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}