import React, { useState } from "react";
import {
  Search,
  Plus,
  Filter,
  Grid,
  List,
  MoreVertical,
  Bell,
  Settings,
  User,
  TrendingUp,
  Activity,
  Clock,
  Globe,
} from "lucide-react";
import ProjectCard from "../../components/Ui/ProjectCard";
import UsageStats from "../../components/Ui/UsageStats";
import RecentPreviews from "../../components/Ui/RecentPreviews";

const AdminDashboardPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const projects = [
    {
      id: 1,
      name: "samir-kayamkhani",
      domain: "samir-kayamkhani.vercel.app",
      repo: "Samir-kyamkhani/my-portf...",
      status: "skills added",
      lastUpdate: "Jun 11 on main",
      color: "bg-black",
      visits: "2.4k",
      performance: 95,
    },
    {
      id: 2,
      name: "qitchendummy",
      domain: "qitchendummy.vercel.app",
      repo: "Samir-kyamkhani/qitchen",
      status: "done",
      lastUpdate: "Apr 23 on main",
      color: "bg-gray-800",
      visits: "1.8k",
      performance: 88,
    },
    {
      id: 3,
      name: "jewelry",
      domain: "jewelry-orpin.vercel.app",
      repo: "Samir-kyamkhani/jewelry",
      status: "done",
      lastUpdate: "Apr 23 on main",
      color: "bg-gray-900",
      visits: "3.2k",
      performance: 92,
    },
  ];

  const stats = [
    {
      icon: TrendingUp,
      label: "Total Projects",
      value: "24",
      change: "+12%",
      color: "text-black",
    },
    {
      icon: Activity,
      label: "Active Deployments",
      value: "18",
      change: "+5%",
      color: "text-black",
    },
    {
      icon: Clock,
      label: "Avg. Build Time",
      value: "2.3m",
      change: "-18%",
      color: "text-black",
    },
    {
      icon: Globe,
      label: "Total Visits",
      value: "45.2k",
      change: "+28%",
      color: "text-black",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.domain.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const StatsCard = ({ stat }) => {
    const Icon = stat.icon;
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {stat.value}
            </p>
            <p className={`text-sm ${stat.color} mt-1`}>{stat.change}</p>
          </div>
          <div className={`p-3 rounded-lg bg-gray-50`}>
            <Icon size={24} className="text-gray-600" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      {/* Controls */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="all">All Status</option>
              <option value="done">Done</option>
              <option value="skills added">Skills Added</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors shadow-sm">
              <Plus size={16} />
              New Project
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <RecentPreviews />
        <UsageStats />
      </div>

      {/* Projects */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Projects ({filteredProjects.length})
          </h2>
          <Filter size={16} className="text-gray-400" />
        </div>

        <div className={`grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

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
      </div>
    </div>
  );
};

export default AdminDashboardPage;
