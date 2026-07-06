import React from 'react';
import Badge from '../ui/Badge';

export default function RatingDescription({ activeTab, current }) {
  return (
    <div className="lg:col-span-7 bg-[#1c182c]/80 border border-white/10 rounded-3xl p-6 md:p-10 space-y-8 backdrop-blur-xl shadow-2xl">
      
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className={`w-28 h-36 shrink-0 rounded-3xl ${current.logoBgColor} border border-white/10 flex flex-col overflow-hidden shadow-2xl`}>
          <div className={`flex-1 ${current.logoInnerColor} flex items-center justify-center rounded-t-3xl rounded-b-[1.8rem] px-2 py-4`}>
            <span className={`text-[2.5rem] font-extrabold tracking-tighter leading-none ${current.logoTextColor}`}>
              {activeTab}+
            </span>
          </div>
          <div className="h-10 flex items-center justify-center">
            <span className="text-white text-[15px] font-bold tracking-widest">
              IGRS
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <Badge className={current.badgeColor} variant="outline">
            ✓ {current.badge}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            {current.title}
          </h2>
          <p className="text-neutral-5 text-sm md:text-base leading-relaxed">
            {current.subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3.5 bg-[#2C7FEB]/10 border border-[#2C7FEB]/20 rounded-xl p-4">
        <span className="w-5 h-5 rounded-full bg-[#2C7FEB]/15 border border-[#2C7FEB]/20 flex items-center justify-center text-xs shrink-0 select-none">
          ✓
        </span>
        <p className="text-[#c8c5e0] text-sm font-medium leading-relaxed">
          {current.alertText}
        </p>
      </div>

      <div className="space-y-5">
        <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
          㗊 {current.criteriaTitle}
        </h3>
        <ul className="space-y-4">
          {current.criteriaList.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3.5">
              <span className="w-5 h-5 rounded-md border border-white/20 bg-white/5 flex items-center justify-center text-xs text-primary-5 mt-0.5 shrink-0 select-none">
                ✓
              </span>
              <p className="text-neutral-5 text-sm md:text-[14px] leading-relaxed">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}