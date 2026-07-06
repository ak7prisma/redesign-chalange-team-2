import React from 'react';
import { RiCompass3Line, RiFilmLine, RiTimeLine, RiLockPasswordLine, RiChat3Line } from 'react-icons/ri';

export const gameDetailData = {
  'resident-evil': {
    id: 'resident-evil',
    title: 'Resident Evil',
    developer: 'Capcom',
    cover: '/re_cover.png',
    rating: '18+',
    ageLabel: 'Remaja',
    ratingDesc: 'Bukan untuk anak-anak. Mengandung kekerasan ekstrem, darah, horor psikologis, dan bahasa kasar.',
    tags: ['Survival Horror', 'Single Player', 'Story-Rich', 'Third-Person'],

    descriptionSections: [
      {
        title: 'Misteri Desa Terpencil',
        icon: RiCompass3Line,
        body: 'Masuki dunia penuh teror biologis yang dikembangkan oleh Umbrella Corporation. Jelajahi lokasi-lokasi ikonik seperti Raccoon City, Spencer Mansion, dan desa terpencil. Atasi teka-teki, kelola persediaan terbatas, dan bertahan hidup dari makhluk mengerikan yang mengintai di setiap sudut.',
        checklist: [
          'Hadapi musuh ikonik: Zombie, Licker, Nemesis, dan berbagai B.O.W. (Bio Organic Weapon).',
          'Kelola amunisi, item penyembuh, dan kunci dengan bijak untuk bertahan hidup.',
        ],
        image: '/re_gameplay_1.png',
      },
      {
        title: 'Cerita Menegangkan',
        icon: RiFilmLine,
        body: 'Sebuah perusahaan farmasi raksasa, Umbrella Corporation, menyebarkan virus mematikan yang mengubah manusia menjadi monster mengerikan. Hanya segelintir yang bisa mengungkap kebenaran dan menghentikan kehancuran ini sebelum terlambat.',
        checklist: [
          'Umbrella Corporation menciptakan T-Virus yang mengubah manusia menjadi zombie.',
          'Ungkap konspirasi global dan selamatkan dunia dari kehancuran biologis total.',
        ],
        image: '/re_gameplay_2.png',
      },
    ],

    parentalTips: [
      {
        icon: RiTimeLine,
        title: 'Atur Waktu Layar',
        desc: 'Batas waktu bermain hingga 1-2 jam per sesi. Pastikan anak memiliki waktu istirahat yang cukup dan aktivitas lainnya.',
      },
      {
        icon: RiLockPasswordLine,
        title: 'Batas Pembayaran',
        desc: 'Gim ini mengandung kekerasan, darah, dan adegan menegangkan. Pastikan sesuai dengan usia dan kedewasaan anak sebelum dibelikan.',
      },
      {
        icon: RiChat3Line,
        title: 'Pantau Aktivitas Bermain',
        desc: 'Dampingi anak saat bermain dan ajak berdiskusi tentang konten gim. Dorong komunikasi agar anak merasa nyaman berbagi.',
      },
    ],

    psychNote: 'Gim horor seperti Resident Evil dapat memicu ketegangan, rasa takut, atau mimpi buruk pada beberapa pemain, terutama anak-anak dan remaja. Batasi durasi bermain, pastikan suasana bermain nyaman, dan ajarkan cara mengelola rasa takut dengan sehat.',

    gallery: [
      { src: '/re_gallery_1.png', alt: 'Resident Evil Screenshot 1' },
      { src: '/re_gallery_2.png', alt: 'Resident Evil Screenshot 2' },
      { src: '/re_gallery_3.png', alt: 'Resident Evil Screenshot 3' },
    ],
  },

  'cod-mobile': {
    id: 'cod-mobile',
    title: 'Call of Duty: Mobile',
    developer: 'TiMi Studio Group',
    cover: '/codm_cover.png',
    rating: '18+',
    ageLabel: 'Remaja',
    ratingDesc: 'Mengandung pertempuran militer realistis, tembak-menembak, dan konten kekerasan intens.',
    tags: ['Action', 'Shooter', 'Multiplayer', 'Battle Royale'],

    descriptionSections: [
      {
        title: 'Pertempuran Epik di Genggaman',
        icon: RiCompass3Line,
        body: 'Rasakan pengalaman battle royale dan multiplayer kompetitif kelas dunia langsung dari perangkat mobile Anda. Pilih senjata, taktik, dan karakter favorit Anda untuk mendominasi medan perang.',
        checklist: [
          'Mode Battle Royale dan Multiplayer 5v5 tersedia secara bersamaan.',
          'Sistem senjata modular yang dapat dikustomisasi secara mendalam.',
        ],
        image: '/codm_cover.png',
      },
    ],

    parentalTips: [
      {
        icon: RiTimeLine,
        title: 'Atur Waktu Bermain',
        desc: 'Batasi sesi bermain maksimal 1 jam per hari pada hari sekolah.',
      },
      {
        icon: RiChat3Line,
        title: 'Pantau Interaksi Online',
        desc: 'Gim ini memiliki fitur chat suara real-time. Pastikan anak tidak berinteraksi dengan orang asing.',
      },
    ],

    psychNote: 'Konten tembak-menembak dengan intensitas tinggi dapat memicu respons stres pada pemain muda. Dorong jeda aktif setiap 30-45 menit bermain.',

    gallery: [
      { src: '/codm_cover.png', alt: 'Call of Duty Mobile Screenshot 1' },
    ],
  },
};

export const defaultGameDetail = gameDetailData['resident-evil'];