import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '', 
  icon: Icon
}) {
  const baseStyle = "inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-lg";

  const variants = {
    primary: "bg-gradient-to-r from-primary-3 to-primary-2 hover:from-primary-4 hover:to-primary-3 text-white shadow-primary-3/20",
    secondary: "bg-[#1e1a2f]/80 border border-[#3b3554] hover:bg-[#2e2846] text-[#b3b0cb] shadow-black/10",
    outline: "border border-white/20 text-neutral-6 hover:bg-white/5 bg-transparent"
  };

  const selectedVariant = variants[variant] || variants.primary;
  const combinedClasses = `${baseStyle} ${selectedVariant} ${className}`;

  const renderContent = () => (
    <>
      {children}
      {Icon && <Icon className="text-xl" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {renderContent()}
    </button>
  );
}