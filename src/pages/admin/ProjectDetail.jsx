import { useEffect, useState } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  User,
  Globe,
  Monitor,
  ArrowLeft,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectById } from "../../redux/slices/projectSlice";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

export default function ProjectDetail({
  onBack = () => window.history.back(),
}) {
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProjectById(id));
  }, [dispatch, id]);

  const { data: project, isLoading } = useSelector((state) => state.project?.project);
  // Generate preview image URL using placeholder service
  const getPreviewImage = (subdomain) => {
    return `https://via.placeholder.com/800x450/1f2937/ffffff?text=${encodeURIComponent(
      subdomain || "Project"
    )}.localhost:8000`;
  };

  if (isLoading) {
    <Loader />
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Project Not Found</h1>
          <p className="text-slate-600 mb-6">{"Project could not be loaded"}</p>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={onBack}
              className="inline-flex cursor-pointer items-center gap-2 px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {project.name}
              </h1>
              <p className="text-slate-600 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {project.subdomain}.localhost:8000
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                Repository
              </a>
              <a
                href={`http://${project.subdomain}.localhost:8000`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black/10 rounded-lg hover:bg-black/90 transition-colors text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Preview Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Monitor className="w-4 h-4 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Live Preview
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <div className="relative aspect-video bg-slate-100 rounded-lg overflow-hidden">
                  {!previewLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                  )}
                  <img
                    src={getPreviewImage(project.subdomain)}
                    alt={`Preview of ${project.name}`}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${previewLoaded ? "opacity-100" : "opacity-0"
                      }`}
                    onLoad={() => setPreviewLoaded(true)}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-slate-600">
                    Preview generated for {project.subdomain}.localhost:8000
                  </p>
                  <a
                    href={`http://${project.subdomain}.localhost:8000`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Open in new tab →
                  </a>
                </div>
              </div>
            </div>

            {/* Links Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900">
                  Quick Links
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {/* Live Site Link */}
                  <a
                    href={`http://${project.subdomain}.localhost:8000`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start sm:items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group w-full"
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 group-hover:text-blue-900">
                        Live Site
                      </p>
                      <p className="text-sm text-slate-600 break-words">
                        {project.subdomain}.localhost:8000
                      </p>
                    </div>
                  </a>

                  {/* GitHub Repo Link */}
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start sm:items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group w-full"
                  >
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-slate-900 group-hover:text-slate-800">
                        Repository
                      </p>
                      <p className="text-sm text-slate-600 break-words">
                        {project.gitUrl}
                      </p>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900">
                  Project Details
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900">Created</p>
                    <p className="text-sm text-slate-600">
                      {new Date(project.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900">Last Updated</p>
                    <p className="text-sm text-slate-600">
                      {new Date(project.updatedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900">User ID</p>
                    <p className="text-sm text-slate-600 font-mono">
                      {project.userId}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900">Status</h2>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-900">
                    Active
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-2">
                  Project is live and accessible
                </p>
              </div>
            </div>

            {/* Actions Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-xl font-semibold text-slate-900">
                  Actions
                </h2>
              </div>
              <div className="p-6 space-y-3">

                <button className="w-full px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium">
                  View Logs
                </button>
                <button className="w-full px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium">
                  Delete Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
