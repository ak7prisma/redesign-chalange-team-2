import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Rating from './pages/Rating';
import Games from './pages/Games';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';

function Layout({ children }) {
  return (
    <div className="bg-primary-1 bg-[url('/HomeBg.png')] bg-cover bg-top bg-no-repeat text-white min-h-screen font-sans overflow-hidden relative selection:bg-primary-4 selection:text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

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
            <Layout>
              <Rating />
            </Layout>
          }
        />
        <Route
          path="/games"
          element={
            <Layout>
              <Games />
            </Layout>
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