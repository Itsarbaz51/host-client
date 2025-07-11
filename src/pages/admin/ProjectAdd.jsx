import React, { useState } from "react";
import { Search, X, Github } from "lucide-react";

const ProjectAdd = ({ onClose }) => {
  const [selectedAccount, setSelectedAccount] = useState("Itsarbaz51");
  const [searchQuery, setSearchQuery] = useState("");
  const [gitConnection, setGitConnection] = useState(true);

  const repositories = [
    { name: "arbaz.dev", updated: "Jun 24", icon: "V" },
    { name: "cafe", updated: "Jun 24", icon: "V" },
    { name: "gym", updated: "Jun 24", icon: "V" },
    { name: "arbaz.dev", updated: "Jun 24", icon: "V" },
    { name: "cafe", updated: "Jun 24", icon: "V" },
    { name: "gym", updated: "Jun 24", icon: "V" },
  ];

  const handleImport = (repoName) => {
    console.log(`Importing ${repoName}...`);
    // Add import logic here
  };

  const filteredRepos = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 backdrop-blur-md bg-white/90 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-24 h-24 bg-black/10 rounded-full animate-pulse"></div>
        <div className="absolute top-[20%] right-[10%] w-36 h-36 bg-black/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-[10%] left-[20%] w-20 h-20 bg-black/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      {gitConnection ? (
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12 relative">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Let's build something new.
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Deploy a new project, import an existing Git repository, or get started with one of our templates.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 transition duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <div className="w-1.5 h-5 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full mr-3"></div>
              Import Git Repository
            </h2>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-black/10 p-1 rounded-full
              hover:bg-black/20 cursor-pointer duration-300"
            >
              <X size={20} />
            </button>

            <div className="flex sm:flex-row flex-col gap-6 mb-4 px-8">
              <div className="w-64">
                <select
                  className="w-full p-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all duration-300"
                  value={selectedAccount}
                  onChange={(e) => setSelectedAccount(e.target.value)}
                >
                  <option>Itsarbaz51</option>
                  <option>Personal Account</option>
                  <option>Team Account</option>
                </select>
              </div>

              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50  focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all duration-300"
                  placeholder="Search repositories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-3 px-8 overflow-y-auto h-[20rem]">
              {filteredRepos.map((repo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4  bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 hover:border-gray-300 hover:scale-105 duration-300"
                >

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {repo.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{repo.name}</h3>
                      <p className="text-sm text-gray-600">Updated {repo.updated}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleImport(repo.name)}
                    className="border border-gray-300  cursor-pointer backdrop-blur-sm  px-6 py-2 rounded-lg font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300 active:scale-95"
                  >
                    Import
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full z-10 relative" onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}>
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 bg-black/10 p-1 rounded-full
              hover:bg-black/20 cursor-pointer duration-300"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Import Git Repository</h2>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Select a Git provider to import an existing project from a Git Repository.
            </p>

            <div className="space-y-3">
              <button className="cursor-pointer w-full flex items-center justify-center gap-3 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition">
                <Github size={18} />
                Continue with GitHub
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectAdd;
