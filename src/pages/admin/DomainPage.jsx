import React, { useState } from 'react';
import {
  Search,
  Filter,
  MoreHorizontal,
  Settings,
  ArrowRightLeft,
  RotateCcw,
  Trash2,
  Globe,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

const DomainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchNewDomain, setSearchNewDomain] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [assignedDomains, setAssignedDomains] = useState({});

  const domains = [
    { id: 1, name: 'dev.two', type: 'Third Party', owner: 'itsarbaz51', date: 'Apr 12' },
    { id: 2, name: 'primewebsolution.in', type: 'Third Party', owner: 'itsarbaz51', date: 'Apr 12' },
  ];

  const projects = [
    { id: 1, name: 'my-portfolio', url: 'my-portfolio.vercel.app' },
    { id: 2, name: 'ecommerce-store', url: 'ecom.vercel.app' },
    { id: 3, name: 'blog-app', url: 'blog.vercel.app' },
  ];

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedDomains(!selectAll ? domains.map((d) => d.id) : []);
  };

  const handleSelectDomain = (id) => {
    setSelectedDomains((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const DropdownMenu = ({ domainName }) => (
    <div className="absolute right-0 top-8 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
      <div className="py-1">
        <div className="px-3 py-2 text-xs font-medium text-gray-500 border-b">{domainName}</div>
        {[
          { icon: <Settings className="w-4 h-4" />, label: 'Configure' },
          { icon: <ArrowRightLeft className="w-4 h-4" />, label: 'Move teams' },
          { icon: <RotateCcw className="w-4 h-4" />, label: 'Renew' },
        ].map(({ icon, label }) => (
          <button key={label} className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            {icon}
            <span>{label}</span>
          </button>
        ))}
        <div className="border-t mt-1">
          <button className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-3xl font-bold text-gray-900">Domains</h1>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              {['Buy', 'Add Existing'].map((label) => (
                <button
                  key={label}
                  onClick={() => setModalType(label === 'Buy' ? 'buy' : 'existing')}
                  className="px-4 py-2 text-sm font-medium border rounded-lg border-gray-300 hover:bg-gray-100"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="w-full sm:max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="p-2 border border-gray-300 rounded-lg text-gray-400 hover:text-gray-600">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Domain Table */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 overflow-auto">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-3 bg-gray-50 border-b flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">Select {selectAll ? 'none' : 'all'}</span>
            </div>
            {/* <button className="text-gray-400 hover:text-gray-600 p-1">
              <MoreHorizontal className="w-5 h-5" />
            </button> */}
          </div>

          {domains.length > 0 ? (
            domains.map((domain) => (
              <div key={domain.id} className="px-6 py-4 hover:bg-gray-50 ">
                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 sm:items-center">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedDomains.includes(domain.id)}
                      onChange={() => handleSelectDomain(domain.id)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {domain.name}
                        {assignedDomains[domain.name] && (
                          <span className="ml-2 text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                            {assignedDomains[domain.name]}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">{domain.type}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">{domain.owner}</span>
                    <span className="text-sm text-gray-500">{domain.date}</span>
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600">{domain.owner.charAt(0).toUpperCase()}</span>
                    </div>
                    <div className="relative">
                      <button onClick={() => toggleDropdown(domain.id)} className="p-1 text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                      {activeDropdown === domain.id && <DropdownMenu domainName={domain.name} />}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center py-24 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 border border-gray-700 rounded-md mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Add a domain</h2>
                <p className="text-sm mb-6">Add a domain that you can connect to your team’s projects.</p>
                <div className="flex justify-center gap-2">
                  <button className="px-4 py-2 bg-white border border-gray-300 text-black text-sm rounded-md hover:bg-gray-100">
                    Buy Domain
                  </button>
                  <button className="px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-900">
                    Add Existing Domain
                  </button>
                </div>
                <div className="mt-4">
                  <button className="text-xs flex items-center gap-1">
                    Learn more <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop for Dropdown */}
      {activeDropdown && (
        <div className="fixed inset-0 z-0" onClick={() => setActiveDropdown(null)} />
      )}

      {/* Modal for Add/Buy */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center backdrop-blur-sm p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-semibold mb-4 text-center">
              {modalType === 'buy' ? 'Find Your Perfect Domain' : 'Add an Existing Domain'}
            </h2>
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={modalType === 'buy' ? 'Search domain...' : 'Enter your domain...'}
                  value={searchNewDomain}
                  onChange={(e) => setSearchNewDomain(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {modalType === 'existing' && searchNewDomain && (
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <p className="text-sm mb-2">Assign to project</p>
                  <div className="space-y-2">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => {
                          setAssignedDomains((prev) => ({
                            ...prev,
                            [searchNewDomain]: project.name,
                          }));
                          setSearchNewDomain('');
                          setModalType(null);
                        }}
                        className="flex justify-between items-center bg-white p-3 rounded-md shadow hover:bg-gray-50 cursor-pointer"
                      >
                        <div>
                          <p className="text-sm font-medium">{project.name}</p>
                          <p className="text-xs text-gray-500">{project.url}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  className="text-sm text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    setSearchNewDomain('');
                    setModalType(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default DomainPage;
