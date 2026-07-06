const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const { validateGameId, validateListQuery } = require('../middleware/validate');

const prisma = new PrismaClient();

const gameInclude = {
  platforms: true,
  genres: true,
  rating: true,
};

router.get('/games', validateListQuery, async (req, res) => {
  try {
    const games = await prisma.game.findMany({
      take: req.listLimit,
      orderBy: { id: 'asc' },
      include: gameInclude,
    });
    res.json(games);
  } catch {
    res.status(500).json({ error: 'Gagal mengambil data' });
  }
});

router.get('/games/:id', validateGameId, async (req, res) => {
  try {
    const game = await prisma.game.findUnique({
      where: { id: req.validatedId },
      include: gameInclude,
    });

    if (!game) return res.status(404).json({ error: 'Game tidak ditemukan' });
    res.json(game);
  } catch {
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
});

module.exports = router;