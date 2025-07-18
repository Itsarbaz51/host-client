import { useEffect, useMemo, useState } from "react";
import { Search, X, Github, ChevronDown, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProject,
  getAllLogs,
  getAllRepos,
} from "../../redux/slices/projectSlice";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const ProjectAdd = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [showProjectForm, setShowProjectForm] = useState(false);

  const dispatch = useDispatch();
  const { projectRepos: repos, isLoading: projectLoading } = useSelector(
    (state) => state.project
  );
  const { data: userData, isLoading: userLoading } = useSelector(
    (state) => state.auth.user
  );
  if (projectLoading || userLoading) {
    <Loader />
  }

  useEffect(() => {
    if (userData?.githubAccessToken) {
      dispatch(getAllRepos());
    }
  }, [dispatch, userData]);

  const handleImport = (repo) => {
    setSelectedRepo(repo);
    setShowProjectForm(true);
  };

  const searchedRepos = Array.isArray(repos?.data)
    ? repos.data.filter((repo) =>
      repo?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-md bg-white/90 overflow-y-auto">
      {/* Background animated dots */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-24 h-24 bg-black/10 rounded-full animate-pulse"></div>
        <div className="absolute top-[20%] right-[10%] w-36 h-36 bg-black/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-[10%] left-[20%] w-20 h-20 bg-black/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      {showProjectForm && selectedRepo ? (
        <NewProjectForm
          project={selectedRepo}
          onClose={() => {
            setSelectedRepo(null);
            setShowProjectForm(false);
          }}
        />
      ) : projectLoading || userLoading ? (
        <div className="flex items-center justify-center h-screen z-10 relative">
          <Loader />
        </div>
      ) : repos?.data ? (
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Let's build something new.
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Deploy a new project, import an existing Git repository, or get started with one of our templates.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold mb-12 text-gray-800 flex items-center">
                <div className="w-1.5 h-5 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full mr-3" />
                Import Git Repository
              </h2>
              <span
                onClick={onClose}
                className="cursor-pointer text-sm bg-gray-200 hover:bg-gray-300 duration-300 rounded-full px-4 py-2"
              >
                Close
              </span>
            </div>

            <div className="flex sm:flex-row flex-col gap-6 px-8 py-8">
              <div className="w-64">
                <p className="text-sm text-gray-500">GitHub User</p>
                <p className="text-base font-medium text-gray-900 break-words">
                  {userData?.username || "N/A"}
                </p>
              </div>

              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search repositories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100"
                />
              </div>
            </div>

            <div className="space-y-3 px-8 overflow-y-auto h-[20rem]">
              {searchedRepos.length > 0 ? (
                searchedRepos.map((repo) => (
                  <div
                    key={repo.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 hover:border-gray-300 hover:scale-105 transition duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm uppercase">
                        {repo.name?.[0] || "R"}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{repo.name}</h3>
                        <p className="text-sm text-gray-600">
                          Updated {new Date(repo.pushed_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleImport(repo)}
                      className="border border-gray-300 px-6 py-2 rounded-lg font-semibold backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg transition active:scale-95"
                    >
                      Import
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 mt-8">
                  No repositories match your search.
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full z-10 relative">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
            <h2 className="text-2xl font-bold mb-4 text-center">Import Git Repository</h2>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Select a Git provider to import an existing project from a Git Repository.
            </p>
            <button
              type="button"
              onClick={() => {
                const params = new URLSearchParams({
                  client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
                  redirect_uri: `${window.location.origin}/github/callback`,
                  scope: "user:email repo",
                  state: crypto.randomUUID?.() || Math.random().toString(36).substring(2),
                });
                window.location.href = `https://github.com/login/oauth/authorize?${params.toString()}`;
              }}
              className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold
                  hover:bg-gray-800 transition-all duration-300 flex items-center
                  justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
              Continue with GitHub
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
export default ProjectAdd;

function NewProjectForm({ project, onClose }) {
  const GITHUB_API = project?.contents_url?.replace("{+path}", "");
  const [directories, setDirectories] = useState([]);
  const [startPolling, setStartPolling] = useState(false);
  const [backendProjectDeploymentId, setBackendProjectDeploymentId] = useState(null);
  const [backendProjectId, setBackendProjectId] = useState(null);
  const [isDeploying, setIsDeploying] = useState(false);
  const dispatch = useDispatch();
  const [isDeployed, setIsDeployed] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState("");
  const [selectedDatabase, setSelectedDatabase] = useState("");

  useEffect(() => {
    const fetchDirectories = async () => {
      try {
        if (!GITHUB_API) return;
        const res = await fetch(GITHUB_API);
        const data = await res.json();
        const dirs = data.filter((item) => item.type === "dir");
        setDirectories(dirs.map((d) => d.name));
      } catch (err) {
        console.error("Error fetching repo directories:", err);
      }
    };
    if (project) fetchDirectories();
  }, [GITHUB_API, project]);

  const [form, setForm] = useState({
    projectName: project?.name ?? "",
    envVars: [{ key: "", value: "" }],
    buildSettingsOpen: true,
    envVarsOpen: true,
  });

  const toggle = (field) => setForm((f) => ({ ...f, [field]: !f[field] }));
  const updateField = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const updateEnvVar = (index, field, value) => {
    setForm((f) => {
      const envVars = [...f.envVars];
      envVars[index][field] = value;
      return { ...f, envVars };
    });
  };

  const addEnvVar = () =>
    setForm((f) => ({
      ...f,
      envVars: [...f.envVars, { key: "", value: "" }],
    }));

  const removeEnvVar = (index) =>
    setForm((f) => ({
      ...f,
      envVars: f.envVars.filter((_, i) => i !== index),
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDeploying(true);

    const filteredVars = form.envVars.filter(({ key }) => key.trim() !== "");

    const payload = {
      name: form.projectName.trim(),
      gitUrl: project.clone_url,
      framework: selectedFramework,
      db: selectedDatabase,
      envVars: filteredVars.map(({ key, value }) => ({
        key: key.trim(),
        value: value.trim(),
      })),
    };

    dispatch(createProject(payload))
      .then((data) => {
        const deploymentId = data?.data?.id || data?.data?._id;
        setBackendProjectDeploymentId(deploymentId);
        const projectId = data?.data?.projectId || data?.data?.projectId;
        setBackendProjectId(projectId);
        setStartPolling(true);
      })
      .catch((err) => {
        console.error(err);
        setIsDeploying(false);
      });
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center bg-white py-10 flex-col justify-center overflow-auto">
      <div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-5xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
        >
          <header className="border-b border-gray-200 px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-900">New Project</h1>
          </header>

          <section className="border-b border-gray-200 bg-gray-50 px-6 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black">
                <span className="text-xs text-white">●</span>
              </span>
              <span className="font-medium">
                {project?.full_name ?? "Unknown repository"}
              </span>
              {project?.default_branch && (
                <span className="rounded bg-orange-100 px-2 py-1 text-xs text-orange-600">
                  {project.default_branch}
                </span>
              )}
            </div>
          </section>

          {/* 📌 Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 px-4 py-3 rounded-md mx-6 my-4 text-sm">
            <strong>Note:</strong> Make sure your project directory is at the root of the repository. Deployment will fail if the app code is nested inside a subdirectory.
          </div>

          <div className="space-y-8 px-6 py-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="projectName" className="mb-2 block text-sm font-medium text-gray-700">
                  Project Name
                </label>
                <input
                  id="projectName"
                  type="text"
                  value={form.projectName}
                  onChange={(e) => updateField("projectName", e.target.value)}
                  disabled={isDeployed}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Framework</label>
                <select
                  value={selectedFramework}
                  onChange={(e) => setSelectedFramework(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Framework</option>
                  <option>Static</option>
                  <option value="vite">Vite</option>
                  <option value="node">Node.js</option>
                  <option value="nextjs">Next.js</option>
                  <option value="laravel">Laravel</option>
                </select>
              </div>

              {["node", "nextjs", "laravel"].includes(selectedFramework) && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Database</label>
                  <select
                    value={selectedDatabase}
                    onChange={(e) => setSelectedDatabase(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Database</option>
                    <option value="mysql">MySQL</option>
                    <option value="postgres">PostgreSQL</option>
                    <option value="mongodb">MongoDB</option>
                  </select>
                </div>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={() => toggle("envVarsOpen")}
                className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${form.envVarsOpen ? "rotate-0" : "-rotate-90"}`}
                />
                Environment Variables
              </button>

              {form.envVarsOpen && (
                <div className="space-y-4 pl-6">
                  <div className="grid grid-cols-2 gap-2 text-sm font-medium text-gray-700">
                    <span>Key</span>
                    <span>Value</span>
                  </div>

                  {form.envVars.map((envVar, index) => (
                    <div key={index} className="grid grid-cols-2 items-start gap-2">
                      <input
                        type="text"
                        value={envVar.key}
                        onChange={(e) => updateEnvVar(index, "key", e.target.value)}
                        disabled={isDeployed}
                        className="rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="KEY"
                      />
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={envVar.value}
                          onChange={(e) => updateEnvVar(index, "value", e.target.value)}
                          disabled={isDeployed}
                          className="flex-1 rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="VALUE"
                        />
                        <button
                          type="button"
                          onClick={() => removeEnvVar(index)}
                          disabled={isDeployed}
                          className="p-1 text-gray-500 hover:text-red-500"
                          aria-label="Remove environment variable"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={addEnvVar}
                    disabled={isDeployed}
                    className="mt-2 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
                  >
                    <Plus className="h-4 w-4" /> Add More
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-4 mt-8">
              <button
                type="button"
                onClick={onClose}
                className="w-[40rem] rounded-md bg-black/10 text-black px-6 py-3 text-sm font-medium  transition-colors hover:bg-black/20 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-[40rem] rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 cursor-pointer flex items-center justify-center gap-2"
                disabled={isDeploying}
              >
                {isDeploying && (
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                )}
                {isDeploying ? "Deploying..." : "Deploy"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {backendProjectDeploymentId && (
        <ProjectLogs
          deploymentId={backendProjectDeploymentId}
          ProjectId={backendProjectId}
          startPolling={startPolling}
          onLogsDetected={() => {
            setIsDeployed(true);
            setIsDeploying(false);
          }}
        />
      )}
    </div>
  );
}


function ProjectLogs({
  deploymentId,
  ProjectId,
  startPolling = false,
  onLogsDetected,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Safe access to logs, loading, and error with fallbacks
  const {
    data: logs = [],
    loading = false,
    error = null,
  } = useSelector((state) => {
    const project = state?.project?.project ?? {};
    return {
      data: Array.isArray(project.data) ? project.data : [],
      loading: project.loading ?? false,
      error: project.error ?? null,
    };
  });

  if (loading) {
    <Loader />
  }
  const hasLogs = useMemo(() => logs.length > 0, [logs]);

  useEffect(() => {
    if (!deploymentId || !startPolling) return;

    dispatch(getAllLogs(deploymentId));

    const intervalId = setInterval(() => {
      dispatch(getAllLogs(deploymentId));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [dispatch, deploymentId, startPolling]);

  useEffect(() => {
    if (hasLogs) {
      onLogsDetected?.(); // Notify parent

      const found = logs.find((log) =>
        log?.log?.includes("🎉 Upload complete")
      );

      if (found) {
        navigate(`project/${ProjectId}`); // Redirect on upload complete
      }
    }
  }, [hasLogs, logs, onLogsDetected, ProjectId, navigate]);

  if (!startPolling) return null;

  return (
    <div className="mt-8 w-full max-w-5xl rounded-lg border border-gray-300 bg-white shadow-md">
      <header className="border-b border-gray-200 px-6 py-4 bg-white">
        <h2 className="text-lg font-semibold text-gray-800">Build Logs</h2>
      </header>

      <div className="p-6 h-60 overflow-y-auto text-sm bg-gray-50 space-y-2">
        {loading && <p className="text-gray-500">Loading logs...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && logs.length === 0 && (
          <p className="text-gray-500 italic">Waiting for logs...</p>
        )}

        {logs.map((log, index) => (
          <pre
            key={index}
            className="text-gray-800 font-mono bg-white rounded px-2 py-1 shadow-sm border border-gray-200"
          >
            {log?.log ?? ""}
          </pre>
        ))}
      </div>
    </div>
  );
}
