import React from 'react';

const PeakAnalysis = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="text-lg mb-2">Peak Analysis</div>
      <div className="text-3xl font-bold text-pink-500 mb-2">+157%</div>
      <div className="text-sm mb-3">Growth from baseline</div>
      <div className="text-xs space-y-1">
        <div className="flex justify-between">
          <span>Peak Date:</span>
          <span className="text-gray-300">Apr 2, 2025</span>
        </div>
        <div className="flex justify-between">
          <span>Peak Duration:</span>
          <span className="text-gray-300">3.5 hours</span>
        </div>
        <div className="flex justify-between">
          <span>Contributing Results:</span>
          <span className="text-gray-300">4 major</span>
        </div>
        <div className="flex justify-between">
          <span>Time to Peak:</span>
          <span className="text-gray-300">26 days</span>
        </div>
      </div>
    </div>
  );
};

export default PeakAnalysis;