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
        return 'bg-orange-100 text-orange-800';
      case 'gym':
        return 'bg-blue-100 text-blue-800';
      case 'cafe':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  return (<>

    {/* Main Content */}
    < div className="px-4 sm:px-6 lg:px-8 py-8" >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Deployments</h1>
        <p className="text-gray-600">All deployments from <span className="font-mono text-sm">arbaz-kayamkhani-projects</span></p>
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            <Calendar className="w-4 h-4" />
            <span>Select Date Range</span>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              <span>{selectedEnvironment}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          </div>
          <div className="relative">
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              <span>{selectedStatus}</span>
              <span className="text-gray-500">6/6</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Deployments Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody className="divide-y divide-gray-200">
              {deployments.map((deployment) => (
                <tr key={deployment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      <div className="font-mono text-sm font-medium text-gray-900">{deployment.id}</div>
                      <div className="text-xs text-gray-500">Production</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900">Ready</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{deployment.statusTime}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                        <span className="text-orange-600 text-xs font-bold">▼</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getEnvironmentColor(deployment.environment)}`}>
                        {deployment.environment}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <GitBranch className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{deployment.branch}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">~</span>
                      <span className="text-xs font-mono text-gray-700">{deployment.commit}</span>
                      <span className="text-xs text-gray-500">{deployment.message}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{deployment.date} by {deployment.user}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="w-6 h-6 bg-gray-100 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-200">
                        <ExternalLink className="w-3 h-3 text-gray-600" />
                      </button>
                      <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded">
                        <MoreHorizontal className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <button className="text-sm text-gray-500 hover:text-gray-700">Load More</button>
        </div>
      </div>
    </div >

  </>
  )
}

export default DeploymentPage