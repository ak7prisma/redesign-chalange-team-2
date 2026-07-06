import React from 'react';
import { motion } from 'motion/react';
import { useGamesFilter } from '../hooks/useGamesFilter';
import GamesHeader from '../components/Games/GamesHeader';
import GamesList from '../components/Games/GamesList';

export default function Games() {
  const {
    searchQuery,
    selectedRating,
    sortOrder,
    showFilterPanel,
    currentPage,
    filteredGames,
    paginatedGames,
    totalPages,
    handleSearchChange,
    handleRatingChange,
    handleSortChange,
    toggleFilterPanel,
    setCurrentPage,
  } = useGamesFilter();

  return (
    <div className="relative z-20 min-h-screen text-neutral-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-[1366px] mx-auto px-4 md:px-8 py-12 space-y-12"
      >
        <GamesHeader
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          selectedRating={selectedRating}
          onRatingChange={handleRatingChange}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
          showFilterPanel={showFilterPanel}
          onToggleFilter={toggleFilterPanel}
        />

        {filteredGames.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 space-y-4 text-center"
          >
            <span className="text-6xl">🎮</span>
            <h3 className="text-2xl font-bold text-white">Game tidak ditemukan</h3>
            <p className="text-neutral-5">Coba ubah kata kunci pencarian atau filter yang dipilih.</p>
          </motion.div>
        ) : (
          <GamesList
            games={paginatedGames}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </motion.div>
    </div>
  );
}