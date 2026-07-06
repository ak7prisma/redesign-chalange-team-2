import React from 'react';
import GameCard from '../ui/GameCard';
import Pagination from '../ui/Pagination';

export default function GamesList({ games, currentPage, totalPages, onPageChange }) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}