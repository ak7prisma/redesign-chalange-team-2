import React from 'react';

export default function GameDetailGallery({ game }) {
  return (
    <div className="space-y-6 pt-10">
      <h2 className="text-2xl font-bold tracking-tight text-neutral-6">
        Galeri Cuplikan Gim
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(game.gallery ?? []).map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt || `${game.title} Screenshot ${idx + 1}`}
            className="w-full h-[180px] object-cover rounded-2xl border border-white/5 shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}