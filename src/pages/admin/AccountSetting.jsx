import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Sidebar from './accoount-setting-sidebar/Sidebar';
import General from './accountSetting/General';
import Billing from './accountSetting/Billing';
import Invoices from './accountSetting/Invoices';

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState('General');


  return (
    <div className="bg-gray-50 flex flex-col md:flex-row max-w-7xl mx-auto h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 shadow-sm md:sticky md:top-0 h-64 md:h-screen overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">Account Settings</h1>
        </div>
        <Sidebar className="mt-0" activeTab={activeTab} onChange={setActiveTab} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
        {activeTab === 'General' && (
          <General />
        )}

        {activeTab === 'Billing' && (
          <Billing />
        )}

        {activeTab === 'Invoices' && (
          <Invoices />
        )}
      </main>
    </div>
  );
}

