import React from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex flex-col items-center gap-4 pt-10">
      <div className="flex items-center gap-6">
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-neutral-5 hover:text-white hover:border-primary-4/50 disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-neutral-5 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
          aria-label="Halaman sebelumnya"
        >
          <RiArrowLeftSLine className="w-6 h-6" />
        </button>

        <div className="text-center">
          <span className="text-lg font-semibold tracking-wide text-primary-5">
            Halaman <span className="font-bold">{currentPage}</span> dari{' '}
            <span className="font-bold">{totalPages}</span>
          </span>
        </div>

        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-neutral-5 hover:text-white hover:border-primary-4/50 disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-neutral-5 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
          aria-label="Halaman selanjutnya"
        >
          <RiArrowRightSLine className="w-6 h-6" />
        </button>
      </div>

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
                  ? 'w-6 bg-primary-5'
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