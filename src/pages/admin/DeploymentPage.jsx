import {
  Calendar,
  ChevronDown,
  ExternalLink,
  GitBranch,
  MoreHorizontal,
  Search,
  Filter,
  RefreshCw,
  Eye,
  Copy,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import React, { useState } from "react";

function DeploymentPage() {
  const [selectedEnvironment, setSelectedEnvironment] = useState("All Environments");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [searchQuery, setSearchQuery] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const deployments = [
    {
      id: "HBHVXJCf",
      status: "Ready",
      statusTime: "16s (1hr ago)",
      environment: "arbaz.dev",
      branch: "main",
      commit: "6ae9448",
      message: "Update EpI.jsx",
      date: "Jun 24",
      user: "thearbaz51",
    },
    {
      id: "GTv89hE8p",
      status: "Ready",
      statusTime: "17s (1hr ago)",
      environment: "arbaz.dev",
      branch: "main",
      commit: "8a8d-39",
      message: "Update data.js",
      date: "Jun 24",
      user: "thearbaz51",
    },
    {
      id: "6Aj3WwbK",
      status: "Ready",
      statusTime: "12s (46d ago)",
      environment: "arbaz.dev",
      branch: "main",
      commit: "51db8ef",
      message: "Update code",
      date: "May 20",
      user: "thearbaz51",
    },
    {
      id: "CJa53V985",
      status: "Ready",
      statusTime: "14s (66d ago)",
      environment: "arbaz.dev",
      branch: "main",
      commit: "23c8e9d",
      message: "ADD NEW CV",
      date: "Apr 30",
      user: "thearbaz51",
    },
    {
      id: "7ozLBABQM",
      status: "Building",
      statusTime: "13s (67d ago)",
      environment: "arbaz.dev",
      branch: "main",
      commit: "85a2157",
      message: "Update WhatsappButt...",
      date: "Apr 29",
      user: "thearbaz51",
    },
    {
      id: "3xmqzE1t6",
      status: "Ready",
      statusTime: "12s (67d ago)",
      environment: "arbaz.dev",
      branch: "main",
      commit: "bda9386",
      message: "Update WhatsappButt...",
      date: "Apr 29",
      user: "thearbaz51",
    },
    {
      id: "47q8zC5pd",
      status: "Error",
      statusTime: "12s (72d ago)",
      environment: "arbaz.dev",
      branch: "main",
      commit: "8c86762",
      message: "Update Counter.jsx",
      date: "Apr 24",
      user: "thearbaz51",
    },
    {
      id: "3mPWc8pZ4",
      status: "Ready",
      statusTime: "12s (72d ago)",
      environment: "arbaz.dev",
      branch: "main",
      commit: "85a8785",
      message: "addloader & view btn",
      date: "Apr 24",
      user: "thearbaz51",
    },
    {
      id: "A9renNtbk",
      status: "Ready",
      statusTime: "13s (72d ago)",
      environment: "arbaz.dev",
      branch: "main",
      commit: "9f77384",
      message: "fix error",
      date: "Apr 24",
      user: "thearbaz51",
    },
    {
      id: "7h3T5Qlc",
      status: "Ready",
      statusTime: "12s (72d ago)",
      environment: "arbaz.dev",
      branch: "main",
      commit: "147cc50",
      message: "add view btn and new ...",
      date: "Apr 24",
      user: "thearbaz51",
    },
    {
      id: "ZEzVtJa5n",
      status: "Ready",
      statusTime: "12s (72d ago)",
      environment: "arbaz.dev",
      branch: "main",
      commit: "7523f13",
      message: "add whatsapp btn",
      date: "Apr 24",
      user: "thearbaz51",
    },
    {
      id: "BVTnT7vdA",
      status: "Ready",
      statusTime: "16s (73d ago)",
      environment: "arbaz.dev",
      branch: "main",
      commit: "639e89e",
      message: "fix links",
      date: "Apr 23",
      user: "thearbaz51",
    },
    {
      id: "8r7MT4Ynm",
      status: "Ready",
      statusTime: "15s (73d ago)",
      environment: "arbaz.dev",
      branch: "main",
      commit: "d876b9e",
      message: "add links projects",
      date: "Apr 23",
      user: "thearbaz51",
    },
    {
      id: "FRbQjnRcz",
      status: "Ready",
      statusTime: "21s (73d ago)",
      environment: "arbaz.dev",
      branch: "main",
      commit: "a816fed",
      message: "add project and experi...",
      date: "Apr 23",
      user: "thearbaz51",
    },
    {
      id: "GXEfDDA2",
      status: "Ready",
      statusTime: "16s (73d ago)",
      environment: "gym",
      branch: "main",
      commit: "62bf675",
      message: "first commit",
      date: "Apr 23",
      user: "thearbaz51",
    },
    {
      id: "2FpM8CmFr5",
      status: "Ready",
      statusTime: "10s (73d ago)",
      environment: "cafe",
      branch: "main",
      commit: "124c35a",
      message: "fixed",
      date: "Apr 23",
      user: "thearbaz51",
    },
  ];

  const getEnvironmentColor = (env) => {
    switch (env) {
      case "arbaz.dev":
        return "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-900 border border-blue-200";
      case "gym":
        return "bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700";
      case "cafe":
        return "bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 border border-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-300";
    }
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case "Ready":
        return {
          color: "bg-emerald-500",
          icon: CheckCircle,
          textColor: "text-emerald-700",
          bgColor: "bg-emerald-50",
        };
      case "Building":
        return {
          color: "bg-amber-500",
          icon: Clock,
          textColor: "text-amber-700",
          bgColor: "bg-amber-50",
        };
      case "Error":
        return {
          color: "bg-red-500",
          icon: AlertCircle,
          textColor: "text-red-700",
          bgColor: "bg-red-50",
        };
      default:
        return {
          color: "bg-gray-500",
          icon: Clock,
          textColor: "text-gray-700",
          bgColor: "bg-gray-50",
        };
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const filteredDeployments = deployments.filter(deployment => {
    const matchesSearch = deployment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         deployment.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         deployment.commit.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEnv = selectedEnvironment === "All Environments" || deployment.environment === selectedEnvironment;
    const matchesStatus = selectedStatus === "All Status" || deployment.status === selectedStatus;
    return matchesSearch && matchesEnv && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                  Deployments
                </h1>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  All deployments from{" "}
                  <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded-md border">
                    arbaz-kayamkhani-projects
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleRefresh}
                  className={`flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm ${
                    isRefreshing ? 'animate-spin' : ''
                  }`}
                >
                  <RefreshCw className="w-4 h-4" />
                  <span className="hidden sm:inline">Refresh</span>
                </button>
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded-lg">
                  {filteredDeployments.length} deployments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="">
          {/* Filters */}
          <div className="mb-6 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search deployments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm">
                <Calendar className="w-4 h-4" />
                <span>Date Range</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm">
                <Filter className="w-4 h-4" />
                <span>{selectedEnvironment}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm">
                <span>{selectedStatus}</span>
                <span className="text-gray-500 text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {filteredDeployments.length}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Deployments Table */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50/80 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Deployment
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
                  {filteredDeployments.map((deployment, index) => {
                    const statusConfig = getStatusConfig(deployment.status);
                    const StatusIcon = statusConfig.icon;
                    
                    return (
                      <tr
                        key={deployment.id}
                        className="hover:bg-gray-50/80 transition-colors duration-200 group"
                      >
                        <td className="px-6 py-5">
                          <div className="flex flex-col space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-sm font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded-md">
                                {deployment.id}
                              </span>
                              <button
                                onClick={() => copyToClipboard(deployment.id)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 hover:bg-gray-200 rounded"
                              >
                                <Copy className="w-3 h-3 text-gray-500" />
                              </button>
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              Production
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${statusConfig.color} animate-pulse`}></div>
                            <span className={`text-sm font-semibold ${statusConfig.textColor}`}>
                              {deployment.status}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1 font-mono">
                            {deployment.statusTime}
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border border-gray-200 shadow-sm">
                              <span className="text-gray-700 text-sm font-bold">▼</span>
                            </div>
                            <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${getEnvironmentColor(deployment.environment)} shadow-sm`}>
                              {deployment.environment}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2 mb-2">
                            <GitBranch className="w-4 h-4 text-gray-500" />
                            <span className="text-sm font-semibold text-gray-900">
                              {deployment.branch}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400">~</span>
                            <span className="text-xs font-mono font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded-md">
                              {deployment.commit}
                            </span>
                            <span className="text-xs text-gray-600 truncate max-w-32">
                              {deployment.message}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-sm text-gray-900">
                            <div className="font-semibold">{deployment.date}</div>
                            <div className="text-xs text-gray-500 mt-1">
                              by{" "}
                              <span className="font-mono bg-gray-100 px-2 py-1 rounded-md">
                                {deployment.user}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <button className="w-8 h-8 bg-white rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm">
                              <ExternalLink className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="w-8 h-8 bg-white rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm">
                              <Eye className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-200">
                              <MoreHorizontal className="w-4 h-4 text-gray-500" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden">
              <div className="divide-y  divide-gray-100 gap-10">
                {filteredDeployments.map((deployment, index) => {
                  const statusConfig = getStatusConfig(deployment.status);
                  const StatusIcon = statusConfig.icon;
                  
                  return (
                    <div key={deployment.id} className="p-4  hover:bg-gray-50/80 transition-colors duration-200">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded-md">
                            {deployment.id}
                          </span>
                          <button
                            onClick={() => copyToClipboard(deployment.id)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Copy className="w-3 h-3 text-gray-500" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="w-8 h-8 bg-white rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-all duration-200 shadow-sm">
                            <ExternalLink className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-all duration-200">
                            <MoreHorizontal className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-2 h-2 rounded-full ${statusConfig.color} animate-pulse`}></div>
                        <span className={`text-sm font-semibold ${statusConfig.textColor}`}>
                          {deployment.status}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">
                          {deployment.statusTime}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-md flex items-center justify-center border border-gray-200 shadow-sm">
                          <span className="text-gray-700 text-xs font-bold">▼</span>
                        </div>
                        <span className={`px-2 py-1 rounded-md text-xs font-semibold ${getEnvironmentColor(deployment.environment)} shadow-sm`}>
                          {deployment.environment}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <GitBranch className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-semibold text-gray-900">
                          {deployment.branch}
                        </span>
                        <span className="text-xs font-mono font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded-md">
                          {deployment.commit}
                        </span>
                      </div>
                      
                      <div className="text-xs text-gray-600 mb-2 truncate">
                        {deployment.message}
                      </div>
                      
                      <div className="text-xs text-gray-500">
                        <span className="font-semibold">{deployment.date}</span> by{" "}
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded-md">
                          {deployment.user}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50/80 flex items-center justify-between">
              <button className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Load More Deployments
              </button>
              <div className="text-xs text-gray-500">
                Showing {filteredDeployments.length} of {deployments.length} deployments
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeploymentPage;