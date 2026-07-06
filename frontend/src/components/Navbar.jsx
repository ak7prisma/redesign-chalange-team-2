import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { navLinks } from '../data/navigationData';

export default function Navbar() {
  return (
    <nav className="relative z-50 w-full pt-6 pb-4">
      <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img src="/IGRS.png" alt="Logo IGRS" className="h-10 md:h-12 object-contain" />
        </Link>

        {/* Menu */}
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
                          style={{
                            boxShadow: '0 0 18px rgba(139, 92, 246, 0.35)',
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Label teks */}
                    <span
                      className={[
                        'relative z-10 transition-colors duration-200',
                        isActive
                          ? 'text-primary-5 font-semibold'
                          : 'text-gray-300 hover:text-primary-5',
                      ].join(' ')}
                    >
                      {label}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link
            to="/login"
            className="px-8 py-2.5 rounded-full bg-primary-3 text-white transition-all duration-300 shadow-[0_0_15px_rgba(108,43,217,0.4)] hover:bg-primary-4 hover:shadow-[0_0_24px_rgba(139,92,246,0.6)]"
          >
            Masuk
          </Link>
          <Link
            to="/daftar"
            className="text-gray-300 hover:text-white transition-colors duration-300 hidden sm:block"
          >
            Daftar
          </Link>
        </div>
      </div>
    </nav>
  );
}