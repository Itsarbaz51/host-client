import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, Settings, ArrowRightLeft, RotateCcw, Trash2 } from 'lucide-react';

const DomainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const domains = [
    {
      id: 1,
      name: 'dev.two',
      type: 'Third Party',
      owner: 'itsarbaz51',
      date: 'Apr 12',
      avatar: '/api/placeholder/32/32'
    },
    {
      id: 2,
      name: 'primewebsolution.in',
      type: 'Third Party',
      owner: 'itsarbaz51',
      date: 'Apr 12',
      avatar: '/api/placeholder/32/32'
    }
  ];

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedDomains([]);
    } else {
      setSelectedDomains(domains.map(d => d.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectDomain = (domainId) => {
    if (selectedDomains.includes(domainId)) {
      setSelectedDomains(selectedDomains.filter(id => id !== domainId));
    } else {
      setSelectedDomains([...selectedDomains, domainId]);
    }
  };

  const toggleDropdown = (domainId) => {
    setActiveDropdown(activeDropdown === domainId ? null : domainId);
  };

  const DropdownMenu = ({ domainName, domainId }) => (
    <div className="absolute right-0 top-8 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
      <div className="py-1">
        <div className="px-3 py-2 text-xs font-medium text-gray-500 border-b border-gray-100">
          {domainName}
        </div>
        <button className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
          <Settings className="w-4 h-4" />
          <span>Configure</span>
        </button>
        <button className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
          <ArrowRightLeft className="w-4 h-4" />
          <span>Move teams</span>
        </button>
        <button className="w-full px-3 py-2 text-left text-sm text-gray-500 hover:bg-gray-50 flex items-center space-x-2">
          <RotateCcw className="w-4 h-4" />
          <span>Renew</span>
        </button>
        <div className="border-t border-gray-100 mt-1">
          <button className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2">
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Domains</h1>
            <div className="flex space-x-3">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Buy
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Add Existing
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Transfer In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white border-b border-gray-200">
        <div className=" px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="ml-4 p-2 text-gray-400 hover:text-gray-600 border border-gray-300 rounded-lg">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Domains Table */}
      <div className=" px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  Select {selectAll ? 'none' : 'all'}
                </span>
              </div>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {domains.map((domain) => (
              <div key={domain.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={selectedDomains.includes(domain.id)}
                      onChange={() => handleSelectDomain(domain.id)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{domain.name}</div>
                      <div className="text-sm text-gray-500">{domain.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">{domain.owner}</span>
                      <span className="text-sm text-gray-500">{domain.date}</span>
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">
                          {domain.owner.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(domain.id)}
                        className="p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
                      >
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                      {activeDropdown === domain.id && (
                        <DropdownMenu domainName={domain.name} domainId={domain.id} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </div>
  );
};

export default DomainPage;