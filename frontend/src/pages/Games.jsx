import React, { useState } from 'react';
import { gamesData } from '../data/gamesData';
import GamesHeader from '../components/Games/GamesHeader';
import GamesList from '../components/Games/GamesList';

const ITEMS_PER_PAGE = 6;

export default function Games() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(gamesData.length / ITEMS_PER_PAGE);

  const paginatedGames = gamesData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="relative z-20 min-h-screen text-neutral-6 font-sans">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 py-12 space-y-12">
        <GamesHeader />
        <GamesList
          games={paginatedGames}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}