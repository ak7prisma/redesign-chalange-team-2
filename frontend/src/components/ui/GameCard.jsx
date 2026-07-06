import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightLine } from 'react-icons/ri';
import Badge from '../ui/Badge';
import { motion } from 'motion/react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 25
    }
  }
};

export default function GameCard({ game }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative flex flex-col justify-between rounded-[2rem] bg-gradient-to-b from-primary-2/20 to-primary-1/40 border border-white/5 shadow-2xl overflow-hidden hover:border-primary-4/30 hover:shadow-primary-4/5 transition-all duration-500"
    >
      {/* Image */}
      <div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={game.img}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Age Rating Badge */}
          <span className="absolute top-4 right-4">
            <Badge variant={game.ratingVariant}>{game.rating}</Badge>
          </span>
        </div>

        {/* Content */}
        <div className="p-3 md:p-6 space-y-2 md:space-y-4">
          <h3 className="text-sm md:text-2xl font-bold tracking-wide text-neutral-6 group-hover:text-primary-4 transition-colors duration-300 line-clamp-1">
            {game.title}
          </h3>

          {/* Genre Tags */}
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {game.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="tag" className="text-[9px] md:text-xs px-1.5 py-0.5 md:px-3 md:py-1.5">{tag}</Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-3 md:p-6 pt-0 mt-auto">
        <Link
          to={`/games/${game.id}`}
          className="flex items-center justify-center gap-1.5 md:gap-2 w-full py-2 md:py-3.5 rounded-xl bg-gradient-to-r from-primary-4 to-primary-2 hover:from-primary-4 hover:to-primary-3 text-white font-bold text-[10px] md:text-sm tracking-wide shadow-lg hover:shadow-primary-4/20 transition-all duration-300 group/btn"
        >
          <span>Detail Game</span>
          <RiArrowRightLine className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}