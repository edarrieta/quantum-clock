import React from 'react';

const TimelineSelector = ({ activeTimeline, setActiveTimeline }) => {
  return (
    <div className="timeline-selector mt-6 flex justify-between bg-gray-800 p-1 rounded-lg mb-4">
      <button 
        className={`flex-1 py-2 px-3 rounded ${activeTimeline === 'ad' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-400'}`}
        onClick={() => setActiveTimeline('ad')}
      >
        A.D.
      </button>
      <button 
        className={`flex-1 py-2 px-3 rounded ${activeTimeline === 'lifetime' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-400'}`}
        onClick={() => setActiveTimeline('lifetime')}
      >
        Lifetime
      </button>
      <button 
        className={`flex-1 py-2 px-3 rounded ${activeTimeline === 'project' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-400'}`}
        onClick={() => setActiveTimeline('project')}
      >
        Project
      </button>
      <button 
        className={`flex-1 py-2 px-3 rounded ${activeTimeline === 'daily' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-400'}`}
        onClick={() => setActiveTimeline('daily')}
      >
        Daily
      </button>
    </div>
  );
};

export default TimelineSelector;