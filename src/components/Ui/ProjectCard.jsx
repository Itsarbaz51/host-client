import { MoreVertical, Activity, Globe, Github } from "lucide-react";
import { Link } from "react-router-dom";

const getStatusColor = (status) => {
  switch (status) {
    case "done":
      return "bg-white text-black border-gray-300";
    case "skills added":
      return "bg-black text-white border-gray-800";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const ProjectCard = ({ project }) => (
  <div className="group relative bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden w-full max-w-full sm:max-w-md mx-auto">
    <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>

    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 group">
        {/* Top: Icon + Text */}
        <div className="flex flex-row sm:flex-row items-start gap-4">
          {/* Icon */}
          <div
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${project.color} flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md`}
          >
            {project.name.charAt(0).toUpperCase()}
          </div>

          {/* Project Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-black transition-colors">
              <Link to={`project-detail/${project.name}`}>{project.name}</Link>
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-1 truncate">{project.domain}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1 truncate">
              <Github size={16} className="text-white bg-black p-1 rounded-full" />
              {project.repo}
            </p>
          </div>
        </div>

        {/* Right: Button */}
        <button className="self-start sm:self-auto mt-2 sm:mt-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-lg">
          <MoreVertical size={16} className="text-gray-500" />
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-y-2 mb-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
            project.status
          )}`}
        >
          {project.status}
        </span>
        <span className="text-xs text-gray-500">{project.lastUpdate}</span>
      </div>

      <div className="flex flex-wrap items-center justify-between text-sm gap-y-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs sm:text-sm">
            <Globe size={14} className="text-gray-400" />
            <span className="text-gray-600">{project.visits}</span>
          </div>
          <div className="flex items-center gap-1 text-xs sm:text-sm">
            <Activity size={14} className="text-gray-400" />
            <span className="text-gray-600">{project.performance}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
  