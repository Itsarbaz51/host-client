import {
  ChevronDown,
  ExternalLink,
  GitBranch,
  Search,
  RefreshCw,
  Copy,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import { useEffect, useState, useMemo, useRef } from "react";

import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { getAllDeployments } from "../../redux/slices/deploymentSlice";

dayjs.extend(relativeTime);

function DeploymentPage() {
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [searchQuery, setSearchQuery] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);



  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Dropdown open states
  const [envDropdownOpen, setEnvDropdownOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

  const envDropdownRef = useRef(null);
  const statusDropdownRef = useRef(null);

  // Mock data for demonstration - replace with your actual data fetching
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllDeployments())
  }, [dispatch])

  const { data: rawDeployments = [] } = useSelector(state => state.deployment?.deployment)
  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (envDropdownRef.current && !envDropdownRef.current.contains(event.target)) {
        setEnvDropdownOpen(false);
      }
      if (statusDropdownRef.current && !statusDropdownRef.current.contains(event.target)) {
        setStatusDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const deployments = useMemo(
    () =>
      rawDeployments.map((dep) => (
        {
          id: dep.id,
          status: dep.status,
          statusTime: dep.statusTime || "2h ago",
          environment: dep.project.subdomain || "unknown",
          branch: dep.branch || "main",
          commit: dep.commit || "—",
          message: dep.message || "No message",
          date: dep.updatedAt || "DD|MM|YYYY",
          user: dep.project.user.fullName || "user",
        })),
    [rawDeployments]
  );

  const filtered = useMemo(
    () =>
      deployments
        .filter((d) =>
          [d.id, d.branch, d.commit, d.message].join(" ").toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter((d) => (selectedStatus === "All Status" ? true : d.status === selectedStatus)),
    [deployments, searchQuery, selectedStatus]
  );

  // Pagination calculations
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedDeployments = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage]);

  // Reset page if filtered data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filtered]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    dispatch(getAllDeployments())
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const copyToClipboard = (text) => navigator.clipboard.writeText(text);

  const statusOptions = ["All Status", ...Array.from(new Set(deployments.map((d) => d.status)))];

  function getStatusConfig(status) {
    switch (status.toLowerCase()) {
      case "success":
        return { icon: CheckCircle, color: "bg-white", textColor: "text-white", bgColor: "bg-black" };
      case "pending":
        return { icon: Clock, color: "bg-gray-600", textColor: "text-gray-600", bgColor: "bg-gray-100" };
      case "failed":
        return { icon: AlertCircle, color: "bg-black", textColor: "text-black", bgColor: "bg-gray-200" };
      default:
        return { icon: AlertCircle, color: "bg-gray-400", textColor: "text-gray-600", bgColor: "bg-gray-100" };
    }
  }

  function getEnvironmentColor(env) {
    switch (env.toLowerCase()) {
      case "production":
        return "bg-black text-white border-black";
      case "staging":
        return "bg-gray-800 text-white border-gray-800";
      case "development":
        return "bg-gray-200 text-black border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-100";
    }
  }

  const SkeletonRow = () => (
    <tr className="animate-pulse">
      <td className="px-8 py-6">
        <div className="h-5 w-32 bg-gray-200 rounded"></div>
      </td>
      <td className="px-8 py-6">
        <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
        <div className="h-3 w-16 bg-gray-100 rounded"></div>
      </td>
      <td className="px-8 py-6">
        <div className="h-6 w-24 bg-gray-200 rounded-xl"></div>
      </td>
      <td className="px-8 py-6">
        <div className="h-4 w-28 bg-gray-200 rounded mb-2"></div>
        <div className="h-3 w-20 bg-gray-100 rounded"></div>
      </td>
      <td className="px-8 py-6">
        <div className="h-4 w-40 bg-gray-200 rounded mb-1"></div>
        <div className="h-3 w-24 bg-gray-100 rounded"></div>
      </td>
      <td className="px-8 py-6">
        <div className="h-9 w-20 bg-gray-200 rounded-lg"></div>
      </td>
    </tr>
  );



  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-10 py-8 px-8">
        <div className="flex justify-between items-start sm:flex-row flex-col space-y-2.5 sm:space-y-0">
          <div>
            <h1 className="text-4xl font-bold text-black tracking-tight">Deployments</h1>
            <p className="text-gray-600 mt-2 text-base">
              Monitor and manage your application deployments
            </p>
          </div>
          <div className="flex items-center gap-4 ">
            <button
              onClick={handleRefresh}
              className={`flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 `}
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline font-medium">Refresh</span>
            </button>
            <div className="bg-gray-100 px-4 py-3 rounded-lg">
              <span className="text-sm font-semibold text-gray-700">{filtered.length} total</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 px-6 py-6 w-full">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-md outline-none">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 " />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search deployments..."
            className="w-full pl-12 pr-4 py-3 border border-gray-200 bg-white rounded-xl focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
          />
        </div>

        {/* Status Dropdown */}
        <div className="relative w-full sm:w-auto" ref={statusDropdownRef}>
          <button
            onClick={() => {
              setStatusDropdownOpen((v) => !v);
              setEnvDropdownOpen(false);
            }}
            className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-3 px-5 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition duration-200"
          >
            <span className="font-medium text-sm">{selectedStatus}</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
              {filtered.length}
            </span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          {statusDropdownOpen && (
            <div className="absolute top-full mt-2 bg-white border border-gray-200 shadow-lg rounded-xl z-20 min-w-full overflow-hidden">
              {statusOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setSelectedStatus(s);
                    setStatusDropdownOpen(false);
                  }}
                  className={`w-full px-6 py-3 text-left transition-colors ${selectedStatus === s
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>


      {/* Table */}
      <div className="px-8 pb-8">
        {/* Desktop */}
        <div className="hidden lg:block bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                {["Deployment", "Status", "Environment", "Branch & Commit", "Details", "Actions"].map((h) => (
                  <th key={h} className="px-8 py-5 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {isRefreshing
                ? Array.from({ length: itemsPerPage }).map((_, i) => <SkeletonRow key={i} />)
                : paginatedDeployments.length > 0 ? (
                  paginatedDeployments.map((d) => {
                    const s = getStatusConfig(d.status);
                    const StatusIcon = s.icon;
                    return (
                      <tr key={d.id} className="hover:bg-gray-50 transition-colors duration-150">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <span className="font-mono bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium">
                              {d.id}
                            </span>
                            <button
                              onClick={() => copyToClipboard(d.id)}
                              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <Copy className="w-4 h-4 text-gray-500" />
                            </button>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${s.color}`}></div>
                            <span className={`${s.textColor} font-semibold capitalize`}>{d.status}</span>
                          </div>
                          <div className="text-sm text-gray-500 font-mono mt-1">{d.statusTime}</div>
                        </td>
                        <td className="px-8 py-6">
                          <a href={`http://${d.environment}.localhost:8000`} target="_blank" className={`px-4 py-2 rounded-xl text-sm font-semibold border ${getEnvironmentColor(d.environment)}`}>
                            {d.environment}
                          </a>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-2 mb-2">
                            <GitBranch className="w-4 h-4 text-gray-500" />
                            <span className="font-semibold text-gray-900">{d.branch}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => copyToClipboard(d.commit)}
                              className="font-mono text-sm text-gray-600 hover:text-black transition-colors"
                            >
                              {d.commit}
                            </button>
                            <ExternalLink className="w-3 h-3 text-gray-400" />
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="text-gray-900 mb-1">{new Date(d.date).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                          </div>
                          <div className="text-sm text-gray-500">by {d.user}</div>
                        </td>
                        <td className="px-8 py-6">
                          <a href={`http://${d.environment}.localhost:8000`} target="_blank" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                            View
                          </a>
                        </td>
                      </tr>
                    );
                  })) : (
                  <tr>
                    <td colSpan={6} className="text-center py-10 text-gray-500 text-sm">
                      No results found for "<strong>{searchQuery}</strong>"
                    </td>
                  </tr>
                )}
            </tbody>
          </table>

          {/* Pagination controls */}
          <div className="flex justify-between items-center px-8 py-6 border-t border-gray-100 bg-gray-50">
            <div className="text-sm text-gray-600">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filtered.length)} of {filtered.length} deployments
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors font-medium"
              >
                Previous
              </button>
              <span className="px-4 py-2 text-sm font-medium text-gray-700">
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors font-medium"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden space-y-4">
          {isRefreshing ? (
            Array.from({ length: itemsPerPage }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4 animate-pulse">
                <div className="h-4 w-40 bg-gray-200 rounded" />
                <div className="h-3 w-24 bg-gray-100 rounded" />
                <div className="h-4 w-32 bg-gray-200 rounded" />
                <div className="h-3 w-20 bg-gray-100 rounded" />
                <div className="h-9 w-full bg-gray-200 rounded-lg" />
              </div>
            ))
          ) : paginatedDeployments.length > 0 ? (
            paginatedDeployments.map((d) => {
              const s = getStatusConfig(d.status);
              return (
                <div
                  key={d.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-mono bg-gray-100 px-3 py-2 rounded-lg text-sm font-medium">
                      {d.id}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${s.color}`} />
                      <span className={`${s.textColor} font-semibold capitalize`}>{d.status}</span>
                    </div>
                  </div>

                  <div>
                    <span
                      className={`px-4 py-2 rounded-xl text-sm font-semibold border ${getEnvironmentColor(
                        d.environment
                      )}`}
                    >
                      {d.environment}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-gray-500" />
                    <span className="font-semibold text-gray-900">{d.branch}</span>
                    <button
                      onClick={() => copyToClipboard(d.commit)}
                      className="font-mono text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      {d.commit}
                    </button>
                  </div>

                  <div className="text-gray-900">
                    {new Date(d.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="text-sm text-gray-500">by {d.user}</div>

                  <a
                    href={`http://${d.environment}.localhost:8000`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
                      View Details
                    </button>
                  </a>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-center text-sm text-gray-500">
              No deployments found for "<strong>{searchQuery}</strong>"
            </div>
          )}

          {/* Mobile Pagination */}
          {filtered.length > 0 && (
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors font-medium"
              >
                Previous
              </button>
              <span className="text-sm font-medium text-gray-700">
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors font-medium"
              >
                Next
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default DeploymentPage;