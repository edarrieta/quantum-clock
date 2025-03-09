import React from 'react';

const ProjectTimeline = ({ currentTime, quantumCalendar }) => {
  const projectDays = quantumCalendar.getDaysSinceProjectStart(currentTime);
  const projectPosition = quantumCalendar.getQuantumPosition(projectDays);
  const projectDaysRemaining = quantumCalendar.getDaysRemainingInProject(currentTime);
  
  // Default project duration is 365 days (1 year)
  const projectTotalDays = 365;
  const projectProgress = projectDays > 0 ? (projectDays / projectTotalDays) * 100 : 0;
  
  return (
    <div className="timeline-section bg-gray-800 p-6 rounded-lg mt-4 w-full">
      <h2 className="text-xl text-green-400 mb-4">Quantum Project Timeline</h2>
      <div className="timeline-info">
        <div className="text-sm text-gray-400 mb-1">Timeline Position</div>
        <div className="text-lg mb-4">
          {projectDays <= 0 
            ? 'Project has not started yet'
            : projectPosition.day === "Leap" 
              ? `This is Leap Day of Year ${projectPosition.year} of Quantum Project`
              : projectPosition.day === "Quantum" 
                ? `This is Quantum Day of Year ${projectPosition.year} of Quantum Project`
                : `This is Day ${projectPosition.day} of Week ${projectPosition.week} of Month ${projectPosition.month} of Year ${projectPosition.year} of Quantum Project`
          }
        </div>
        
        <div className="text-sm text-gray-400 mb-2">Project Progress</div>
        <div className="progress-container h-2 bg-gray-700 rounded-full mb-4">
          <div 
            className="progress-bar h-full bg-green-500 rounded-full"
            style={{ width: `${Math.min(100, projectProgress)}%` }}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-700 p-3 rounded-lg text-center">
            <div className="text-xl font-bold">{Math.max(0, projectDays).toLocaleString()}</div>
            <div className="text-xs text-gray-400">Current Day</div>
          </div>
          <div className="bg-gray-700 p-3 rounded-lg text-center">
            <div className="text-xl font-bold">{projectTotalDays.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Days Total</div>
          </div>
        </div>
        
        <div className="bg-gray-700 p-3 rounded-lg text-center">
          <div className="text-xl font-bold text-green-300">{projectDaysRemaining.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Days Until Deadline</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;