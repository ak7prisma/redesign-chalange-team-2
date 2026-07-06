import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { MdOutlineGroups } from 'react-icons/md';

export default function DescriptionCard({ title, icon, body, checklist, updateText }) {
  const isCustomUpdate = !!updateText;
  
  // Resolve icon
  let IconComponent = null;
  if (icon === 'group') {
    IconComponent = MdOutlineGroups ;
  } else if (typeof icon !== 'string') {
    IconComponent = icon;
  }

  if (isCustomUpdate) {
    return (
      <div className="flex flex-col justify-between py-4 space-y-6">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-white flex items-center gap-3">
            {IconComponent && <IconComponent className="text-4xl text-primary-5" />}
            {title}
          </h3>
          <p className="text-neutral-6 text-lg md:text-[1.3rem] leading-relaxed font-normal tracking-wide">
            {body}
          </p>
        </div>

        {updateText && (
          <div className="bg-primary-6/10 border border-primary-5/40 rounded-3xl p-6 shadow-lg">
            <h4 className="text-lg font-bold text-primary-5 mb-2">Update Terkini:</h4>
            <p className="text-[#d1d5db] text-sm md:text-base leading-relaxed">
              {updateText}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-primary-2/20 border border-neutral-6/30 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-md">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-primary-5 flex items-center gap-2.5">
          {IconComponent && <IconComponent className="w-6 h-6" />}
          {title}
        </h3>
        <p className="text-neutral-6 text-sm md:text-lg leading-relaxed">
          {body}
        </p>
      </div>

      {checklist && checklist.length > 0 && (
        <div className="space-y-3 pt-4 border-t border-white/5 mt-4">
          {checklist.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <BiCheckCircle className="text-3xl" />
              <p className="text-neutral-6 text-xs md:text-lg">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}