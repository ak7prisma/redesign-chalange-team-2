import React from 'react';
import { useParams } from 'react-router-dom';
import { gameDetailData, defaultGameDetail } from '../data/gameDetailData';
import GameDetailHero from '../components/GameDetail/GameDetailHero';
import GameDetailDescription from '../components/GameDetail/GameDetailDescription';
import GameDetailParentGuide from '../components/GameDetail/GameDetailParentGuide';
import GameDetailGallery from '../components/GameDetail/GameDetailGallery';

export default function GameDetail() {
  const { id } = useParams();
  const game = gameDetailData[id] || defaultGameDetail;

  return (
    <div className="relative z-20 min-h-screen text-neutral-6 font-sans">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 pt-8 space-y-12">
        <GameDetailHero game={game} />
        <GameDetailDescription game={game} />
        <GameDetailParentGuide game={game} />
        <GameDetailGallery game={game} />
      </div>
    </div>
  );
}