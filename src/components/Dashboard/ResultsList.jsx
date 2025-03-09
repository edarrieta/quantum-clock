import React, { useState } from 'react';

const ResultsList = ({ results }) => {
  // Group results by category
  const resultsByCategory = {
    'Physical Products': results.filter(r => r.type === 'App' || r.type === 'Product'),
    'Systems & Processes': results.filter(r => r.type === 'System' || r.type === 'Process'),
    'Documents & Knowledge': results.filter(r => r.type === 'Document')
  };
  
  const [expandedCategories, setExpandedCategories] = useState({
    'Physical Products': true,
    'Systems & Processes': true,
    'Documents & Knowledge': true
  });
  
  const toggleCategory = (category) => {
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category]
    });
  };
  
  return (
    <div className="space-y-4">
      {/* Category: Physical Products */}
      <div className="mb-4">
        <div 
          className="bg-gray-700 p-3 rounded-t-lg flex justify-between items-center cursor-pointer"
          onClick={() => toggleCategory('Physical Products')}
        >
          <div className="font-semibold">
            <span className="bg-blue-600 text-xs px-2 py-1 rounded mr-2">App</span>
            Physical Products
          </div>
          <div className="text-gray-400">{resultsByCategory['Physical Products'].length} results</div>
        </div>
        
        {expandedCategories['Physical Products'] && (
          <div className="pl-8 bg-gray-700 bg-opacity-50 rounded-b-lg p-2 space-y-2">
            {resultsByCategory['Physical Products'].map(result => (
              <div key={result.id} className="bg-gray-600 p-3 rounded-lg">
                <div className="flex justify-between">
                  <div className="font-medium">{result.name}</div>
                  <div className="text-xs text-gray-400">{result.date}</div>
                </div>
                <div className="mt-2">
                  <div className="text-xs text-gray-400 mb-1">Impacts:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {result.impact.map((impact, idx) => (
                      <div key={idx} className="bg-indigo-900 text-xs p-2 rounded">
                        <div className="font-semibold">{impact}</div>
                        <div className="text-xs mt-1 text-indigo-300">Enhanced capability</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Category: Systems & Processes */}
      <div className="mb-4">
        <div 
          className="bg-gray-700 p-3 rounded-t-lg flex justify-between items-center cursor-pointer"
          onClick={() => toggleCategory('Systems & Processes')}
        >
          <div className="font-semibold">
            <span className="bg-green-600 text-xs px-2 py-1 rounded mr-2">System</span>
            Systems & Processes
          </div>
          <div className="text-gray-400">{resultsByCategory['Systems & Processes'].length} results</div>
        </div>
        
        {expandedCategories['Systems & Processes'] && (
          <div className="pl-8 bg-gray-700 bg-opacity-50 rounded-b-lg p-2 space-y-2">
            {resultsByCategory['Systems & Processes'].map(result => (
              <div key={result.id} className="bg-gray-600 p-3 rounded-lg">
                <div className="flex justify-between">
                  <div className="font-medium">{result.name}</div>
                  <div className="text-xs text-gray-400">{result.date}</div>
                </div>
                <div className="mt-2">
                  <div className="text-xs text-gray-400 mb-1">Impacts:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {result.impact.map((impact, idx) => (
                      <div key={idx} className="bg-blue-900 text-xs p-2 rounded">
                        <div className="font-semibold">{impact}</div>
                        <div className="text-xs mt-1 text-blue-300">Improved efficiency</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Category: Documents & Knowledge */}
      <div>
        <div 
          className="bg-gray-700 p-3 rounded-t-lg flex justify-between items-center cursor-pointer"
          onClick={() => toggleCategory('Documents & Knowledge')}
        >
          <div className="font-semibold">
            <span className="bg-yellow-600 text-xs px-2 py-1 rounded mr-2">Doc</span>
            Documents & Knowledge
          </div>
          <div className="text-gray-400">{resultsByCategory['Documents & Knowledge'].length} results</div>
        </div>
        
        {expandedCategories['Documents & Knowledge'] && (
          <div className="pl-8 bg-gray-700 bg-opacity-50 rounded-b-lg p-2 space-y-2">
            {resultsByCategory['Documents & Knowledge'].map(result => (
              <div key={result.id} className="bg-gray-600 p-3 rounded-lg">
                <div className="flex justify-between">
                  <div className="font-medium">{result.name}</div>
                  <div className="text-xs text-gray-400">{result.date}</div>
                </div>
                <div className="mt-2">
                  <div className="text-xs text-gray-400 mb-1">Impacts:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {result.impact.map((impact, idx) => (
                      <div key={idx} className="bg-purple-900 text-xs p-2 rounded">
                        <div className="font-semibold">{impact}</div>
                        <div className="text-xs mt-1 text-purple-300">Knowledge enhancement</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="text-center mt-4">
        <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium">See More Results</button>
      </div>
    </div>
  );
};

export default ResultsList;