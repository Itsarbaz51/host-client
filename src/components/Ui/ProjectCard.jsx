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
  <div className="group relative bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>

    <div className="p-6">
      <div className="flex items-start justify-between mb-4 group">
        {/* Left Section: Icon + Text */}
        <div className="flex items-start gap-4">
          {/* Colored Icon */}
          <div
            className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
          >
            {project.name.charAt(0).toUpperCase()}
          </div>

          {/* Project Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-black transition-colors">
              <Link to={`project-detail/${project.name}`}>{project.name}</Link>
            </h3>
            <p className="text-sm text-gray-600 mb-1">{project.domain}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <Github
                size={20}
                className="text-white bg-black p-1 font-bold rounded-full"
              />

              {project.repo}
            </p>
          </div>
        </div>

        {/* Right: More button */}
        <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-lg">
          <MoreVertical size={16} className="text-gray-500" />
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
            project.status
          )}`}
        >
          {project.status}
        </span>
        <span className="text-xs text-gray-500">{project.lastUpdate}</span>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Globe size={14} className="text-gray-400" />
            <span className="text-gray-600">{project.visits}</span>
          </div>
          <div className="flex items-center gap-1">
            <Activity size={14} className="text-gray-400" />
            <span className="text-gray-600">{project.performance}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
