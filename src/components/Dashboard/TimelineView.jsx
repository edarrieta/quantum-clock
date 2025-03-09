import React from 'react';

const TimelineView = ({ results }) => {
  // Sort results by date, newest first
  const sortedResults = [...results].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Map result types to colors for timeline indicators
  const typeColors = {
    'App': 'bg-green-500',
    'Product': 'bg-green-500',
    'Document': 'bg-yellow-500',
    'System': 'bg-purple-500',
    'Process': 'bg-blue-500'
  };
  
  return (
    <div className="mb-6 pl-4 border-l-2 border-blue-500">
      <div className="text-lg mb-2">Activity Timeline</div>
      
      <div className="relative">
        {/* Timeline items */}
        {sortedResults.map(result => (
          <div key={result.id} className="mb-6 relative">
            <div className={`absolute -left-6 mt-1 w-3 h-3 rounded-full ${typeColors[result.type] || 'bg-gray-500'}`}></div>
            <div className="bg-gray-700 rounded-lg p-3 ml-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-medium">{result.name}</div>
                  <div className="text-xs text-gray-400">New {result.type}</div>
                </div>
                <div className="text-xs bg-gray-600 px-2 py-1 rounded">{result.date}</div>
              </div>
              <div className="text-sm mt-2">
                {result.impact.join(', ')}
              </div>
            </div>
          </div>
        ))}
        
        {/* Counterforce examples */}
        <div className="mb-6 relative">
          <div className="absolute -left-6 mt-1 w-3 h-3 rounded-full bg-red-500"></div>
          <div className="bg-gray-700 rounded-lg p-3 ml-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium">External Interruption Detected</div>
                <div className="text-xs text-gray-400">Counterforce</div>
              </div>
              <div className="text-xs bg-gray-600 px-2 py-1 rounded">2025-03-08 09:12</div>
            </div>
            <div className="text-sm mt-2">
              Productivity decreased by 28% due to unexpected meetings
            </div>
          </div>
        </div>
        
        <div className="mb-2 text-center">
          <button className="px-3 py-1 bg-gray-700 rounded text-sm">Load More History</button>
        </div>
      </div>
    </div>
  );
};

export default TimelineView;