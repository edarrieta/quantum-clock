import React from 'react';

const ADTimeline = ({ currentTime, quantumCalendar }) => {
  const adDays = quantumCalendar.getDaysSinceADStart(currentTime);
  const adPosition = quantumCalendar.getQuantumPosition(adDays);
  const yearsCompleted = quantumCalendar.getYearsCompleted(currentTime);
  
  return (
    <div className="timeline-section bg-gray-800 p-6 rounded-lg mt-4 w-full">
      <h2 className="text-xl text-blue-400 mb-4">A.D. Timeline (Quantum Format)</h2>
      <div className="timeline-info">
        <div className="text-sm text-gray-400 mb-1">Timeline Position</div>
        <div className="text-lg mb-4">
          {adPosition.day === "Leap" 
            ? `This is Leap Day of Year ${adPosition.year} of A.D.`
            : adPosition.day === "Quantum" 
              ? `This is Quantum Day of Year ${adPosition.year} of A.D.`
              : `This is Day ${adPosition.day} of Week ${adPosition.week} of Month ${adPosition.month} of Year ${adPosition.year}`
          }
        </div>
        
        <div className="text-sm text-gray-400 mb-1">Years Completed</div>
        <div className="text-lg">
          {yearsCompleted} years completed before
        </div>
      </div>
    </div>
  );
};

export default ADTimeline;