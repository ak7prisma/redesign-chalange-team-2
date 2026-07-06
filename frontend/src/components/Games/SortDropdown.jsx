import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RiArrowUpDownLine, RiCheckLine } from 'react-icons/ri';

const sortOptions = [
  { value: 'terbaru', label: 'Terbaru' },
  { value: 'az', label: 'A - Z' },
  { value: 'za', label: 'Z - A' },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = sortOptions.find((o) => o.value === value) || sortOptions[0];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (val) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative flex-1">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300 shadow-lg cursor-pointer text-xs md:text-sm font-semibold whitespace-nowrap flex-shrink-0 min-w-max ${
          open
            ? 'bg-primary-4/20 border-primary-4/60 text-white'
            : 'bg-neutral-4/30 border-white/10 hover:border-primary-4/50 text-primary-5 hover:text-white'
        }`}
      >
        <RiArrowUpDownLine className="w-4 h-4 shrink-0 truncate" />
        <span className="whitespace-nowrap">Urutkan: {selected.label}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute left-0 right-0 mt-2 z-50 rounded-xl overflow-hidden border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            style={{
              background: 'linear-gradient(160deg, #1e1438 0%, #130d26 100%)',
            }}
          >
            {sortOptions.map((opt) => (
              <li key={opt.value}>
                <button
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                    value === opt.value
                      ? 'text-white bg-primary-4/30'
                      : 'text-neutral-5 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>Urutkan: {opt.label}</span>
                  {value === opt.value && (
                    <RiCheckLine className="text-primary-5 text-base shrink-0" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}