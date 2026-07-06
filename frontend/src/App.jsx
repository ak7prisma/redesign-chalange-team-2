import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, RatingLayout, GameLayout } from './components/Layouts';

import Home from './pages/Home';
import About from './pages/About';
import Rating from './pages/Rating';
import Games from './pages/Games';
import GameDetail from './pages/GameDetail';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route
          path="/tentang"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/informasi-rating"
          element={
            <RatingLayout>
              <Rating />
            </RatingLayout>
          }
        />
        <Route
          path="/games"
          element={
            <GameLayout>
              <Games />
            </GameLayout>
          }
        />
        <Route
          path="/games/:id"
          element={
            <GameLayout>
              <GameDetail />
            </GameLayout>
          }
        />

        <Route
          path="/kontak"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Login />} />

        <Route
          path="*"
          element={
            <Layout>
              <div className="relative z-20 min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                  <h1 className="text-6xl font-bold text-white">404</h1>
                  <p className="text-neutral-5 text-lg">Halaman tidak ditemukan.</p>
                </div>
              </div>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}