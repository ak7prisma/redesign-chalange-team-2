import React from 'react';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import Badge from '../ui/Badge';

export default function GameDetailHero({ game }) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
      
      <div className="w-[220px] h-[300px] sm:w-[280px] sm:h-[370px] md:w-[340px] md:h-[460px] shrink-0 rounded-3xl overflow-hidden bg-primary-1/40 border border-white/10 shadow-2xl">
        <img
          src={game.cover}
          alt={`${game.title} Cover`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 space-y-6 pt-4 text-center lg:text-left">

        <div className="flex justify-center lg:justify-start">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-3/30 bg-primary-2/40 text-primary-5 text-xs font-medium">
            <RiVerifiedBadgeFill className="w-4 h-4 text-primary-5" />
            Terverifikasi KOMDIGI
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-6 tracking-wide">
            {game.title}
          </h1>
          <p className="text-primary-5 text-lg md:text-xl font-medium">
            Developer: {game.developer}
          </p>

          {game.platforms && (
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
              {game.platforms.map((plat) => (
                <span key={plat} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm font-medium text-[#c8c5e0] tracking-wide">
                  {plat}
                </span>
              ))}
            </div>
          )}

          {game.releaseDate && (
            <p className="text-primary-5 font-semibold text-base md:text-lg pt-2">
              Rilis: {game.releaseDate}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5 pt-2 max-w-2xl mx-auto lg:mx-0">
          <div className="w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-r from-primary-4 to-primary-3 flex flex-col items-center justify-center shadow-lg p-2 leading-none">
            <span className="text-neutral-6 font-black text-2xl">{game.rating}</span>
            <span className="text-[9px] text-neutral-6 font-semibold tracking-wider mt-1 uppercase">{game.ageLabel}</span>
          </div>
          <div className="text-left space-y-1">
            <h4 className="text-neutral-6 font-bold text-lg">
              Rating Usia: {game.ageLabel}
            </h4>
            <p className="text-neutral-5 text-sm md:text-base leading-relaxed">
              {game.ratingDesc}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
          {game.tags.map((tag) => (
            <Badge key={tag} variant="tag" className="px-4 py-2 text-sm hover:bg-primary-3/30 hover:text-neutral-6 transition-all duration-300 cursor-default">
              {tag}
            </Badge>
          ))}
        </div>

      </div>
    </div>
  );
}