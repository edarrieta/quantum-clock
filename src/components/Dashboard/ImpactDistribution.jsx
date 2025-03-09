import React from 'react';

const ImpactDistribution = ({ results }) => {
  // In a real app, this would calculate actual percentages based on results
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="text-lg mb-2">Impact Distribution</div>
      <div className="h-40 flex items-center justify-center">
        {/* This would be a chart in a real implementation */}
        <svg viewBox="0 0 100 100" className="w-32 h-32">
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#4F46E5" strokeWidth="20" strokeDasharray="70 100" strokeDashoffset="25" />
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#8B5CF6" strokeWidth="20" strokeDasharray="50 100" strokeDashoffset="95" />
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10B981" strokeWidth="20" strokeDasharray="30 100" strokeDashoffset="145" />
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3B82F6" strokeWidth="20" strokeDasharray="15 100" strokeDashoffset="175" />
        </svg>
      </div>
      <div className="text-xs space-y-1 mt-2">
        <div className="flex items-center"><span className="w-3 h-3 bg-indigo-600 mr-2"></span>Productivity (45%)</div>
        <div className="flex items-center"><span className="w-3 h-3 bg-purple-600 mr-2"></span>Knowledge (28%)</div>
        <div className="flex items-center"><span className="w-3 h-3 bg-green-600 mr-2"></span>Mindset (17%)</div>
        <div className="flex items-center"><span className="w-3 h-3 bg-blue-600 mr-2"></span>Other (10%)</div>
      </div>
    </div>
  );
};

export default ImpactDistribution;