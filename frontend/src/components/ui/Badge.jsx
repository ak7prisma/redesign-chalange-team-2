import React from 'react';

export default function Badge({ children, className = '', variant = 'primary' }) {
  const baseStyle = "inline-block px-6 py-3 rounded-full font-medium text-base transition-all duration-300";
  
  const variants = {
    primary: "border border-primary-5/70 bg-primary-4/10 text-primary-5",
    secondary: "border border-white/10 bg-white/5 text-neutral-5",
    outline: "border border-white/20 text-neutral-6 bg-transparent"
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <span className={`${baseStyle} ${selectedVariant} ${className}`}>
      {children}
    </span>
  );
}