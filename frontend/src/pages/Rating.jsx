import React, { useState } from 'react';
import { detailData } from '../data/ratingData';
import RatingNavigation from '../components/Rating/RatingNavigation';
import RatingDescription from '../components/Rating/RatingDescription';
import RatingSummary from '../components/Rating/RatingSummary';

export default function Rating() {
  const [activeTab, setActiveTab] = useState('18');
  const current = detailData[activeTab] || detailData['18'];

  return (
    <div className="relative z-20 min-h-screen text-white font-sans selection:bg-primary-4 selection:text-white">
      <div className="max-w-[1366px] mx-auto px-3 md:px-7 pt-12 space-y-8">
        
        <RatingNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <RatingDescription activeTab={activeTab} current={current} />
          <RatingSummary activeTab={activeTab} current={current} />
        </div>

      </div>
    </div>
  );
}