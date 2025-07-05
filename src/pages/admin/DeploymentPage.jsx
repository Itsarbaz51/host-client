import { Calendar, ChevronDown, ExternalLink, GitBranch, MoreHorizontal } from 'lucide-react'
import React, { useState } from 'react'

function DeploymentPage() {
  const [selectedEnvironment, setSelectedEnvironment] = useState('All Environments');
  const [selectedStatus, setSelectedStatus] = useState('Status');

  const deployments = [
    {
      id: 'HBHVXJCf',
      status: 'Ready',
      statusTime: '16s (1hr ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: '6ae9448',
      message: 'Update EpI.jsx',
      date: 'Jun 24',
      user: 'thearbaz51'
    },
    {
      id: 'GTv89hE8p',
      status: 'Ready',
      statusTime: '17s (1hr ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: '8a8d-39',
      message: 'Update data.js',
      date: 'Jun 24',
      user: 'thearbaz51'
    },
    {
      id: '6Aj3WwbK',
      status: 'Ready',
      statusTime: '12s (46d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: '51db8ef',
      message: 'Update code',
      date: 'May 20',
      user: 'thearbaz51'
    },
    {
      id: 'CJa53V985',
      status: 'Ready',
      statusTime: '14s (66d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: '23c8e9d',
      message: 'ADD NEW CV',
      date: 'Apr 30',
      user: 'thearbaz51'
    },
    {
      id: '7ozLBABQM',
      status: 'Ready',
      statusTime: '13s (67d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: '85a2157',
      message: 'Update WhatsappButt...',
      date: 'Apr 29',
      user: 'thearbaz51'
    },
    {
      id: '3xmqzE1t6',
      status: 'Ready',
      statusTime: '12s (67d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: 'bda9386',
      message: 'Update WhatsappButt...',
      date: 'Apr 29',
      user: 'thearbaz51'
    },
    {
      id: '47q8zC5pd',
      status: 'Ready',
      statusTime: '12s (72d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: '8c86762',
      message: 'Update Counter.jsx',
      date: 'Apr 24',
      user: 'thearbaz51'
    },
    {
      id: '3mPWc8pZ4',
      status: 'Ready',
      statusTime: '12s (72d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: '85a8785',
      message: 'addloader & view btn',
      date: 'Apr 24',
      user: 'thearbaz51'
    },
    {
      id: 'A9renNtbk',
      status: 'Ready',
      statusTime: '13s (72d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: '9f77384',
      message: 'fix error',
      date: 'Apr 24',
      user: 'thearbaz51'
    },
    {
      id: '7h3T5Qlc',
      status: 'Ready',
      statusTime: '12s (72d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: '147cc50',
      message: 'add view btn and new ...',
      date: 'Apr 24',
      user: 'thearbaz51'
    },
    {
      id: 'ZEzVtJa5n',
      status: 'Ready',
      statusTime: '12s (72d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: '7523f13',
      message: 'add whatsapp btn',
      date: 'Apr 24',
      user: 'thearbaz51'
    },
    {
      id: 'BVTnT7vdA',
      status: 'Ready',
      statusTime: '16s (73d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: '639e89e',
      message: 'fix links',
      date: 'Apr 23',
      user: 'thearbaz51'
    },
    {
      id: '8r7MT4Ynm',
      status: 'Ready',
      statusTime: '15s (73d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: 'd876b9e',
      message: 'add links projects',
      date: 'Apr 23',
      user: 'thearbaz51'
    },
    {
      id: 'FRbQjnRcz',
      status: 'Ready',
      statusTime: '21s (73d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: 'a816fed',
      message: 'add project and experi...',
      date: 'Apr 23',
      user: 'thearbaz51'
    },
    {
      id: 'GXEfDDA2',
      status: 'Ready',
      statusTime: '16s (73d ago)',
      environment: 'gym',
      branch: 'main',
      commit: '62bf675',
      message: 'first commit',
      date: 'Apr 23',
      user: 'thearbaz51'
    },
    {
      id: '2FpM8CmFr5',
      status: 'Ready',
      statusTime: '10s (73d ago)',
      environment: 'cafe',
      branch: 'main',
      commit: '124c35a',
      message: 'fixed',
      date: 'Apr 23',
      user: 'thearbaz51'
    },
    {
      id: 'EozG8yo5f',
      status: 'Ready',
      statusTime: '15s (127d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: 'a324fd7',
      message: 'add photo',
      date: 'Feb 28',
      user: 'thearbaz51'
    },
    {
      id: '4jzIzhoeEC',
      status: 'Ready',
      statusTime: '16s (127d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: '6cd76d2',
      message: 'update resume',
      date: 'Feb 28',
      user: 'thearbaz51'
    },
    {
      id: 'H8EcAnbhT',
      status: 'Ready',
      statusTime: '16s (127d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: 'fbb321c',
      message: 'add Link',
      date: 'Feb 28',
      user: 'thearbaz51'
    },
    {
      id: '9j4J4Kztd',
      status: 'Ready',
      statusTime: '16s (127d ago)',
      environment: 'arbaz.dev',
      branch: 'main',
      commit: '1fe6cc2',
      message: 'arbazdev',
      date: 'Feb 28',
      user: 'thearbaz51'
    }
  ];

  const getEnvironmentColor = (env) => {
    switch (env) {
      case 'arbaz.dev':
        return 'bg-white text-black border border-gray-300';
      case 'gym':
        return 'bg-black text-white border border-gray-700';
      case 'cafe':
        return 'bg-gray-800 text-white border border-gray-600';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">Deployments</h1>
          <p className="text-gray-600 text-lg">
            All deployments from{' '}
            <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded border">
              arbaz-kayamkhani-projects
            </span>
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm">
              <Calendar className="w-4 h-4" />
              <span>Select Date Range</span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm">
                <span>{selectedEnvironment}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-black rounded-full border border-gray-300"></div>
              <div className="w-3 h-3 bg-gray-600 rounded-full border border-gray-300"></div>
            </div>
            <div className="relative">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm">
                <span>{selectedStatus}</span>
                <span className="text-gray-500">6/6</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Deployments Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Deployment ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Environment
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Branch & Commit
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {deployments.map((deployment, index) => (
                  <tr 
                    key={deployment.id} 
                    className={`hover:bg-gray-50 transition-colors duration-150 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="px-6 py-5">
                      <div className="flex flex-col space-y-1">
                        <div className="font-mono text-sm font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded inline-block w-fit">
                          {deployment.id}
                        </div>
                        <div className="text-xs text-gray-500 font-medium">Production</div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-black rounded-full border border-gray-300"></div>
                        <span className="text-sm font-semibold text-gray-900">Ready</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1 font-mono">{deployment.statusTime}</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                          <span className="text-gray-700 text-sm font-bold">▼</span>
                        </div>
                        <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${getEnvironmentColor(deployment.environment)}`}>
                          {deployment.environment}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center space-x-2 mb-2">
                        <GitBranch className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-semibold text-gray-900">{deployment.branch}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400">~</span>
                        <span className="text-xs font-mono font-semibold text-black bg-gray-100 px-2 py-1 rounded">
                          {deployment.commit}
                        </span>
                        <span className="text-xs text-gray-600">{deployment.message}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="text-sm text-gray-900">
                        <span className="font-semibold">{deployment.date}</span> by{' '}
                        <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                          {deployment.user}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center space-x-2">
                        <button className="w-8 h-8 bg-white rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm">
                          <ExternalLink className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-200">
                          <MoreHorizontal className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <button className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Load More Deployments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeploymentPage