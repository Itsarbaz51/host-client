import { useState, useRef, useEffect } from "react";
import { MoreVertical, Activity, Globe, Github } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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

const ProjectCard = ({ project }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  if (!project) return null;

  const {
    id,
    name = "Untitled Project",
    subdomain = "",
    updatedAt,
    gitUrl = "",
    visits = 0,
    performance = 0,
  } = project;

  const formattedDate = new Date(updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  let status = "pending";
  if (subdomain) {
    status = "done";
  } else if (gitUrl) {
    status = "skills added";
  }

  const isDeployed = Boolean(subdomain);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDelete = () => {
    if (window.confirm(`Delete project ${name}?`)) {
      alert("Deleted!");
    }
    setMenuOpen(false);
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-gray-300 transition-all duration-300 w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <div className="absolute top-0 left-0 right-0 h-1 bg-black"></div>

      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          {/* Left section: icon + name + domain + git */}
          <div className="flex items-start gap-3 w-full">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center font-bold text-base sm:text-lg shadow-md shrink-0
              ${isDeployed ? "bg-black text-white" : "bg-gray-200 text-gray-500"}`}
              aria-label={isDeployed ? "Deployed project" : "Not deployed project"}
            >
              {name.charAt(0).toUpperCase()}
            </div>

            <div className="flex flex-col overflow-hidden w-full">
              <h3 className="font-semibold text-gray-900 group-hover:text-black transition-colors text-base sm:text-lg truncate">
                <Link to={`project/${id}`}>{name}</Link>
              </h3>

              <a
                href={subdomain ? `http://${subdomain}.localhost:8000` : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs sm:text-sm text-gray-600 truncate ${!subdomain ? "pointer-events-none cursor-default" : "hover:underline"
                  }`}
                tabIndex={subdomain ? 0 : -1}
                aria-disabled={!subdomain}
              >
                {subdomain ? `${subdomain}.localhost` : "Not deployed"}
              </a>

              <div className="text-xs sm:text-sm text-gray-500 flex items-center gap-1 truncate">
                <Github size={14} className="text-white bg-black p-0.5 rounded-full" />
                <a
                  href={gitUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline truncate"
                >
                  {gitUrl ? gitUrl.replace("https://github.com/", "") : "No repository"}
                </a>
              </div>
            </div>
          </div>

          {/* Right: more options */}
          <div className="relative self-start sm:self-auto" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-black
                sm:opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="More options"
              aria-haspopup="true"
              aria-expanded={menuOpen}
            >
              <MoreVertical size={16} className="text-gray-500" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-20">
                <button
                  onClick={() => navigate(`project/${id}`)}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                >
                  View
                </button>
                <button
                  onClick={handleDelete}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  role="menuitem"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Status + Date */}
        <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(status)}`}>
            {status}
          </span>
          <span className="text-xs text-gray-500">{formattedDate}</span>
        </div>

        {/* Analytics */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Globe size={14} className="text-gray-400" />
              <span>{visits} visits</span>
            </div>
            <div className="flex items-center gap-1">
              <Activity size={14} className="text-gray-400" />
              <span>{performance}% perf</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
