import React, { useEffect, useState } from "react";
import {
  Search,
  Plus,
  TrendingUp,
  Activity,
  Clock,
  Globe,
} from "lucide-react";

import ProjectCard from "../../components/Ui/ProjectCard";
import UsageStats from "../../components/Ui/UsageStats";
import RecentPreviews from "../../components/Ui/RecentPreviews";
import ProjectAdd from "./ProjectAdd";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../redux/slices/projectSlice";
import Loader from "../../components/Loader";

const StatsCard = ({ stat }) => {
  const Icon = stat.icon;
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{stat.label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
          <p className={`text-sm ${stat.color} mt-1`}>{stat.change}</p>
        </div>
        <div className="p-3 rounded-lg bg-gray-50">
          <Icon size={24} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

const AdminDashboardPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showAddProject, setShowAddProject] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const { project: projectState, isLoading } = useSelector((state) => state.project || {});

  const projects = Array.isArray(projectState)
    ? projectState
    : Array.isArray(projectState?.data)
      ? projectState.data
      : [];

  if (isLoading) {
    <Loader />

  }

  const stats = [
    { icon: TrendingUp, label: "Total Projects", value: "24", change: "+12%", color: "text-black" },
    { icon: Activity, label: "Active Deployments", value: "18", change: "+5%", color: "text-black" },
    { icon: Clock, label: "Avg. Build Time", value: "2.3m", change: "-18%", color: "text-black" },
    { icon: Globe, label: "Total Visits", value: "45.2k", change: "+28%", color: "text-black" },
  ];

  const filteredProjects = projects?.map((project) => {
    let status = "pending";
    if (project.subdomain) {
      status = "done";
    } else if (project.gitUrl) {
      status = "skills added";
    }
    return { ...project, status };
  })
    .filter((project) => {
      const name = project.name || "";
      const domain = project.domain || "";
      const matchesSearch =
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        domain.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter =
        filterStatus === "all" || project.status === filterStatus;

      return matchesSearch && matchesFilter;
    });

  // Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 rounded-2xl p-4 sm:p-6 md:p-8">

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>

        {/* Usage / Recent Previews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <RecentPreviews />
          <UsageStats />
        </div>

        {/* Projects List */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-md hover:shadow-lg">
          <div className="flex items-start sm:items-center flex-col sm:flex-row space-y-4 sm:justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">
              Projects ({filteredProjects.length})
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1 w-full">
                {/* Search Input */}
                <div className="relative w-full sm:w-auto sm:flex-1">
                  <Search
                    size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1); // reset page on search
                    }}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                {/* Filter Dropdown */}
                <select
                  value={filterStatus}
                  onChange={(e) => {
                    setFilterStatus(e.target.value);
                    setCurrentPage(1); // reset page on filter
                  }}
                  className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="all">All Status</option>
                  <option value="done">Done</option>
                  <option value="skills added">Skills Added</option>
                </select>
              </div>

              {/* New Project Button */}
              <button
                onClick={() => setShowAddProject(true)}
                className="w-full sm:w-auto inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors shadow-sm"
              >
                <Plus size={16} />
                New Project
              </button>
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {paginatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* No Projects */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded border border-gray-300 text-sm hover:bg-gray-100 disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 rounded text-sm border ${currentPage === i + 1
                    ? "bg-black text-white"
                    : "border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded border border-gray-300 text-sm hover:bg-gray-100 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      {showAddProject && (
        <ProjectAdd onClose={() => setShowAddProject(false)} />
      )}
    </>
  );
};

export default AdminDashboardPage;
