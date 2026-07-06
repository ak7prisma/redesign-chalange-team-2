import React from 'react';

export default function DescriptionCard({ title, icon: Icon, body, checklist }) {
  return (
    <div className="bg-primary-2/20 border border-neutral-6/30 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-md">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-neutral-6 flex items-center gap-2.5">
          {Icon && <Icon className="w-6 h-6 text-primary-4" />}
          {title}
        </h3>
        <p className="text-neutral-5 text-sm md:text-lg leading-relaxed">
          {body}
        </p>
      </div>

      {checklist && checklist.length > 0 && (
        <div className="space-y-3 pt-4 border-t border-white/5 mt-4">
          {checklist.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <span className="text-primary-4 text-sm mt-0.5">✓</span>
              <p className="text-neutral-5 text-xs md:text-lg">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}