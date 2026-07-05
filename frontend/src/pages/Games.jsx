import React from 'react';
import { 
  RiVerifiedBadgeFill, 
  RiCompass3Line, 
  RiFilmLine, 
  RiTimeLine, 
  RiLockPasswordLine, 
  RiChat3Line, 
  RiLightbulbLine 
} from 'react-icons/ri';

export default function Games() {
  return (
    <div className="relative z-20 min-h-screen text-neutral-6 font-sans">
      <div className="max-w-[1366px] mx-auto px-4 md:px-8 pt-8 space-y-12">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          
          <div className="w-[300px] h-[400px] md:w-[340px] md:h-[460px] shrink-0 rounded-3xl overflow-hidden bg-primary-1/40 border border-white/10 shadow-2xl flex items-center justify-center p-0">
            <img 
              src="/re_cover.png" 
              alt="Resident Evil Cover" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-6 pt-4 text-center lg:text-left">
            
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-3/30 bg-primary-2/40 text-primary-5 text-xs font-medium">
                <RiVerifiedBadgeFill className="w-4 h-4 text-primary-4" />
                Terverifikasi KOMDIGI
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-6 tracking-wide">
                Resident Evil
              </h1>
              <p className="text-neutral-5 text-lg md:text-xl">
                Developer: Capcom
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5 pt-2 max-w-2xl mx-auto lg:mx-0">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-primary-3 flex flex-col items-center justify-center shadow-lg p-2 leading-none">
                <span className="text-neutral-6 font-black text-2xl">18+</span>
                <span className="text-[9px] text-neutral-6 font-semibold tracking-wider mt-1 uppercase">REMAJA</span>
              </div>
              
              <div className="text-left space-y-1">
                <h4 className="text-neutral-6 font-bold text-lg">
                  Rating Usia: Remaja
                </h4>
                <p className="text-neutral-5 text-sm md:text-base leading-relaxed">
                  Bukan untuk anak-anak. Mengandung kekerasan ekstrem, darah, horor psikologis, dan bahasa kasar.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
              {['Survival Horror', 'Single Player', 'Story-Rich', 'Third-Person'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-4 py-2 rounded-xl bg-primary-2/30 border border-primary-2 text-neutral-5 text-sm font-medium transition-all duration-300 hover:bg-primary-3/30 hover:text-neutral-6 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

        </div>

        <div className="space-y-8 pt-8">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-6">
            Deskripsi <span className="text-primary-4">Gim</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            <div className="bg-primary-2/20 border border-neutral-6 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-md">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-neutral-6 flex items-center gap-2.5">
                  <RiCompass3Line className="w-6 h-6 text-primary-4" />
                  Misteri Desa Terpencil
                </h3>
                <p className="text-neutral-5 text-sm md:text-lg leading-relaxed">
                  Masuki dunia penuh teror biologis yang dikembangkan oleh Umbrella Corporation. 
                  Jelajahi lokasi-lokasi ikonik seperti Raccoon City, Spencer Mansion, dan desa 
                  terpencil. Atasi teka-teki, kelola persediaan terbatas, dan bertahan hidup dari 
                  makhluk mengerikan yang mengintai di setiap sudut.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex items-start gap-2.5">
                  <span className="text-primary-4 text-sm mt-0.5">✓</span>
                  <p className="text-neutral-5 text-xs md:text-lg">
                    Hadapi musuh ikonik: Zombie, Licker, Nemesis, dan berbagai B.O.W. (Bio Organic Weapon).
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-primary-4 text-sm mt-0.5">✓</span>
                  <p className="text-neutral-5 text-xs md:text-lg">
                    Kelola amunisi, item penyembuh, dan kunci dengan bijak untuk bertahan hidup.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
              <img 
                src="/re_gameplay_1.png" 
                alt="Gameplay Resident Evil 1" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch pt-2">
            
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
              <img 
                src="/re_gameplay_2.png" 
                alt="Gameplay Resident Evil 2" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-primary-2/20 border border-neutral-6 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-md">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-neutral-6 flex items-center gap-2.5">
                  <RiFilmLine className="w-6 h-6 text-primary-4" />
                  Cerita Menegangkan
                </h3>
                <p className="text-neutral-5 text-sm md:text-lg leading-relaxed">
                  Sebuah perusahaan farmasi raksasa, Umbrella Corporation, menyebarkan virus 
                  mematikan yang mengubah manusia menjadi monster mengerikan. Hanya segelintir 
                  yang bisa mengungkap kebenaran dan menghentikan kehancuran ini sebelum terlambat.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex items-start gap-2.5">
                  <span className="text-primary-4 text-sm mt-0.5">✓</span>
                  <p className="text-neutral-5 text-xs md:text-lg">
                    Umbrella Corporation menciptakan T-Virus yang mengubah manusia menjadi zombie.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-primary-4 text-sm mt-0.5">✓</span>
                  <p className="text-neutral-5 text-xs md:text-lg">
                    Ungkap konspirasi global dan selamatkan dunia dari kehancuran biologis total.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="space-y-8 pt-12">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-6 text-center">
            <span className="text-primary-4">Panduan</span> Orang Tua
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-neutral-6 mb-4">Tips Pengawasan</h3>
              
              <div className="bg-primary-2/20 border border-primary-3/30 rounded-2xl p-5 flex gap-4 items-start backdrop-blur-md">
                 <div className="text-primary-4 mt-0.5">
                   <RiTimeLine className="w-5 h-5" />
                 </div>
                 <div>
                    <h4 className="text-neutral-6 font-bold text-base">Atur Waktu Layar</h4>
                    <p className="text-neutral-5 text-xs mt-1.5 leading-relaxed">
                      Batas waktu bermain hingga 1-2 jam per sesi. Pastikan anak memiliki waktu istirahat yang cukup dan aktivitas lainnya.
                    </p>
                 </div>
              </div>

              <div className="bg-primary-2/20 border border-primary-3/30 rounded-2xl p-5 flex gap-4 items-start backdrop-blur-md">
                 <div className="text-primary-4 mt-0.5">
                   <RiLockPasswordLine className="w-5 h-5" />
                 </div>
                 <div>
                    <h4 className="text-neutral-6 font-bold text-base">Batas Pembayaran</h4>
                    <p className="text-neutral-5 text-xs mt-1.5 leading-relaxed">
                      Gim ini mengandung kekerasan, darah, dan adegan menegangkan. Pastikan sesuai dengan usia dan kedewasaan anak sebelum dibelikan.
                    </p>
                 </div>
              </div>

              <div className="bg-primary-2/20 border border-primary-3/30 rounded-2xl p-5 flex gap-4 items-start backdrop-blur-md">
                 <div className="text-primary-4 mt-0.5">
                   <RiChat3Line className="w-5 h-5" />
                 </div>
                 <div>
                    <h4 className="text-neutral-6 font-bold text-base">Pantau Aktivitas Bermain</h4>
                    <p className="text-neutral-5 text-xs mt-1.5 leading-relaxed">
                      Dampingi anak saat bermain dan ajak berdiskusi tentang konten gim. Dorong komunikasi agar anak merasa nyaman berbagi.
                    </p>
                 </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-2 to-primary-1 border border-neutral-6 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col justify-center">
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <RiLightbulbLine className="w-6 h-6 text-neutral-6" />
              </div>
              <h4 className="text-xl font-bold text-neutral-6 mb-4">Saran Psikologis</h4>
              <p className="text-neutral-5 text-sm md:text-base leading-relaxed">
                Gim horor seperti Resident Evil dapat memicu ketegangan, rasa takut, atau mimpi buruk pada beberapa pemain, terutama anak-anak dan remaja. Batasi durasi bermain, pastikan suasana bermain nyaman, dan ajarkan cara mengelola rasa takut dengan sehat.
              </p>
            </div>

          </div>
        </div>

        <div className="space-y-6 pt-10">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-6">
            Galeri Cuplikan Gim
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <img 
               src="/re_gallery_1.png" 
               className="w-full h-[180px] object-cover rounded-2xl border border-white/5 shadow-lg" 
               alt="Resident Evil Screenshot 1" 
             />
             <img 
               src="/re_gallery_2.png" 
               className="w-full h-[180px] object-cover rounded-2xl border border-white/5 shadow-lg" 
               alt="Resident Evil Screenshot 2" 
             />
             <img 
               src="/re_gallery_3.png" 
               className="w-full h-[180px] object-cover rounded-2xl border border-white/5 shadow-lg" 
               alt="Resident Evil Screenshot 3" 
             />
          </div>
        </div>

      </div>
    </div>
  );
}