import React from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex flex-col items-center gap-4 pt-10">
      <div className="flex items-center gap-6">
        {/* Prev Button */}
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-5 hover:text-white hover:border-primary-4/50 disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-neutral-5 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
          aria-label="Halaman sebelumnya"
        >
          <RiArrowLeftSLine className="w-6 h-6" />
        </button>

        {/* Page Text */}
        <div className="text-center">
          <span className="text-sm font-semibold tracking-wide text-neutral-5">
            Halaman <span className="text-neutral-6 font-bold">{currentPage}</span> dari{' '}
            <span className="text-neutral-6 font-bold">{totalPages}</span>
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-5 hover:text-white hover:border-primary-4/50 disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-neutral-5 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
          aria-label="Halaman selanjutnya"
        >
          <RiArrowRightSLine className="w-6 h-6" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center gap-1.5 mt-2">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageNum = index + 1;
          const isActive = currentPage === pageNum;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-6 bg-gradient-to-r from-primary-4 to-primary-3'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Halaman ${pageNum}`}
            />
          );
        })}
      </div>
    </div>
  );
}