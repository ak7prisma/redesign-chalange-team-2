import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaQuestionCircle } from 'react-icons/fa';
import { statusColorMap, ratingTheme } from '../../data/ratingData';
import { BiCategoryAlt } from 'react-icons/bi';
import { categoryConfig } from '../../data/homeData';
import { RiVerifiedBadgeFill } from 'react-icons/ri';

export default function RatingSummary({ activeTab, current }) {
  const theme = ratingTheme[activeTab] || ratingTheme['18'];

  return (
    <div className="relative lg:col-span-5 bg-white/5 border border-white/50 rounded-[2rem] p-8 md:p-10 backdrop-blur-xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="relative space-y-6"
        >
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
              <BiCategoryAlt className='text-2xl mt-0.5' /> Kategori Konten
            </h3>
            <p className="text-neutral-5 text-sm">
              Ringkasan kategori konten pada rating {activeTab}+
            </p>
          </div>

          <div className="border-t border-white/60" />

          <div className="space-y-4">
            {current.contentCategories.map((cat, idx) => {
              const statusColor = statusColorMap[cat.level] || "text-emerald-600";
              const config = categoryConfig.find(item => item.name === cat.name);
              const IconComponent = config ? config.Icon : null;
              const iconColor = config ? config.color : "text-neutral-5";

              return (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shadow-inner shrink-0">
                      {IconComponent ? (
                        <IconComponent className={`${iconColor} text-xl`} />
                      ) : (
                        <FaQuestionCircle className="text-neutral-5 text-base" />
                      )}
                    </span>
                    <span className="text-neutral-5 text-lg font-medium">{cat.name}</span>
                  </div>
                  <span className={`text-[12px] font-semibold transition-colors duration-200 ${statusColor}`}>
                    ✓ {cat.status}
                  </span>
                </div>
              );
            })}
          </div>

          <div className={`flex items-start gap-3 border rounded-xl p-4 transition-all duration-300 ${theme.warningStyles}`}>
            <RiVerifiedBadgeFill className='text-5xl mt-0.5' />
            <p className="text-xs leading-relaxed">
              {current.warningAlert}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}