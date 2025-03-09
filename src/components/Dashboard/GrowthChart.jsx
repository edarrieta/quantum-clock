import React, { useState } from 'react';

const GrowthChart = () => {
  const [timeframe, setTimeframe] = useState('28days');
  
  return (
    <div className="bg-gray-800 p-4 rounded-lg flex flex-col h-full">
      <div className="flex justify-between items-center mb-2">
        <div className="text-lg">Productivity & Soul Growth</div>
        <div className="flex space-x-2">
          <button 
            className={`px-2 py-1 ${timeframe === '28days' ? 'bg-blue-600' : 'bg-gray-700'} rounded text-xs`}
            onClick={() => setTimeframe('28days')}
          >
            28 Days
          </button>
          <button 
            className={`px-2 py-1 ${timeframe === 'week' ? 'bg-blue-600' : 'bg-gray-700'} rounded text-xs`}
            onClick={() => setTimeframe('week')}
          >
            Week
          </button>
          <button 
            className={`px-2 py-1 ${timeframe === '24hours' ? 'bg-blue-600' : 'bg-gray-700'} rounded text-xs`}
            onClick={() => setTimeframe('24hours')}
          >
            24 Hours
          </button>
        </div>
      </div>
      <div className="flex-1 min-h-32">
        {/* SVG Line Chart */}
        <svg viewBox="0 0 400 200" className="w-full h-full">
          {/* Grid lines */}
          <line x1="0" y1="0" x2="0" y2="200" stroke="#4B5563" strokeWidth="1" />
          <line x1="0" y1="200" x2="400" y2="200" stroke="#4B5563" strokeWidth="1" />
          <line x1="0" y1="150" x2="400" y2="150" stroke="#4B5563" strokeWidth="1" strokeDasharray="4" />
          <line x1="0" y1="100" x2="400" y2="100" stroke="#4B5563" strokeWidth="1" strokeDasharray="4" />
          <line x1="0" y1="50" x2="400" y2="50" stroke="#4B5563" strokeWidth="1" strokeDasharray="4" />
          
          {/* Productivity Line */}
          <path d="M0,180 C20,170 40,190 60,160 C80,130 100,140 120,110 C140,90 160,80 180,70 C200,60 220,30 240,50 C260,70 280,90 300,40 C320,50 340,30 360,20 C380,30 400,10" 
                fill="none" stroke="#10B981" strokeWidth="3" />
          
          {/* Soul Wellbeing Line */}
          <path d="M0,160 C20,150 40,130 60,140 C80,150 100,120 120,100 C140,80 160,90 180,60 C200,70 220,50 240,40 C260,30 280,60 300,20 C320,30 340,40 360,30 C380,40 400,20" 
                fill="none" stroke="#8B5CF6" strokeWidth="3" />
          
          {/* Peak Marker */}
          <circle cx="300" cy="20" r="5" fill="#EC4899" />
          <text x="305" y="20" fill="white" fontSize="10">Peak</text>
          
          {/* Dip Marker */}
          <circle cx="60" cy="190" r="5" fill="#EF4444" />
          <text x="65" y="190" fill="white" fontSize="10">Dip</text>
        </svg>
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <div>Mar 8</div>
        <div>Mar 15</div>
        <div>Mar 22</div>
        <div>Mar 29</div>
        <div>Apr 5</div>
      </div>
      <div className="flex mt-2 text-xs">
        <div className="flex items-center mr-4"><span className="w-3 h-3 bg-green-600 mr-1"></span>Productivity</div>
        <div className="flex items-center mr-4"><span className="w-3 h-3 bg-purple-600 mr-1"></span>Soul Wellbeing</div>
        <div className="flex items-center"><span className="w-3 h-3 bg-pink-600 mr-1"></span>Peak Moments</div>
      </div>
    </div>
  );
};

export default GrowthChart;