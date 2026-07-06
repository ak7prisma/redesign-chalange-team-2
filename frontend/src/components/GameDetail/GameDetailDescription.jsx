import React from 'react';
import DescriptionCard from '../ui/DescriptionCard';

export default function GameDetailDescription({ game }) {
  return (
    <div className="space-y-8 pt-8">
      <h2 className="text-3xl font-bold tracking-tight text-neutral-6">
        Deskripsi <span className="text-primary-4">Gim</span>
      </h2>

      {game.descriptionSections.map((section, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {isEven ? (
              <>
                <DescriptionCard
                  title={section.title}
                  icon={section.icon}
                  body={section.body}
                  checklist={section.checklist}
                />
                <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <DescriptionCard
                  title={section.title}
                  icon={section.icon}
                  body={section.body}
                  checklist={section.checklist}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}