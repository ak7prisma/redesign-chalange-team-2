import React from 'react';
import { FiGlobe, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer 
      className="relative z-20 w-full pt-28 pb-10 mt-20"
      style={{
        background: 'linear-gradient(to top, #0D0D18 0%, rgba(68, 68, 126, 0) 100%)'
      }}
    >
      <div className="max-w-[1366px] mx-auto px-8">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Socials */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white tracking-wide">
              IGRS
            </h2>
            <p className="text-neutral-5 text-sm leading-relaxed max-w-[280px]">
              Lembaga klasifikasi resmi di bawah naungan Direktorat Jenderal Ekosistem Digital.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <FiGlobe className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <FiMail className="text-lg" />
              </a>
            </div>
          </div>

          {/* Tautan Cepat */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-primary-5 tracking-widest uppercase">
              Tautan Cepat
            </h4>
            <ul className="space-y-4 text-sm text-neutral-5">
              <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Informasi Rating</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog & Berita</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legalitas */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-primary-5 tracking-widest uppercase">
              Legalitas
            </h4>
            <ul className="space-y-4 text-sm text-neutral-5">
              <li><a href="#" className="hover:text-white transition-colors">Syarat dan Ketentuan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maklumat Pelayanan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-primary-5 tracking-widest uppercase">
              Kontak
            </h4>
            <ul className="space-y-4 text-sm text-neutral-5 leading-relaxed">
              <li>
                Jl. Medan Merdeka Barat No.9,<br />
                Gambir, Jakarta Pusat, 10110
              </li>
              <li>
                Email: <a href="mailto:helpdesk@igrs.id" className="hover:text-white transition-colors">helpdesk@igrs.id</a>
              </li>
              <li>
                Telp: +62 811 806 860
              </li>
            </ul>
          </div>
          
        </div>

        {/* Footer Bottom Copyright */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-neutral-5 text-xs tracking-wider">
            © IGRS 2026 - Direktorat Jenderal Ekosistem Digital | Kementerian Komunikasi dan Digital RI
          </p>
        </div>
      </div>
    </footer>
  );
}