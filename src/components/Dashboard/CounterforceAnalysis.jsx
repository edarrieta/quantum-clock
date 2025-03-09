import React from 'react';

const CounterforceAnalysis = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="text-lg mb-2">Counterforce Analysis</div>
      <div className="text-sm mb-3">Factors decreasing productivity:</div>
      <div className="space-y-2">
        <div className="bg-gray-700 p-2 rounded flex justify-between items-center">
          <span>External Interruptions</span>
          <span className="text-red-400">-28%</span>
        </div>
        <div className="bg-gray-700 p-2 rounded flex justify-between items-center">
          <span>System Degradation</span>
          <span className="text-red-400">-17%</span>
        </div>
        <div className="bg-gray-700 p-2 rounded flex justify-between items-center">
          <span>Focus Dilution</span>
          <span className="text-red-400">-12%</span>
        </div>
        <div className="bg-gray-700 p-2 rounded flex justify-between items-center">
          <span>Energy Depletion</span>
          <span className="text-red-400">-9%</span>
        </div>
      </div>
    </div>
  );
};

export default CounterforceAnalysis;
