import React from 'react';

export default function Navbar() {
  return (
    <nav className="relative z-50 w-full pt-6 pb-4">
      <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer">
          <img src="/IGRS.png" alt="Logo IGRS" className="h-10 md:h-12 object-contain" />
        </div>
        
        {/* Menu Links */}
        <ul className="hidden lg:flex items-center gap-10 text-gray-200 text-sm font-medium">
          <li className="text-white font-semibold cursor-pointer">Beranda</li>
          <li className="hover:text-white cursor-pointer transition-colors">Tentang</li>
          <li className="hover:text-white cursor-pointer transition-colors">Informasi Rating</li>
          <li className="hover:text-white cursor-pointer transition-colors">Konsultasi Adiktif</li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <button className="px-8 py-2.5 rounded-full bg-primary-3 text-white hover:bg-primary-4 transition-all shadow-[0_0_15px_rgba(108,43,217,0.4)]">
            Masuk
          </button>
          <button className="text-gray-200 hover:text-white transition-all hidden sm:block">
            Daftar
          </button>
        </div>
      </div>
    </nav>
  );
}