import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProjectById } from "../../redux/slices/projectSlice";

export default function ProjectDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getProjectById(id));
    }
  }, [id, dispatch]);

  const {
    data: project,
    loading,
    error,
  } = useSelector((state) => state?.project?.project || {});

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading project...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Project Not Found</h1>
          <p className="text-gray-600">No project found with ID: {id}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4 md:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 px-2 sm:px-6 md:px-12">
        <h1 className="text-2xl font-bold">{project.name}</h1>
        <div className="flex flex-wrap gap-2">
          <a
            href={project.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm"
          >
            Repository
          </a>
          <Link
            to={`http://${project.subdomain}.localhost:8000`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded hover:opacity-90 text-sm"
          >
            Visit
          </Link>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-[90rem] mx-auto space-y-6">
        <div className="bg-white rounded-2xl shadow p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-4 rounded">
              <p className="text-sm font-semibold text-gray-700">Domain</p>
              <a
                href={`http://${project.subdomain}.localhost:8000`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                {project.subdomain}.localhost:8000
              </a>
            </div>

            <div className="bg-white border border-gray-200 p-4 rounded">
              <p className="text-sm font-semibold text-gray-700">GitHub URL</p>
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                {project.gitUrl}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-4 rounded">
              <p className="text-sm font-semibold text-gray-700">Created At</p>
              <p className="text-sm text-gray-600">
                {new Date(project.createdAt).toLocaleString()}
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded">
              <p className="text-sm font-semibold text-gray-700">Updated At</p>
              <p className="text-sm text-gray-600">
                {new Date(project.updatedAt).toLocaleString()}
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-4 rounded">
            <p className="text-sm font-semibold text-gray-700">User ID</p>
            <p className="text-sm text-gray-600">{project.userId}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
