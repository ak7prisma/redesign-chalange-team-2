import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiConfig } from '../config/api';
import { fetchGames } from '../api/gamesApi';

const ITEMS_PER_PAGE = 6;

export function useGamesFilter() {
  const [searchParams] = useSearchParams();
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedRating, setSelectedRating] = useState('Semua');
  const [sortOrder, setSortOrder] = useState('terbaru');
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let cancelled = false;

    async function loadGames() {
      if (!apiConfig.isEnabled) {
        setError('API belum diaktifkan. Set VITE_ENABLE_API=true di .env.local');
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchGames();
        if (!cancelled) setGames(data);
      } catch (err) {
        if (!cancelled) {
          setError(err.message ?? 'Gagal memuat data game');
          setGames([]);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    loadGames();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
    setCurrentPage(1);
  }, [searchParams]);

  const filteredGames = useMemo(() => {
    let result = [...games];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (g) =>
          g.title.toLowerCase().includes(q) ||
          g.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedRating !== 'Semua') {
      result = result.filter((g) => g.rating === selectedRating);
    }

    if (sortOrder === 'az') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === 'za') {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;
  }, [games, searchQuery, selectedRating, sortOrder]);

  const totalPages = Math.ceil(filteredGames.length / ITEMS_PER_PAGE);

  const paginatedGames = filteredGames.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    setCurrentPage(1);
  };

  const handleSortChange = (sort) => {
    setSortOrder(sort);
    setCurrentPage(1);
  };

  const toggleFilterPanel = () => setShowFilterPanel((v) => !v);

  return {
    searchQuery,
    selectedRating,
    sortOrder,
    showFilterPanel,
    currentPage,
    filteredGames,
    paginatedGames,
    totalPages,
    isLoading,
    error,
    handleSearchChange,
    handleRatingChange,
    handleSortChange,
    toggleFilterPanel,
    setCurrentPage,
  };
}