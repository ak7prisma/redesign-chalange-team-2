import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { navLinks } from '../data/navigationData';
import { RiHome4Line, RiInformationLine, RiBarChartLine, RiHeadphoneLine, RiUserAddLine, RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const navIcons = {
  '/': RiHome4Line,
  '/tentang': RiInformationLine,
  '/informasi-rating': RiBarChartLine,
  '/konsultasi-adiktif': RiHeadphoneLine,
};

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      <motion.nav
        initial={location.pathname === '/' ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-gradient-to-r from-primary-5/50 via-primary-2/30 to-primary-2/30 border-b border-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-4 md:py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* Mobile */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setDrawerOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Buka menu"
            >
              <RiMenu3Line className="text-xl" />
            </button>
            <Link to="/" className="flex items-center cursor-pointer">
              <span className="text-white font-bold text-lg tracking-wider">IGRS</span>
            </Link>
          </div>

          {/* Desktop: Logo */}
          <Link to="/" className="hidden lg:flex items-center cursor-pointer">
            <img src="/IGRS.png" alt="Logo IGRS" className="h-10 md:h-12 object-contain" />
          </Link>

          {/* Desktop: Menu */}
          <ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className="relative block px-4 py-2 rounded-full outline-none"
                >
                  {({ isActive }) => (
                    <>
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"
                            style={{ boxShadow: '0 0 18px rgba(139, 92, 246, 0.35)' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </AnimatePresence>
                      <span className={[
                        'relative z-10 transition-colors duration-200',
                        isActive ? 'text-primary-5 font-semibold' : 'text-gray-300 hover:text-primary-5',
                      ].join(' ')}>
                        {label}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3 text-sm font-medium">
            <Link
              to="/login-notfound"
              className="px-5 py-2 md:px-8 md:py-2.5 rounded-full bg-primary-3 text-white transition-all duration-300 shadow-[0_0_15px_rgba(108,43,217,0.4)] hover:bg-primary-4 hover:shadow-[0_0_24px_rgba(139,92,246,0.6)] text-sm font-semibold"
            >
              Masuk
            </Link>
            <Link
              to="/login-notfound"
              className="text-gray-300 hover:text-white transition-colors duration-300 hidden lg:block"
            >
              Daftar
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed top-0 left-0 h-full w-[75vw] max-w-[300px] z-[100] lg:hidden flex flex-col"
              style={{
                background: 'linear-gradient(160deg, #1a1030 0%, #120d24 60%, #0e0a1c 100%)',
                borderRight: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 pt-8 pb-6">
                <span className="text-primary-5 font-bold text-xl tracking-wide">IGRS Menu</span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Tutup menu"
                >
                  <RiCloseLine className="text-lg" />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                {navLinks.map(({ to, label }) => {
                  const Icon = navIcons[to] || RiHome4Line;
                  return (
                    <NavLink
                      key={to}
                      to={to}
                      end={to === '/'}
                      className={({ isActive }) =>
                        `flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 text-base font-medium ${
                          isActive
                            ? 'bg-white/10 text-white border border-white/10'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <Icon className={`text-xl shrink-0 ${isActive ? 'text-primary-5' : 'text-gray-500'}`} />
                          <span>{label}</span>
                        </>
                      )}
                    </NavLink>
                  );
                })}

                {/* Divider */}
                <div className="border-t border-white/8 my-4" />

                {/* Daftar link */}
                <NavLink
                  to="/login-notfound"
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 text-base font-medium ${
                      isActive
                        ? 'bg-white/10 text-white border border-white/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <RiUserAddLine className={`text-xl shrink-0 ${isActive ? 'text-primary-5' : 'text-gray-500'}`} />
                      <span>Daftar</span>
                    </>
                  )}
                </NavLink>
              </nav>

              {/* Drawer Footer */}
              <div className="px-6 py-6">
                <Link
                  to="/login-notfound"
                  className="block w-full text-center py-3 rounded-full bg-primary-3 text-white font-semibold hover:bg-primary-4 transition-all duration-200 shadow-[0_0_15px_rgba(108,43,217,0.3)]"
                >
                  Masuk
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}