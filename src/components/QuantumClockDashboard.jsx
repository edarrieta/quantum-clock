import React, { useState, useEffect } from 'react';
import QuantumClock from './clock/QuantumClock';
import ResultsDashboard from './dashboard/ResultsDashboard';
import { QuantumCalendar } from '../utils/QuantumCalendar';

/**
 * Main container component that handles switching between the 
 * Quantum Clock and Results Dashboard views
 */
const QuantumClockDashboard = () => {
  // Tab state
  const [activeTab, setActiveTab] = useState('clock'); // 'clock' or 'results'
  
  // Time state
  const [currentTime, setCurrentTime] = useState(new Date());
  const [quantumCalendar] = useState(new QuantumCalendar());
  
  // Sample results data - in a real app, this would come from a database
  const [results, setResults] = useState([
    { 
      id: 1, 
      type: 'App', 
      name: 'Quantum Clock', 
      date: '2025-03-08', 
      impact: ['Time orientation', 'Productivity transformation'] 
    },
    { 
      id: 2, 
      type: 'Document', 
      name: 'Temporal Theory', 
      date: '2025-03-08', 
      impact: ['Knowledge expansion', 'Framework creation'] 
    },
    { 
      id: 3, 
      type: 'System', 
      name: 'Daily Result Tracking', 
      date: '2025-03-07', 
      impact: ['Accountability', 'Progress visualization'] 
    },
  ]);
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Add a new result
  const addResult = (newResult) => {
    setResults([
      ...results, 
      { ...newResult, id: results.length + 1 }
    ]);
  };
  
  return (
    <div className="flex flex-col h-screen p-6">
      {/* Navigation Tabs */}
      <div className="flex mb-4">
        <button 
          className={`px-4 py-2 mr-2 rounded-t-lg ${
            activeTab === 'clock' ? 'bg-blue-600' : 'bg-gray-700'
          }`}
          onClick={() => setActiveTab('clock')}
        >
          Quantum Clock
        </button>
        <button 
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === 'results' ? 'bg-blue-600' : 'bg-gray-700'
          }`}
          onClick={() => setActiveTab('results')}
        >
          Results Dashboard
        </button>
      </div>
      
      {/* Content based on active tab */}
      {activeTab === 'clock' ? (
        <QuantumClock 
          currentTime={currentTime} 
          quantumCalendar={quantumCalendar} 
          results={results}
        />
      ) : (
        <ResultsDashboard 
          currentTime={currentTime} 
          quantumCalendar={quantumCalendar} 
          results={results}
          setResults={setResults}
          onAddResult={addResult}
        />
      )}
    </div>
  );
};

export default QuantumClockDashboard;