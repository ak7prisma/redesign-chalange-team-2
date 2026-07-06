import React from 'react';
import { RiLightbulbLine } from 'react-icons/ri';

function TipCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-primary-2/20 border border-primary-3/30 rounded-2xl p-5 flex gap-4 items-start backdrop-blur-md">
      <div className="text-primary-4 mt-0.5">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-neutral-6 font-bold text-base">{title}</h4>
        <p className="text-neutral-5 text-xs mt-1.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function GameDetailParentGuide({ game }) {
  return (
    <div className="space-y-8 pt-12">
      <h2 className="text-3xl font-bold tracking-tight text-neutral-6 text-center">
        <span className="text-primary-4">Panduan</span> Orang Tua
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
        <div className="bg-gradient-to-br from-primary-2 to-primary-1 border border-neutral-6/20 rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col justify-center">
          <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
            <RiLightbulbLine className="w-6 h-6 text-neutral-6" />
          </div>
          <h4 className="text-xl font-bold text-neutral-6 mb-4">Saran Psikologis</h4>
          <p className="text-neutral-5 text-sm md:text-base leading-relaxed">
            {game.psychNote}
          </p>
        </div>
      </div>
    </div>
  );
}