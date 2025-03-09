import React from 'react';

const DailyTimeline = ({ currentTime, quantumCalendar }) => {
  const dayPosition = quantumCalendar.getDayPosition(currentTime);
  const hourProgress = quantumCalendar.getHourProgress(currentTime);
  const minuteProgress = quantumCalendar.getMinuteProgress(currentTime);
  const secondProgress = quantumCalendar.getSecondProgress(currentTime);
  const hoursLeft = 24 - dayPosition.hours;
  
  return (
    <div className="timeline-section bg-gray-800 p-6 rounded-lg mt-4 w-full">
      <h2 className="text-xl text-yellow-400 mb-4">Daily Timeline</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-700 p-3 rounded-lg text-center">
          <div className="text-xl font-bold">{dayPosition.hours}</div>
          <div className="text-xs text-gray-400">Current Hour</div>
        </div>
        <div className="bg-gray-700 p-3 rounded-lg text-center">
          <div className="text-xl font-bold">{hoursLeft}</div>
          <div className="text-xs text-gray-400">Hours Left</div>
        </div>
      </div>
      
      <div className="text-sm text-gray-400 mb-1">Hour Progress</div>
      <div className="progress-container h-2 bg-gray-700 rounded-full mb-4">
        <div 
          className="progress-bar h-full bg-yellow-500 rounded-full"
          style={{ width: `${hourProgress}%` }}
        />
      </div>
      
      <div className="bg-gray-700 p-3 rounded-lg text-center mb-4">
        <div className="text-xl font-bold">{dayPosition.minutes}</div>
        <div className="text-xs text-gray-400">Current Minute</div>
      </div>
      
      <div className="text-sm text-gray-400 mb-1">Minute Progress</div>
      <div className="progress-container h-2 bg-gray-700 rounded-full mb-4">
        <div 
          className="progress-bar h-full bg-yellow-300 rounded-full"
          style={{ width: `${minuteProgress}%` }}
        />
      </div>
      
      <div className="text-sm text-gray-400 mb-1">Second Progress</div>
      <div className="progress-container h-2 bg-gray-700 rounded-full">
        <div 
          className="progress-bar h-full bg-yellow-200 rounded-full"
          style={{ width: `${secondProgress}%` }}
        />
      </div>
    </div>
  );
};

export default DailyTimeline;