import React from 'react';
import { Globe } from 'lucide-react';

const RecentPreviews = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Previews</h3>
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <Globe size={24} className="text-gray-400" />
        </div>
        <p className="text-gray-600 text-sm max-w-xs">
          Preview deployments that you have recently visited or created will appear here.
        </p>
      </div>
    </div>
  );
};

export default RecentPreviews;