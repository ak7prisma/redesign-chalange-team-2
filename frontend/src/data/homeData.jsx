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

export const contentCategories = [
  {
    icon: <IoSkullOutline className="text-primary-5 text-3xl" />,
    title: "Horor",
    desc: "Unsur ketakutan, ketegangan psikologis, dan elemen supranatural."
  },
  {
    icon: <LuSwords className="text-primary-6 text-3xl" />,
    title: "Kekerasan",
    desc: "Penggunaan senjata, kontak fisik, dan visualisasi pertarungan."
  },
  {
    icon: <PiGlobeHemisphereWestFill className="text-cyan-400 text-3xl" />,
    title: "Interaksi Daring",
    desc: "Fitur chat, komunitas terbuka, dan transaksi dalam aplikasi."
  },
  {
    icon: <MdOutlineBloodtype className="text-red-300 text-3xl" />,
    title: "Darah & Mutilasi",
    desc: "Visualisasi luka, organ tubuh, dan efek darah realistis."
  },
  {
    icon: <MdOutlineFace6 className="text-primary-5 text-3xl" />,
    title: "Penampilan Tokoh",
    desc: "Desain karakter, pakaian, dan estetika visual permainan."
  },
  {
    icon: <MdOutlineWineBar className="text-primary-6 text-3xl" />,
    title: "Rokok & Alkohol",
    desc: "Referensi atau penggunaan zat adiktif dalam alur cerita."
  },
  {
    icon: <BiMessageX className="text-cyan-400 text-3xl" />,
    title: "Bahasa Kasar",
    desc: "Penggunaan kata-kata kasar, umpatan, atau istilah tidak pantas."
  },
  {
    icon: <BiDice5 className="text-red-300 text-3xl" />,
    title: "Simulasi Judi",
    desc: "Elemen taruhan atau permainan yang menyerupai perjudian."
  }
];

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
