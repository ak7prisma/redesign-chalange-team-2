const express = require('express');
const rateLimit = require('express-rate-limit'); // Tambahkan ini
const app = express();
const gameRoutes = require('./routes/gameRoutes');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: "Waduh, kebanyakan request nih! Tunggu 15 menit lagi ya."
});

app.use(express.json());
app.use(limiter); 
app.use('/api', gameRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));