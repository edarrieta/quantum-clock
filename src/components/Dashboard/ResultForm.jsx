import React, { useState } from 'react';

const ResultForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'App',
    date: new Date().toISOString().split('T')[0],
    impact: ['']
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleImpactChange = (index, value) => {
    const newImpacts = [...formData.impact];
    newImpacts[index] = value;
    setFormData({ ...formData, impact: newImpacts });
  };
  
  const addImpactField = () => {
    setFormData({ ...formData, impact: [...formData.impact, ''] });
  };
  
  const removeImpactField = (index) => {
    const newImpacts = formData.impact.filter((_, i) => i !== index);
    setFormData({ ...formData, impact: newImpacts });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter out empty impact fields
    const cleanedFormData = {
      ...formData,
      impact: formData.impact.filter(impact => impact.trim() !== '')
    };
    onSubmit(cleanedFormData);
  };
  
  return (
    <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Record New Result</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-1">Result Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-1">Result Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white"
          >
            <option value="App">App</option>
            <option value="Product">Product</option>
            <option value="Document">Document</option>
            <option value="System">System</option>
            <option value="Process">Process</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-1">Impacts</label>
          {formData.impact.map((impact, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={impact}
                onChange={(e) => handleImpactChange(index, e.target.value)}
                className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white"
                placeholder="e.g. Improved productivity"
              />
              {formData.impact.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeImpactField(index)}
                  className="ml-2 bg-red-600 px-3 py-2 rounded-lg"
                >
                  -
                </button>
              )}
              {index === formData.impact.length - 1 && (
                <button
                  type="button"
                  onClick={addImpactField}
                  className="ml-2 bg-green-600 px-3 py-2 rounded-lg"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-700 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 rounded-lg"
          >
            Save Result
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResultForm;