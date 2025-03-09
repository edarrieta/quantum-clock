import React from 'react';

const LifetimeTimeline = ({ currentTime, quantumCalendar }) => {
  const lifetimeDays = quantumCalendar.getDaysSinceLifetimeStart(currentTime);
  const lifetimePosition = quantumCalendar.getQuantumPosition(lifetimeDays);
  
  // Quantum lifetime - 120 years in Quantum Calendar
  const lifetimeTotalDays = quantumCalendar.LIFE_EXPECTANCY_DAYS;
  const lifetimeDaysRemaining = lifetimeTotalDays - lifetimeDays;
  const lifetimeProgress = (lifetimeDays / lifetimeTotalDays) * 100;
  
  return (
    <div className="timeline-section bg-gray-800 p-6 rounded-lg mt-4 w-full">
      <h2 className="text-xl text-purple-400 mb-4">Lifetime Timeline</h2>
      <div className="timeline-info">
        <div className="text-sm text-gray-400 mb-1">Timeline Position</div>
        <div className="text-lg mb-4">
          {lifetimePosition.day === "Leap" 
            ? `This is Leap Day of Year ${lifetimePosition.year} of Lifetime`
            : lifetimePosition.day === "Quantum" 
              ? `This is Quantum Day of Year ${lifetimePosition.year} of Lifetime`
              : `This is Day ${lifetimePosition.day} of Week ${lifetimePosition.week} of Month ${lifetimePosition.month} of Year ${lifetimePosition.year} of Lifetime`
          }
        </div>
        
        <div className="text-sm text-gray-400 mb-2">Lifetime Progress</div>
        <div className="progress-container h-2 bg-gray-700 rounded-full mb-4">
          <div 
            className="progress-bar h-full bg-purple-500 rounded-full"
            style={{ width: `${Math.min(100, lifetimeProgress)}%` }}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-700 p-3 rounded-lg text-center">
            <div className="text-xl font-bold">{lifetimeDays.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Current Day</div>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg text-center">
            <div className="text-xl font-bold">{lifetimeTotalDays.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Days Total (120 Q-Years)</div>
          </div>
        </div>
        
        <div className="bg-gray-700 p-3 rounded-lg text-center">
          <div className="text-xl font-bold text-purple-300">{lifetimeDaysRemaining.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Days Remaining</div>
        </div>
      </div>
    </div>
  );
};

export default LifetimeTimeline;