import React from 'react';
import { FaHeadSideVirus } from 'react-icons/fa';

function TipCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-primary-2/20 text-primary-5 border border-primary-3/30 rounded-2xl p-5 flex gap-4 items-start backdrop-blur-md">
      <div className="mt-0.5">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-bold text-base">{title}</h4>
        <p className="text-neutral-5 text-sm mt-1.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function GameDetailParentGuide({ game }) {
  return (
    <div className="space-y-8 pt-12">
      <h2 className="text-3xl font-semibold text-neutral-6 text-center">
        <span className="text-primary-5">Panduan</span> Orang Tua
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">
        {/* Tips Column */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-neutral-6 mb-4">Tips Pengawasan</h3>
          {game.parentalTips.map((tip, idx) => (
            <TipCard key={idx} icon={tip.icon} title={tip.title} desc={tip.desc} />
          ))}
        </div>

        {/* Psychology Note */}
        <div className="bg-gradient-to-b from-primary-3 to-primary-1 border-2 border-neutral-6/70 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col justify-center">
          <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
            <FaHeadSideVirus className="text-3xl text-neutral-6" />
          </div>
          <h4 className="text-4xl font-bold text-neutral-6 mb-4">Saran Psikologis</h4>
          <p className="text-neutral-5 text-md md:text-lg leading-relaxed">
            {game.psychNote}
          </p>
        </div>
      </div>
    </div>
  );
}