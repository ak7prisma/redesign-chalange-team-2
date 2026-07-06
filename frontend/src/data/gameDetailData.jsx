import React from 'react';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { MdOutlineLock } from 'react-icons/md';
import { RiCompass3Line, RiFilmLine, RiLockPasswordLine, RiChat3Line, RiTimerLine } from 'react-icons/ri';

export const gameDetailData = {
  'resident-evil': {
    id: 'resident-evil',
    title: 'Resident Evil',
    developer: 'Capcom',
    cover: '/re_cover.png',
    rating: '18+',
    ageLabel: 'Dewasa',
    ratingDesc: 'Bukan untuk anak-anak. Mengandung kekerasan ekstrem, darah, horor psikologis, dan bahasa kasar.',
    tags: ['Survival Horror', 'Single Player', 'Story-Rich', 'Third-Person'],
    platforms: ['Windows', 'PlayStation', 'Xbox'],
    releaseDate: '1996',

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
        icon: 'group',
        body: 'Sebuah perusahaan farmasi raksasa, Umbrella Corporation, menyebarkan virus mematikan yang mengubah manusia menjadi monster mengerikan. Hanya segelintir yang bisa mengungkap kebenaran dan menghentikan kehancuran ini sebelum terlambat.',
        updateText: 'Resident Evil 4 Remake, Village, dan RE: Verse terus membawa pengalaman baru dengan grafis memukau, mekanika modern, dan cerita yang lebih dalam.',
        image: '/re_gameplay_2.png',
      },
    ],

    parentalTips: [
      {
        icon: RiTimerLine,
        title: 'Atur Waktu Layar',
        desc: 'Batas waktu bermain hingga 1-2 jam per sesi. Pastikan anak memiliki waktu istirahat yang cukup and aktivitas lainnya.',
      },
      {
        icon: MdOutlineLock,
        title: 'Batas Pembayaran',
        desc: 'Gim ini mengandung kekerasan, darah, dan adegan menegangkan. Pastikan sesuai dengan usia dan kedewasaan anak sebelum dibelikan.',
      },
      {
        icon: HiOutlineChatAlt2 ,
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
    ageLabel: 'Dewasa',
    ratingDesc: 'Mengandung pertempuran militer realistis, tembak-menembak, dan konten kekerasan intens.',
    tags: ['Action', 'Shooter', 'Multiplayer', 'Battle Royale'],
    platforms: ['Android', 'iOS'],
    releaseDate: '2019',

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
        icon: RiTimerLine,
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

  'honkai-star-rail': {
    id: 'honkai-star-rail',
    title: 'Honkai: Star Rail',
    developer: 'COGNOSPHERE (miHoYo)',
    cover: '/honkai_cover.png',
    rating: '13+',
    ageLabel: 'Remaja',
    ratingDesc: 'Mengandung kekerasan fiksi ringan, dialog yang cukup kompleks, serta interaksi sosial daring.',
    tags: ['RPG', 'Strategy', 'Open World', 'Anime'],
    platforms: ['Windows', 'PlayStation 5', 'Android', 'iOS'],
    releaseDate: '2023',

    descriptionSections: [
      {
        title: 'Jelajahi Galaksi Luas',
        icon: RiCompass3Line,
        body: 'Naik ke Astral Express dan jelajahi berbagai dunia unik di galaksi. Temui rekan baru, hadapi krisis Stellaron, dan ungkap misteri Aeon dalam pertempuran berbasis giliran (turn-based) yang taktis.',
        checklist: [
          'Nikmati visual berkualitas tinggi dan animasi pertempuran yang memukau.',
          'Susun formasi tim terbaik dengan elemen dan jalur (Path) yang sinergis.',
        ],
        image: '/honkai_cover.png',
      },
    ],

    parentalTips: [
      {
        icon: RiTimerLine,
        title: 'Pantau Batas Waktu bermain',
        desc: 'Sistem stamina harian membatasi progres langsung, namun pastikan anak tidak bermain larut malam.',
      },
      {
        icon: MdOutlineLock,
        title: 'Batas Transaksi Mikro',
        desc: 'Gim ini menggunakan sistem gacha. Pastikan untuk menonaktifkan pembayaran otomatis pada perangkat anak.',
      },
    ],

    psychNote: 'Mekanisme gacha dapat mendorong keinginan impulsif untuk berbelanja. Berikan pemahaman kepada anak mengenai nilai uang dan konsep probabilitas.',

    gallery: [
      { src: '/honkai_cover.png', alt: 'Honkai Star Rail Screenshot 1' },
    ],
  },

  'efootball': {
    id: 'efootball',
    title: 'eFootball™',
    developer: 'Konami Digital Entertainment',
    cover: '/efootball_cover.png',
    rating: '3+',
    ageLabel: 'Semua Usia',
    ratingDesc: 'Cocok untuk semua kalangan. Konten olahraga sepak bola tanpa unsur kekerasan atau bahasa kasar.',
    tags: ['Sports', 'Simulation', 'Multiplayer', 'Soccer'],
    platforms: ['Windows', 'PlayStation', 'Xbox', 'Android', 'iOS'],
    releaseDate: '2021',

    descriptionSections: [
      {
        title: 'Era Baru Sepak Bola Digital',
        icon: RiCompass3Line,
        body: 'Rasakan simulasi pertandingan sepak bola yang realistis dengan grafis berkualitas tinggi. Bangun tim impian Anda (Dream Team), rekrut pemain legendaris, dan tandingi pemain dari seluruh belahan dunia.',
        checklist: [
          'Kontrol taktis yang presisi memberikan kendali penuh atas setiap operan dan tendangan.',
          'Pembaruan berkala berdasarkan performa pemain di dunia nyata.',
        ],
        image: '/efootball_cover.png',
      },
    ],

    parentalTips: [
      {
        icon: RiTimerLine,
        title: 'Bermain Bersama Keluarga',
        desc: 'Gim olahraga sangat cocok dimainkan bersama untuk meningkatkan kebersamaan dan sportivitas.',
      },
    ],

    psychNote: 'Kompetisi daring dapat memicu rasa frustrasi saat kalah. Ajarkan anak tentang nilai sportivitas, kolaborasi, dan bahwa kekalahan adalah bagian dari pembelajaran.',

    gallery: [
      { src: '/efootball_cover.png', alt: 'eFootball Screenshot 1' },
    ],
  },

  'among-us': {
    id: 'among-us',
    title: 'Among Us',
    developer: 'Innersloth',
    cover: '/amongus_cover.png',
    rating: '7+',
    ageLabel: 'Anak',
    ratingDesc: 'Mengandung animasi eliminasi kartun yang jenaka, serta interaksi sosial diskusi kelompok.',
    tags: ['Social', 'Survival', 'Multiplayer', 'Casual'],
    platforms: ['Windows', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Android', 'iOS'],
    releaseDate: '2018',

    descriptionSections: [
      {
        title: 'Temukan sang Impostor',
        icon: RiCompass3Line,
        body: 'Bekerja sama dengan kru lain untuk menyelesaikan tugas pemeliharaan pesawat ruang angkasa, tetapi waspadalah terhadap Impostor di antara Anda yang berusaha mengeliminasi semua orang secara diam-diam.',
        checklist: [
          'Gunakan komunikasi dan logika untuk menuduh atau membela diri di ruang diskusi.',
          'Kustomisasi karakter dengan kostum dan hewan peliharaan lucu.',
        ],
        image: '/amongus_cover.png',
      },
    ],

    parentalTips: [
      {
        icon: RiChat3Line,
        title: 'Gunakan Filter Percakapan',
        desc: 'Aktifkan fitur sensor kata kasar dan batasi percakapan hanya dengan teman yang dikenal jika memungkinkan.',
      },
    ],

    psychNote: 'Permainan ini melatih kemampuan analisis dan komunikasi, namun unsur kebohongan taktis (deduksi sosial) bisa membingungkan anak usia dini. Dampingi mereka untuk memahami konteks permainan.',

    gallery: [
      { src: '/amongus_cover.png', alt: 'Among Us Screenshot 1' },
    ],
  },

  'the-sims-4': {
    id: 'the-sims-4',
    title: 'The Sims 4',
    developer: 'Maxis / Electronic Arts',
    cover: '/sims_cover.png',
    rating: '13+',
    ageLabel: 'Remaja',
    ratingDesc: 'Mengandung simulasi kehidupan sosial, hubungan interpersonal romantis ringan, dan komedi kartun.',
    tags: ['Simulation', 'Single Player', 'Sandbox', 'Casual'],
    platforms: ['Windows', 'macOS', 'PlayStation 4', 'Xbox One'],
    releaseDate: '2014',

    descriptionSections: [
      {
        title: 'Kreativitas Tanpa Batas',
        icon: RiCompass3Line,
        body: 'Buat karakter unik Anda, bangun rumah impian dengan kustomisasi arsitektur yang mendalam, dan kelola kehidupan sosial serta karier karakter Anda dalam simulasi dunia yang hidup.',
        checklist: [
          'Rancang rumah dari pondasi hingga dekorasi interior.',
          'Jelajahi berbagai ekspansi dunia dengan tema kehidupan yang unik.',
        ],
        image: '/sims_cover.png',
      },
    ],

    parentalTips: [
      {
        icon: RiTimerLine,
        title: 'Tetapkan Batasan Waktu',
        desc: 'Gim simulasi berdurasi panjang dapat membuat anak lupa waktu. Tetapkan jadwal bermain yang konsisten.',
      },
    ],

    psychNote: 'Mendorong ekspresi kreativitas dan pemecahan masalah sosial yang baik. Namun, pastikan anak tetap menjaga kehidupan sosial mereka di dunia nyata.',

    gallery: [
      { src: '/sims_cover.png', alt: 'The Sims 4 Screenshot 1' },
    ],
  },

  'gta-v': {
    id: 'gta-v',
    title: 'Grand Theft Auto V',
    developer: 'Rockstar North / Rockstar Games',
    cover: '/gta_cover.png',
    rating: '18+',
    ageLabel: 'Dewasa',
    ratingDesc: 'Sangat tidak cocok untuk anak-anak. Mengandung unsur kekerasan tinggi, kriminalitas, konten seksual, dan bahasa kasar ekstrem.',
    tags: ['Action', 'Open World', 'Mature', 'Multiplayer'],
    platforms: ['Windows', 'PlayStation', 'Xbox'],
    releaseDate: '2013',

    descriptionSections: [
      {
        title: 'Dunia Kriminal Los Santos',
        icon: RiCompass3Line,
        body: 'Jelajahi kota metropolitan Los Santos yang luas melalui kisah tiga karakter kriminal berbeda. Rencanakan perampokan besar, selesaikan misi berbahaya, dan bertualanglah di dunia terbuka paling dinamis.',
        checklist: [
          'Mode cerita yang sinematik dan mendalam.',
          'GTA Online yang terus berkembang dengan berbagai misi kolaboratif.',
        ],
        image: '/gta_cover.png',
      },
    ],

    parentalTips: [
      {
        icon: MdOutlineLock,
        title: 'Gunakan Pengaman Orang Tua',
        desc: 'Sangat disarankan untuk tidak membiarkan anak di bawah umur memainkan gim ini karena kontennya yang sepenuhnya dewasa.',
      },
    ],

    psychNote: 'Visualisasi kekerasan ekstrem dan aktivitas kriminal dapat memengaruhi persepsi anak mengenai hukum dan perilaku sosial. Sangat penting untuk mematuhi rekomendasi usia 18+.',

    gallery: [
      { src: '/gta_cover.png', alt: 'GTA V Screenshot 1' },
    ],
  }
};

export const defaultGameDetail = gameDetailData['resident-evil'];