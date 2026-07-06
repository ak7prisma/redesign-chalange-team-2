import { useState, useEffect } from 'react';
import { apiConfig } from '../config/api';
import { fetchGameById } from '../api/gamesApi';

const EMPTY_GAME = {
  id: '',
  title: '',
  developer: '',
  cover: '',
  rating: '',
  ageLabel: '',
  ratingDesc: '',
  tags: [],
  platforms: [],
  releaseDate: '',
  descriptionSections: [],
  parentalTips: [],
  psychNote: '',
  gallery: [],
};

export function useGameDetail(id) {
  const [game, setGame] = useState(EMPTY_GAME);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!id) return;

      if (!apiConfig.isEnabled) {
        setError('API belum diaktifkan. Set VITE_ENABLE_API=true di .env.local');
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchGameById(id);
        if (!cancelled) setGame(data);
      } catch (err) {
        if (!cancelled) {
          setError(err.message ?? 'Gagal memuat detail game');
          setGame(EMPTY_GAME);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [id]);

  return { game, isLoading, error };
}