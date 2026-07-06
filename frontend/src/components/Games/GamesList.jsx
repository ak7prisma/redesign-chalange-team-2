import React from 'react';
import { motion } from 'motion/react';
import GameCard from '../ui/GameCard';
import Pagination from '../ui/Pagination';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function GamesList({ games, currentPage, totalPages, onPageChange }) {
  return (
    <div className="space-y-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        key={currentPage}
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </motion.div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}