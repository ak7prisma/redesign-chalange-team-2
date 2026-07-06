const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();
const gameRoutes = require('./routes/gameRoutes');

const allowedOrigins = (process.env.CORS_ORIGINS ?? 'http://localhost:5173,http://localhost:5174,http://localhost:4173')
  .split(',')
  .map((o) => o.trim());

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Terlalu banyak request. Coba lagi dalam 15 menit.' },
});

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Limit API tercapai. Maksimal 60 request per menit.' },
});

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Origin tidak diizinkan'));
    }
  },
}));
app.use(express.json({ limit: '10kb' }));
app.use(globalLimiter);
app.use('/api', apiLimiter, gameRoutes);

app.use((err, _req, res, _next) => {
  if (err.message === 'Origin tidak diizinkan') {
    return res.status(403).json({ error: 'CORS: origin tidak diizinkan' });
  }
  res.status(500).json({ error: 'Terjadi kesalahan server' });
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));