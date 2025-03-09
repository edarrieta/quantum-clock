import React from 'react';

const DayProgress = ({ currentHour }) => {
  // Hour blocks for the day
  // We'll use colors to indicate different activities as per the original design
  // red = sleep/rest, yellow = work/activity, blue = breaks/meals
  const hourBlocks = [
    { hour: 1, type: 'red' },    // Sleep
    { hour: 2, type: 'red' },    // Sleep
    { hour: 3, type: 'red' },    // Sleep
    { hour: 4, type: 'yellow' }, // Activity
    { hour: 5, type: 'yellow' }, // Activity
    { hour: 6, type: 'yellow' }, // Activity
    { hour: 7, type: 'yellow' }, // Activity
    { hour: 8, type: 'blue' },   // Breakfast
    { hour: 9, type: 'yellow' }, // Activity
    { hour: 10, type: 'yellow' },// Activity
    { hour: 11, type: 'yellow' },// Activity
    { hour: 12, type: 'yellow' },// Activity
    { hour: 13, type: 'blue' },  // Lunch
    { hour: 14, type: 'yellow' },// Activity
    { hour: 15, type: 'yellow' },// Activity
    { hour: 16, type: 'yellow' },// Activity
    { hour: 17, type: 'yellow' },// Activity
    { hour: 18, type: 'blue' },  // Dinner
    { hour: 19, type: 'blue' },  // Family time
    { hour: 20, type: 'blue' },  // Family time
    { hour: 21, type: 'blue' },  // Family time
    { hour: 22, type: 'blue' },  // Family time
    { hour: 23, type: 'red' },   // Sleep
    { hour: 24, type: 'red' },   // Sleep
  ];
  
  return (
    <div className="mt-4">
      <div className="text-xs text-gray-400 mb-1">Day Progress:</div>
      <div className="day-progress-bar flex h-3 bg-gray-700 rounded-full overflow-hidden">
        {hourBlocks.map((block, index) => (
          <div 
            key={index}
            className={`fragment flex-1 ${
              block.type === 'red' ? 'bg-red-500' : 
              block.type === 'yellow' ? 'bg-yellow-500' : 'bg-blue-500'
            }`}
            style={{ 
              opacity: block.hour <= currentHour ? 1 : 0.2,
              borderRight: index < 23 ? '1px solid #1f2937' : 'none'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DayProgress;
