import React from 'react';

const sidebarItems = ['General', 'Billing', 'Invoices'];

function Sidebar({ className = '', activeTab, onChange }) {
  return (
    <nav className={`mt-6 ${className}`}>
      {sidebarItems.map((name) => (
        <button
          key={name}
          onClick={() => onChange(name)}
          className={`w-full text-left block px-6 py-3 text-sm font-medium rounded-md transition cursor-pointer ${
            activeTab === name
              ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          {name}
        </button>
      ))}
    </nav>
  );
}

export default Sidebar;
