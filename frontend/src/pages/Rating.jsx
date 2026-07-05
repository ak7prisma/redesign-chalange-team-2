import React, { useState } from 'react';
import { FaSkull, FaGlassMartini, FaDiceFive, FaQuestionCircle } from 'react-icons/fa';
import { GiCrossedSwords } from 'react-icons/gi';
import { FiGlobe, FiDroplet, FiUser, FiMessageSquare } from 'react-icons/fi';

const ratingCategories = [
  { id: '3', label: '3+' },
  { id: '7', label: '7+' },
  { id: '13', label: '13+' },
  { id: '15', label: '15+' },
  { id: '18', label: '18+' },
];

const detailData = {
  '18': {
    badge: 'UNTUK REMAJA AKHIR',
    badgeColor: 'bg-red-500/10 border border-red-500/30 text-red-400',
    logoBgColor: 'bg-[#15121b]',
    logoInnerColor: 'bg-red-600',
    logoTextColor: 'text-white',
    title: 'Rating Usia 18 Tahun Keatas',
    subtitle: 'Game yang termasuk dalam kategori ini cocok untuk remaja akhir berusia 18 tahun ke atas.',
    alertText: 'Game pada rating ini dapat mengandung konten dewasa dengan intensitas tinggi yang tidak sesuai untuk anak dan remaja',
    criteriaTitle: 'Kriteria Konten untuk Usia 18+',
    criteriaList: [
      'Boleh menampilkan tulisan atau gambar yang berhubungan dengan rokok dan/atau rokok elektronik, minuman beralkohol, narkotika, psikotropika, dan/atau zat adiktif lainnya',
      'Boleh menampilkan unsur kekerasan pada tokoh animasi yang dapat menyerupai manusia',
      'Boleh mengandung unsur humor dewasa yang berkonotasi seksual',
      'Boleh menampilkan unsur atau konten darah, mutilasi, dan/atau kanibalisme',
      'Boleh menampilkan tokoh menyerupai manusia tetapi tidak memperlihatkan alat vital, payudara, dan/atau bokong',
      'Tidak memuat pornografi',
      'Boleh Menampilkan produk mengandung horor yang berusaha menimbulkan perasaan ngeri dan/atau takut yang amat sangat',
      'Boleh memiliki fasilitas interaksi dalam jaringan berupa percakapan',
      'Boleh menampilkan permainan berbasis peruntungan tanpa transaksi resmi.'
    ],
    contentCategories: [
      { name: 'Horor', status: 'Ada (berat)', level: 'berat', icon: <FaSkull className="text-pink-400 text-base" /> },
      { name: 'Kekerasan', status: 'Ada (berat)', level: 'berat', icon: <GiCrossedSwords className="text-purple-400 text-base" /> },
      { name: 'Darah, Mutilasi, dan/atau Kanibalisme', status: 'Ada (berat)', level: 'berat', icon: <FiDroplet className="text-red-400 text-base" /> },
      { name: 'Bahasa Kasar', status: 'Ada (berat)', level: 'berat', icon: <FiMessageSquare className="text-teal-400 text-base" /> },
      { name: 'Simulasi Judi', status: 'Ada (berat)', level: 'berat', icon: <FaDiceFive className="text-amber-400 text-base" /> },
      { name: 'Rokok, Narkotika, Minuman Beralkohol', status: 'Ada (berat)', level: 'berat', icon: <FaGlassMartini className="text-indigo-400 text-base" /> },
      { name: 'Seksualitas/Pornografi', status: 'Ada (berat)', level: 'berat', icon: <FiUser className="text-emerald-400 text-base" /> },
      { name: 'Interaksi Daring', status: 'Ada (berat)', level: 'berat', icon: <FiGlobe className="text-cyan-400 text-base" /> },
    ],
    warningAlert: 'Konten dewasa dengan intensitas tinggi yang dapat berdampak signifikan secara emosional, psikologis, dan sosial. Hanya untuk pemain berusia 18 tahun ke atas.',
    warningStyles: 'bg-red-500/10 border-red-500/20 text-red-300'
  },
  '15': {
    badge: 'UNTUK REMAJA',
    badgeColor: 'bg-orange-500/10 border border-orange-500/30 text-orange-400',
    logoBgColor: 'bg-[#15121b]',
    logoInnerColor: 'bg-orange-500',
    logoTextColor: 'text-white',
    title: 'Rating Usia 15 Tahun Keatas',
    subtitle: 'Game dalam kategori ini ditujukan untuk remaja berusia 15 tahun ke atas dengan pengawasan sedang.',
    alertText: 'Game dapat mengandung konflik tingkat menengah, ketegangan psikologis, dan laga fiksi realistis.',
    criteriaTitle: 'Kriteria Konten untuk Usia 15+',
    criteriaList: [
      'Boleh menampilkan visualisasi tokoh animasi yang melakukan kekerasan fisik tanpa mutilasi parah.',
      'Boleh menampilkan penggunaan rokok atau alkohol secara tidak mendalam oleh karakter dewasa.',
      'Boleh menyajikan humor remaja dengan konotasi romantis ringan.',
      'Tidak memuat unsur perjudian berbayar maupun pornografi eksplisit.',
      'Dapat memiliki interaksi online ter-moderasi.'
    ],
    contentCategories: [
      { name: 'Horor', status: 'Ada (sedang)', level: 'sedang', icon: <FaSkull className="text-pink-400 text-base" /> },
      { name: 'Kekerasan', status: 'Ada (sedang)', level: 'sedang', icon: <GiCrossedSwords className="text-purple-400 text-base" /> },
      { name: 'Darah, Mutilasi, dan/atau Kanibalisme', status: 'Tidak ada', level: 'none', icon: <FiDroplet className="text-red-400 text-base" /> },
      { name: 'Bahasa Kasar', status: 'Ada (sedang)', level: 'sedang', icon: <FiMessageSquare className="text-teal-400 text-base" /> },
      { name: 'Simulasi Judi', status: 'Tidak ada', level: 'none', icon: <FaDiceFive className="text-amber-400 text-base" /> },
      { name: 'Rokok, Narkotika, Minuman Beralkohol', status: 'Ada (ringan)', level: 'ringan', icon: <FaGlassMartini className="text-indigo-400 text-base" /> },
      { name: 'Seksualitas/Pornografi', status: 'Tidak ada', level: 'none', icon: <FiUser className="text-emerald-400 text-base" /> },
      { name: 'Interaksi Daring', status: 'Ada (sedang)', level: 'sedang', icon: <FiGlobe className="text-cyan-400 text-base" /> },
    ],
    warningAlert: 'Menampilkan tema remaja akhir yang membutuhkan bimbingan orang tua secara berkala.',
    warningStyles: 'bg-orange-500/10 border-orange-500/20 text-orange-300'
  },
  '13': {
    badge: 'UNTUK REMAJA AWAL',
    badgeColor: 'bg-yellow-500/10 border border-yellow-500/30 text-yellow-400',
    logoBgColor: 'bg-[#15121b]',
    logoInnerColor: 'bg-yellow-500',
    logoTextColor: 'text-gray-900',
    title: 'Rating Usia 13 Tahun Keatas',
    subtitle: 'Game dalam kategori ini ditujukan untuk anak usia remaja awal 13 tahun ke atas.',
    alertText: 'Konten mengandung petualangan fiksi fantasi dengan tingkat kompleksitas cerita sedang.',
    criteriaTitle: 'Kriteria Konten untuk Usia 13+',
    criteriaList: [
      'Boleh menampilkan perkelahian fantasi tanpa darah mengalir.',
      'Bebas dari promosi obat terlarang, alkohol, maupun tembakau.',
      'Bebas dari kata-kata kotor kasar atau vulgar.',
      'Bebas dari unsur ketelanjangan atau konten seksual.'
    ],
    contentCategories: [
      { name: 'Horor', status: 'Ada (ringan)', level: 'ringan', icon: <FaSkull className="text-pink-400 text-base" /> },
      { name: 'Kekerasan', status: 'Ada (ringan)', level: 'ringan', icon: <GiCrossedSwords className="text-purple-400 text-base" /> },
      { name: 'Darah, Mutilasi, dan/atau Kanibalisme', status: 'Tidak ada', level: 'none', icon: <FiDroplet className="text-red-400 text-base" /> },
      { name: 'Bahasa Kasar', status: 'Tidak ada', level: 'none', icon: <FiMessageSquare className="text-teal-400 text-base" /> },
      { name: 'Simulasi Judi', status: 'Tidak ada', level: 'none', icon: <FaDiceFive className="text-amber-400 text-base" /> },
      { name: 'Rokok, Narkotika, Minuman Beralkohol', status: 'Tidak ada', level: 'none', icon: <FaGlassMartini className="text-indigo-400 text-base" /> },
      { name: 'Seksualitas/Pornografi', status: 'Tidak ada', level: 'none', icon: <FiUser className="text-emerald-400 text-base" /> },
      { name: 'Interaksi Daring', status: 'Ada (ringan)', level: 'ringan', icon: <FiGlobe className="text-cyan-400 text-base" /> },
    ],
    warningAlert: 'Cocok untuk remaja usia tanggung dengan pengawasan mandiri orang tua.',
    warningStyles: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-300'
  },
  '7': {
    badge: 'UNTUK ANAK SEKOLAH',
    badgeColor: 'bg-blue-500/10 border border-blue-500/30 text-blue-400',
    logoBgColor: 'bg-[#15121b]',
    logoInnerColor: 'bg-blue-500',
    logoTextColor: 'text-white',
    title: 'Rating Usia 7 Tahun Keatas',
    subtitle: 'Game ditujukan untuk anak sekolah tingkat dasar berusia 7 tahun ke atas.',
    alertText: 'Boleh menyajikan animasi fantasi dan ketegangan kartun ringan yang ramah keluarga.',
    criteriaTitle: 'Kriteria Konten untuk Usia 7+',
    criteriaList: [
      'Boleh menampilkan aksi slapstick kartun tanpa efek cedera realistis.',
      'Bebas dari segala jenis kekerasan fisik realistis.',
      'Bebas dari konten mistis yang memicu ketakutan berlebih.',
      'Mengutamakan motorik halus dan teka-teki logika sederhana.'
    ],
    contentCategories: [
      { name: 'Horor', status: 'Tidak ada', level: 'none', icon: <FaSkull className="text-pink-400 text-base" /> },
      { name: 'Kekerasan', status: 'Tidak ada', level: 'none', icon: <GiCrossedSwords className="text-purple-400 text-base" /> },
      { name: 'Darah, Mutilasi, dan/atau Kanibalisme', status: 'Tidak ada', level: 'none', icon: <FiDroplet className="text-red-400 text-base" /> },
      { name: 'Bahasa Kasar', status: 'Tidak ada', level: 'none', icon: <FiMessageSquare className="text-teal-400 text-base" /> },
      { name: 'Simulasi Judi', status: 'Tidak ada', level: 'none', icon: <FaDiceFive className="text-amber-400 text-base" /> },
      { name: 'Rokok, Narkotika, Minuman Beralkohol', status: 'Tidak ada', level: 'none', icon: <FaGlassMartini className="text-indigo-400 text-base" /> },
      { name: 'Seksualitas/Pornografi', status: 'Tidak ada', level: 'none', icon: <FiUser className="text-emerald-400 text-base" /> },
      { name: 'Interaksi Daring', status: 'Tidak ada', level: 'none', icon: <FiGlobe className="text-cyan-400 text-base" /> },
    ],
    warningAlert: 'Konten aman di bawah bimbingan dan pendampingan santai orang tua.',
    warningStyles: 'bg-blue-500/10 border-blue-500/20 text-blue-300'
  },
  '3': {
    badge: 'UNTUK ANAK USIA DINI',
    badgeColor: 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400',
    logoBgColor: 'bg-[#15121b]',
    logoInnerColor: 'bg-emerald-500',
    logoTextColor: 'text-white',
    title: 'Rating Usia 3 Tahun Keatas',
    subtitle: 'Khusus untuk balita dan anak usia dini berusia 3 tahun ke atas.',
    alertText: 'Konten dijamin sepenuhnya aman, bernilai edukasi interaktif dasar, dan bebas konflik.',
    criteriaTitle: 'Kriteria Konten untuk Usia 3+',
    criteriaList: [
      'Menampilkan objek berwarna cerah, suara ceria, dan interaksi dasar.',
      'Sangat dianjurkan mengandung edukasi pengenalan huruf, warna, angka, dan hewan.',
      'Bebas sepenuhnya dari segala bentuk kekerasan, hantu, dan jumpscare.',
      'Tidak memiliki opsi obrolan/komunikasi online eksternal.'
    ],
    contentCategories: [
      { name: 'Horor', status: 'Tidak ada', level: 'none', icon: <FaSkull className="text-pink-400 text-base" /> },
      { name: 'Kekerasan', status: 'Tidak ada', level: 'none', icon: <GiCrossedSwords className="text-purple-400 text-base" /> },
      { name: 'Darah, Mutilasi, dan/atau Kanibalisme', status: 'Tidak ada', level: 'none', icon: <FiDroplet className="text-red-400 text-base" /> },
      { name: 'Bahasa Kasar', status: 'Tidak ada', level: 'none', icon: <FiMessageSquare className="text-teal-400 text-base" /> },
      { name: 'Simulasi Judi', status: 'Tidak ada', level: 'none', icon: <FaDiceFive className="text-amber-400 text-base" /> },
      { name: 'Rokok, Narkotika, Minuman Beralkohol', status: 'Tidak ada', level: 'none', icon: <FaGlassMartini className="text-indigo-400 text-base" /> },
      { name: 'Seksualitas/Pornografi', status: 'Tidak ada', level: 'none', icon: <FiUser className="text-emerald-400 text-base" /> },
      { name: 'Interaksi Daring', status: 'Tidak ada', level: 'none', icon: <FiGlobe className="text-cyan-400 text-base" /> },
    ],
    warningAlert: 'Sangat direkomendasikan untuk menstimulasi tumbuh kembang buah hati secara edukatif.',
    warningStyles: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
  }
};

export default function Rating() {
  const [activeTab, setActiveTab] = useState('18');
  const current = detailData[activeTab] || detailData['18'];

  let warningCheckColor = "bg-red-500/20 border-red-500/30 text-red-400";
  if (activeTab === '15') warningCheckColor = "bg-orange-500/20 border-orange-500/30 text-orange-400";
  if (activeTab === '13') warningCheckColor = "bg-yellow-500/20 border-yellow-500/30 text-yellow-400";
  if (activeTab === '7') warningCheckColor = "bg-blue-500/20 border-blue-500/30 text-blue-400";
  if (activeTab === '3') warningCheckColor = "bg-emerald-500/20 border-emerald-500/30 text-emerald-400";

  return (
    <div className="relative z-20 min-h-screen text-white font-sans selection:bg-primary-4 selection:text-white">
      <div className="max-w-[1366px] mx-auto px-3 md:px-7 pt-12 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div className="space-y-4">
            <span className="inline-block px-6 py-3 rounded-full border border-primary-5/70 bg-primary-4/10 text-primary-5 text-base font-medium">
              Panduan Rating Usia IGRS
            </span>
            <h1 className="text-xl md:text-2xl font-semibold text-neutral-6">
              Pilih kategori usia untuk melihat penjelasan
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {ratingCategories.map((cat) => {
              const isSelected = activeTab === cat.id;
              
              let activeStyle = "bg-primary-4 text-white";
              if (cat.id === '18') activeStyle = "bg-red-600 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]";
              if (cat.id === '15') activeStyle = "bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]";
              if (cat.id === '13') activeStyle = "bg-yellow-500 text-gray-900 shadow-[0_0_15px_rgba(234,179,8,0.4)]";
              if (cat.id === '7') activeStyle = "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]";
              if (cat.id === '3') activeStyle = "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]";

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-14 h-9 md:w-16 md:h-10 rounded-full font-bold text-lg md:text-xl transition-all duration-200 cursor-pointer flex items-center justify-center ${
                    isSelected 
                      ? `${activeStyle} scale-105` 
                      : 'bg-white text-gray-900 border border-transparent hover:bg-gray-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 bg-[#1c182c]/80 border border-white/10 rounded-3xl p-6 md:p-10 space-y-8 backdrop-blur-xl shadow-2xl">
            
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className={`w-28 h-36 shrink-0 rounded-3xl ${current.logoBgColor} border border-white/10 flex flex-col overflow-hidden shadow-2xl`}>
                <div className={`flex-1 ${current.logoInnerColor} flex items-center justify-center rounded-t-3xl rounded-b-[1.8rem] px-2 py-4`}>
                  <span className={`text-[2.5rem] font-extrabold tracking-tighter leading-none ${current.logoTextColor}`}>
                    {activeTab}+
                  </span>
                </div>
                <div className="h-10 flex items-center justify-center">
                  <span className="text-white text-[15px] font-bold tracking-widest">
                    IGRS
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <span className={`inline-block px-3 py-1 rounded-md text-[11px] font-bold tracking-wider ${current.badgeColor}`}>
                  ✓ {current.badge}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  {current.title}
                </h2>
                <p className="text-neutral-5 text-sm md:text-base leading-relaxed">
                  {current.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-[#2C7FEB]/10 border border-[#2C7FEB]/20 rounded-xl p-4">
              <span className="w-5 h-5 rounded-full bg-[#2C7FEB]/15 border border-[#2C7FEB]/20 flex items-center justify-center text-xs shrink-0 select-none">
                ✓
              </span>
              <p className="text-[#c8c5e0] text-sm font-medium leading-relaxed">
                {current.alertText}
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                㗊 {current.criteriaTitle}
              </h3>
              <ul className="space-y-4">
                {current.criteriaList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="w-5 h-5 rounded-md border border-white/20 bg-white/5 flex items-center justify-center text-xs text-primary-5 mt-0.5 shrink-0 select-none">
                      ✓
                    </span>
                    <p className="text-neutral-5 text-sm md:text-[14px] leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="lg:col-span-5 bg-[#1c182c]/80 border border-white/10 rounded-3xl p-6 md:p-8 space-y-6 backdrop-blur-xl shadow-2xl">
            
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
                㗊 Kategori Konten
              </h3>
              <p className="text-neutral-5 text-sm">
                Ringkasan kategori konten pada rating {activeTab}+
              </p>
            </div>

            <div className="border-t border-white/10" />

            <div className="space-y-4">
              {current.contentCategories.map((cat, idx) => {
                let statusColor = "text-green-400";
                if (cat.level === "ringan") statusColor = "text-yellow-400";
                if (cat.level === "sedang") statusColor = "text-orange-400";
                if (cat.level === "berat") statusColor = "text-red-400";

                return (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shadow-inner shrink-0">
                        {cat.icon || <FaQuestionCircle className="text-neutral-5 text-base" />}
                      </span>
                      <span className="text-neutral-5 text-sm font-medium">{cat.name}</span>
                    </div>
                    <span className={`text-[12px] font-semibold transition-colors duration-200 ${statusColor}`}>
                      ✓ {cat.status}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className={`flex items-start gap-3 border rounded-xl p-4 transition-all duration-300 ${current.warningStyles}`}>
              <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs shrink-0 mt-0.5 select-none transition-all duration-300 ${warningCheckColor}`}>
                ✓
              </span>
              <p className="text-xs leading-relaxed">
                {current.warningAlert}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}