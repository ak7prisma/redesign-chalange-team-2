import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { statusColorMap } from '../../data/ratingData';

export default function RatingSummary({ activeTab, current }) {
  return (
    <div className="lg:col-span-5 bg-[#1c182c]/80 border border-white/10 rounded-3xl p-6 md:p-8 space-y-6 backdrop-blur-xl shadow-2xl">
      
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
          㗊 Kategori Konten
        </h3>
        <p className="text-neutral-5 text-sm">
          Ringkasan kategori konten pada rating {activeTab}+
        </p>
      </div>

      <div className="border-t border-white/10" />

      <div className="space-y-4">
        {current.contentCategories.map((cat, idx) => {
          const statusColor = statusColorMap[cat.level] || "text-green-400";

          return (
            <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shadow-inner shrink-0">
                  {cat.icon || <FaQuestionCircle className="text-neutral-5 text-base" />}
                </span>
                <span className="text-neutral-5 text-sm font-medium">{cat.name}</span>
              </div>
              <span className={`text-[12px] font-semibold transition-colors duration-200 ${statusColor}`}>
                ✓ {cat.status}
              </span>
            </div>
          );
        })}
      </div>

      <div className={`flex items-start gap-3 border rounded-xl p-4 transition-all duration-300 ${current.warningStyles}`}>
        <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs shrink-0 mt-0.5 select-none transition-all duration-300 ${current.warningCheckColor}`}>
          ✓
        </span>
        <p className="text-xs leading-relaxed">
          {current.warningAlert}
        </p>
      </div>

    </div>
  );
}