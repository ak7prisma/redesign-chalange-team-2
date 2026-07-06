const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/games', async (req, res) => {
  try {
    const games = await prisma.game.findMany({
      include: {
        platforms: true,
        genres: true,
        rating: true
      }
    });
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil data" });
  }
});

router.get('/games/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const game = await prisma.game.findUnique({
      where: { id: Number(id) },
      include: {
        platforms: true,
        genres: true,
        rating: true
      }
    });
    
    if (!game) return res.status(404).json({ error: "Game tidak ditemukan" });
    res.json(game);
  } catch (error) {
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
});

module.exports = router;