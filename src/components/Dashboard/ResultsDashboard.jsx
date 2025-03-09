import React, { useState } from 'react';
import GrowthChart from './GrowthChart';
import ImpactDistribution from './ImpactDistribution';
import PeakAnalysis from './PeakAnalysis';
import CounterforceAnalysis from './CounterforceAnalysis';
import ResultsList from './ResultsList';
import TimelineView from './TimelineView';
import ResultForm from './ResultForm';

/**
 * Results Dashboard Component
 * Displays and manages productivity results
 */
const ResultsDashboard = ({ 
  currentTime, 
  quantumCalendar, 
  results, 
  setResults,
  onAddResult 
}) => {
  // Local state
  const [resultView, setResultView] = useState('categories'); // 'categories' or 'timeline'
  const [showResultForm, setShowResultForm] = useState(false);
  
  // Calculate metrics
  const formattedDate = `${currentTime.getFullYear()}-${(currentTime.getMonth() + 1).toString().padStart(2, '0')}-${currentTime.getDate().toString().padStart(2, '0')}`;
  const todaysResults = results.filter(r => r.date === formattedDate);
  const totalImpacts = Array.from(new Set(results.flatMap(r => r.impact))).length;
  
  // Handle form submission
  const handleResultSubmit = (newResult) => {
    onAddResult(newResult);
    setShowResultForm(false);
  };
  
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header with add button */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-4xl font-bold">Results Dashboard</div>
        <button 
          className="px-4 py-2 bg-green-600 rounded-lg font-medium text-white"
          onClick={() => setShowResultForm(true)}
        >
          Record New Result
        </button>
      </div>
      
      {/* Result Form Modal */}
      {showResultForm && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <ResultForm 
            onSubmit={handleResultSubmit} 
            onCancel={() => setShowResultForm(false)} 
          />
        </div>
      )}
      
      {/* Summary Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <div className="grid grid-cols-3 gap-4 h-full">
            <div className="bg-green-800 p-4 rounded-lg text-center flex flex-col justify-center">
              <div className="text-3xl font-bold">{results.length}</div>
              <div>Total Results</div>
            </div>
            <div className="bg-purple-800 p-4 rounded-lg text-center flex flex-col justify-center">
              <div className="text-3xl font-bold">{todaysResults.length}</div>
              <div>Today's Results</div>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg text-center flex flex-col justify-center">
              <div className="text-3xl font-bold">{totalImpacts}</div>
              <div>Total Impacts</div>
            </div>
          </div>
        </div>
        
        {/* Growth Chart */}
        <div className="lg:col-span-2">
          <GrowthChart />
        </div>
        
        {/* Analysis Panels */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          <ImpactDistribution results={results} />
          <PeakAnalysis />
          <CounterforceAnalysis />
        </div>
      </div>
      
      {/* Results List or Timeline View */}
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl">Quantifiable Results</div>
          <div className="flex space-x-2">
            <button 
              className={`px-3 py-1 ${resultView === 'categories' ? 'bg-blue-600' : 'bg-gray-700'} rounded text-sm`}
              onClick={() => setResultView('categories')}
            >
              Categories
            </button>
            <button 
              className={`px-3 py-1 ${resultView === 'timeline' ? 'bg-blue-600' : 'bg-gray-700'} rounded text-sm`}
              onClick={() => setResultView('timeline')}
            >
              Timeline View
            </button>
          </div>
        </div>
        
        {resultView === 'categories' ? (
          <ResultsList results={results} />
        ) : (
          <TimelineView results={results} />
        )}
      </div>
    </div>
  );
};

export default ResultsDashboard;