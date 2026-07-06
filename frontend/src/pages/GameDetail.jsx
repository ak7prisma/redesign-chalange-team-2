import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { gameDetailData, defaultGameDetail } from '../data/gameDetailData';
import GameDetailHero from '../components/GameDetail/GameDetailHero';
import GameDetailDescription from '../components/GameDetail/GameDetailDescription';
import GameDetailParentGuide from '../components/GameDetail/GameDetailParentGuide';
import GameDetailGallery from '../components/GameDetail/GameDetailGallery';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20
    }
  }
};

export default function GameDetail() {
  const { id } = useParams();
  const game = gameDetailData[id] || defaultGameDetail;

  return (
    <div className="relative z-20 min-h-screen text-neutral-6 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-[1366px] mx-auto px-4 md:px-8 pt-8 space-y-12"
      >
        <motion.div variants={itemVariants}>
          <GameDetailHero game={game} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <GameDetailDescription game={game} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <GameDetailParentGuide game={game} />
        </motion.div>
        <motion.div variants={itemVariants}>
          <GameDetailGallery game={game} />
        </motion.div>
      </motion.div>
    </div>
  );
}