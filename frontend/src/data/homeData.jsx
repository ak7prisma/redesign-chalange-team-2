import React from 'react';
import { IoSkullOutline } from 'react-icons/io5';
import { LuSwords } from 'react-icons/lu';
import { PiGlobeHemisphereWestFill } from 'react-icons/pi';
import { MdOutlineBloodtype, MdOutlineFace6, MdOutlineWineBar } from 'react-icons/md';
import { BiDice5, BiMessageX } from 'react-icons/bi';

export const chartData = [
  { label: '3+', value: 3794, percentage: 90 },
  { label: '13+', value: 2591, percentage: 65 },
  { label: '18+', value: 1486, percentage: 38 },
  { label: '15+', value: 298, percentage: 8 },
  { label: '7+', value: 17, percentage: 1.5 },
];

export const categoryConfig = [
  { name: 'Horor',          Icon: IoSkullOutline,           color: 'text-primary-5', desc: 'Unsur ketakutan, ketegangan psikologis, dan elemen supranatural.' },
  { name: 'Kekerasan',      Icon: LuSwords,                 color: 'text-primary-6', desc: 'Penggunaan senjata, kontak fisik, dan visualisasi pertarungan.' },
  { name: 'Interaksi Daring', Icon: PiGlobeHemisphereWestFill, color: 'text-cyan-400', desc: 'Fitur chat, komunitas terbuka, dan transaksi dalam aplikasi.' },
  { name: 'Darah & Mutilasi', Icon: MdOutlineBloodtype,    color: 'text-red-300',   desc: 'Visualisasi luka, organ tubuh, dan efek darah realistis.' },
  { name: 'Penampilan Tokoh', Icon: MdOutlineFace6,        color: 'text-primary-5', desc: 'Desain karakter, pakaian, dan estetika visual permainan.' },
  { name: 'Rokok & Alkohol', Icon: MdOutlineWineBar,       color: 'text-primary-6', desc: 'Referensi atau penggunaan zat adiktif dalam alur cerita.' },
  { name: 'Bahasa Kasar',   Icon: BiMessageX,              color: 'text-cyan-400',  desc: 'Penggunaan kata-kata kasar, umpatan, atau istilah tidak pantas.' },
  { name: 'Simulasi Judi',  Icon: BiDice5,                 color: 'text-red-300',   desc: 'Elemen taruhan atau permainan yang menyerupai perjudian.' },
];

export const contentCategories = categoryConfig.map(({ name, Icon, color, desc }) => ({
  icon: <Icon className={`${color} text-3xl`} />,
  title: name,
  desc,
}));

export const newsData = [
  {
    tag: "PENGUMUMAN",
    tagColor: "bg-fuchsia-500/40 text-fuchsia-300 border-fuchsia-500/10",
    date: "02 FEBRUARI 2024",
    title: "Pemberitahuan Terkait Proses Verifikasi IGRS 2.0",
    desc: "Langkah-langkah terbaru dalam mempercepat durasi verifikasi konten bagi pengembang gim lokal dan internasional.",
    readTime: "4 MENIT BACA",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80"
  },
  {
    tag: "EDUKASI",
    tagColor: "bg-violet-500/40 text-violet-300 border-violet-500/10",
    date: "28 JANUARI 2024",
    title: "Panduan Cuplikan Konten: Standar Klasifikasi 2024",
    desc: "Bagaimana cara mengirimkan asset visual yang benar untuk memperlancar proses penilaian rating usia.",
    readTime: "7 MENIT BACA",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80"
  },
  {
    tag: "BERITA",
    tagColor: "bg-fuchsia-500/40 text-fuchsia-300 border-fuchsia-500/10",
    date: "20 JANUARI 2024",
    title: "Maklumat Pelayanan: Komitmen IGRS Terhadap Integritas",
    desc: "Pernyataan resmi mengenai standar etika dan kualitas pelayanan bagi seluruh stakeholder ekosistem gim.",
    readTime: "3 MENIT BACA",
    img: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=500&q=80"
  }
];