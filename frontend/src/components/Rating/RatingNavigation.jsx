import React from 'react';
import Badge from '../ui/Badge';
import { ratingCategories } from '../../data/ratingData';

export default function RatingNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="space-y-4">
        <Badge variant="primary">
          Panduan Rating Usia IGRS
        </Badge>
        <h1 className="text-xl md:text-2xl font-semibold text-neutral-6">
          Pilih kategori usia untuk melihat penjelasan
        </h1>
      </div>

      <div className="flex items-center gap-3">
        {ratingCategories.map((cat) => {
          const isSelected = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`w-14 h-9 md:w-16 md:h-10 rounded-full font-bold text-lg md:text-xl transition-all duration-200 cursor-pointer flex items-center justify-center ${
                isSelected 
                  ? `${cat.activeStyle} scale-105` 
                  : 'bg-white text-gray-900 border border-transparent hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}