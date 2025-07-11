import React from 'react';

const UsageStats = () => {
  const stats = [
    { label: 'Image Optimization - Transformations', value: '82 / 5K', progress: 2 },
    { label: 'Image Optimization - Cache Writes', value: '1.4K / 100K', progress: 14 },
    { label: 'Image Optimization - Cache Reads', value: '2K / 300K', progress: 7 }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-md hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Usage</h3>
        <button className="px-3 py-1 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition-colors">
          Upgrade
        </button>
      </div>
      <div className="text-sm text-gray-600 mb-4">
        Last 30 days
        <br />
        <span className="text-xs text-gray-500">Updated just now</span>
      </div>
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-sm text-gray-700">{stat.label}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsageStats;