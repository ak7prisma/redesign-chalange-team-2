import React from 'react';

export default function Badge({ children, className = '', variant = 'primary' }) {
  const baseStyle = "inline-block font-medium transition-all duration-300";

  const variants = {
    primary: "px-6 py-3 rounded-full text-base border border-primary-5/70 bg-primary-4/10 text-primary-5",
    secondary: "px-6 py-3 rounded-full text-base border border-white/10 bg-white/5 text-neutral-5",
    outline: "px-4 py-1.5 rounded-md text-sm border border-white/20 text-neutral-6 bg-transparent",

    "rating-18": "px-3 py-1 rounded-lg text-xs font-black bg-red-600/90 text-white border border-red-500/20",
    "rating-15": "px-3 py-1 rounded-lg text-xs font-black bg-orange-500/90 text-white border border-orange-400/20",
    "rating-13": "px-3 py-1 rounded-lg text-xs font-black bg-amber-500/90 text-white border border-amber-400/20",
    "rating-7": "px-3 py-1 rounded-lg text-xs font-black bg-emerald-600/90 text-white border border-emerald-600/20",
    "rating-3": "px-3 py-1 rounded-lg text-xs font-black bg-blue-600/90 text-white border border-blue-500/20",

    tag: "px-3 py-1.5 rounded-lg text-xs bg-neutral-4/30 border border-white/5 text-neutral-5",
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <span className={`${baseStyle} ${selectedVariant} ${className}`}>
      {children}
    </span>
  );
}