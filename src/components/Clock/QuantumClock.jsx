import React, { useState, useEffect } from 'react';
import TimelineSelector from './TimelineSelector';
import ADTimeline from './timelines/ADTimeline';
import LifetimeTimeline from './timelines/LifetimeTimeline';
import ProjectTimeline from './timelines/ProjectTimeline';
import DailyTimeline from './timelines/DailyTimeline';
import DayProgress from './DayProgress';

/**
 * Quantum Clock Component
 * Displays the current time in multiple formats along with timeline views
 */
const QuantumClock = ({ currentTime, quantumCalendar, results }) => {
  // Local state
  const [activeTimeline, setActiveTimeline] = useState('ad');
  const [timeRemaining, setTimeRemaining] = useState({ hours: 0, minutes: 0, seconds: 0 });
  
  // Calculate time until end of day
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const diff = endOfDay - now;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeRemaining({ hours, minutes, seconds });
    };
    
    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Format current date for filtering results
  const formattedDate = `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1).toString().padStart(2, '0')}-${currentTime.getDate().toString().padStart(2, '0')}`;
  const todaysResultsCount = results.filter(r => r.date === formattedDate).length;
  
  // Extract time components
  const year = currentTime.getFullYear();
  const month = currentTime.getMonth() + 1;
  const day = currentTime.getDate();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="text-center mb-12 w-full max-w-3xl">
        {/* Header */}
        <div className="text-6xl font-bold mb-2">Quantum Clock</div>
        <div className="text-xl mb-6">Transcend ordinary time</div>
        
        {/* Historical Time */}
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <div className="text-xl mb-2">Historical Context</div>
          <div className="text-4xl font-mono">
            Year {year}, Month {month}, Day {day}
          </div>
          <div className="text-2xl text-gray-400 mt-2">
            {year} years since epoch
          </div>
        </div>
        
        {/* Current Time */}
        <div className="bg-blue-900 p-6 rounded-lg mb-8">
          <div className="text-xl mb-2">Current Moment</div>
          <div className="text-6xl font-mono">
            {hour}:{minute.toString().padStart(2, '0')}
          </div>
          <div className="text-xl text-blue-300 mt-2">
            Hour {hour} of your day
          </div>
          
          {/* Day Progress Bar */}
          <DayProgress currentHour={hour} />
        </div>
        
        {/* Time Remaining */}
        <div className="bg-indigo-900 p-6 rounded-lg">
          <div className="text-xl mb-2">Time Remaining Today</div>
          <div className="text-5xl font-mono">
            {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
          </div>
          <div className="text-xl text-indigo-300 mt-4">
            <div>Quantifiable Results Today: {todaysResultsCount}</div>
            <button className="mt-2 px-3 py-1 text-sm bg-indigo-700 rounded">
              See More
            </button>
          </div>
        </div>
        
        {/* Timeline selector */}
        <TimelineSelector 
          activeTimeline={activeTimeline} 
          setActiveTimeline={setActiveTimeline} 
        />
        
        {/* Dynamic Timeline Views */}
        {activeTimeline === 'ad' && (
          <ADTimeline 
            currentTime={currentTime} 
            quantumCalendar={quantumCalendar} 
          />
        )}
        
        {activeTimeline === 'lifetime' && (
          <LifetimeTimeline 
            currentTime={currentTime} 
            quantumCalendar={quantumCalendar} 
          />
        )}
        
        {activeTimeline === 'project' && (
          <ProjectTimeline 
            currentTime={currentTime} 
            quantumCalendar={quantumCalendar} 
          />
        )}
        
        {activeTimeline === 'daily' && (
          <DailyTimeline 
            currentTime={currentTime} 
            quantumCalendar={quantumCalendar} 
          />
        )}
      </div>
    </div>
  );
};

export default QuantumClock;