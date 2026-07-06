import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  RiFilter3Line, 
  RiArrowUpDownLine, 
  RiArrowLeftSLine, 
  RiArrowRightSLine,
  RiArrowRightLine
} from 'react-icons/ri';

const gamesData = [
  {
    id: "cod-mobile",
    title: "Call of Duty: Mobile",
    rating: "18+",
    ratingColor: "bg-red-600/90 text-white border border-red-500/20",
    tags: ["Action", "Shooter"],
    img: "/codm_cover.png"
  },
  {
    id: "honkai-star-rail",
    title: "Honkai: Star Rail",
    rating: "13+",
    ratingColor: "bg-amber-500/90 text-white border border-amber-400/20",
    tags: ["RPG", "Strategy"],
    img: "/honkai_cover.png"
  },
  {
    id: "efootball",
    title: "eFootball™",
    rating: "3+",
    ratingColor: "bg-blue-600/90 text-white border border-blue-500/20",
    tags: ["Sports", "Simulation"],
    img: "/efootball_cover.png"
  },
  {
    id: "among-us",
    title: "Among Us",
    rating: "7+",
    ratingColor: "bg-emerald-600/90 text-white border border-emerald-500/20",
    tags: ["Social", "Survival"],
    img: "/amongus_cover.png"
  },
  {
    id: "the-sims-4",
    title: "The Sims 4",
    rating: "13+",
    ratingColor: "bg-amber-500/90 text-white border border-amber-400/20",
    tags: ["Simulation"],
    img: "/sims_cover.png"
  },
  {
    id: "gta-v",
    title: "Grand Theft Auto V",
    rating: "18+",
    ratingColor: "bg-red-600/90 text-white border border-red-500/20",
    tags: ["Action", "Open World"],
    img: "/gta_cover.png"
  }
];

export default function Games() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  return (
    <div className="relative z-20 min-h-screen text-neutral-6 font-sans">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 py-12 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary-5 via-primary-5 to-primary-3 bg-clip-text text-transparent">
            Pustaka Game Terdaftar
          </h1>
          <p className="text-neutral-5 text-sm md:text-base leading-relaxed">
            Telusuri koleksi game yang telah diklasifikasikan oleh Indonesian Game Rating System.
            Temukan konten yang sesuai dengan kategori usia keluarga Anda.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="flex items-center gap-2.5 px-6 py-3 rounded-lg bg-neutral-4/30 border border-white/10 hover:border-primary-4/50 text-neutral-5 hover:text-white transition-all duration-300 shadow-lg cursor-pointer">
            <RiFilter3Line className="w-5 h-5 text-primary-4" />
            <span className="font-semibold text-sm">Filter Kategori</span>
          </button>
          
          <button className="flex items-center gap-2.5 px-6 py-3 rounded-lg bg-neutral-4/30 border border-white/10 hover:border-primary-4/50 text-neutral-5 hover:text-white transition-all duration-300 shadow-lg cursor-pointer">
            <RiArrowUpDownLine className="w-5 h-5 text-primary-4" />
            <span className="font-semibold text-sm">Urutkan: Terbaru</span>
          </button>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {gamesData.map((game) => (
            <div 
              key={game.id}
              className="group relative flex flex-col justify-between rounded-[2rem] bg-gradient-to-b from-primary-2/20 to-primary-1/40 border border-white/5 shadow-2xl overflow-hidden hover:border-primary-4/30 hover:shadow-primary-4/5 transition-all duration-500"
            >
              {/* Main Card */}
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={game.img} 
                    alt={game.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Age Category Badge */}
                  <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-black rounded-lg shadow-lg ${game.ratingColor}`}>
                    {game.rating}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold tracking-wide text-neutral-6 group-hover:text-primary-4 transition-colors duration-300">
                    {game.title}
                  </h3>
                  
                  {/* Genre Tags */}
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1.5 rounded-lg bg-neutral-4/30 border border-white/5 text-neutral-5 text-xs font-medium cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 mt-auto">
                <Link 
                  to="/games/resident-evil"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-primary-3 to-primary-2 hover:from-primary-4 hover:to-primary-3 text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-primary-4/20 transition-all duration-300 group/btn cursor-pointer"
                >
                  <span>Detail Game</span>
                  <RiArrowRightLine className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col items-center gap-4 pt-10">
          <div className="flex items-center gap-6">
            {/* Prev Button */}
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-5 hover:text-white hover:border-primary-4/50 disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-neutral-5 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
            >
              <RiArrowLeftSLine className="w-6 h-6" />
            </button>

            {/* Pagination Text */}
            <div className="text-center">
              <span className="text-sm font-semibold tracking-wide text-neutral-5">
                Halaman <span className="text-neutral-6 font-bold">{currentPage}</span> dari <span className="text-neutral-6 font-bold">{totalPages}</span>
              </span>
            </div>

            {/* Next Button */}
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-5 hover:text-white hover:border-primary-4/50 disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-neutral-5 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
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
                  onClick={() => setCurrentPage(pageNum)}
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

      </div>
    </div>
  );
}