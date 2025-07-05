import React, { useState } from 'react';

// Dummy projects data
const projects = [
    {
        id: '1',
        name: 'arbaz.dev',
        deployment: 'arbaz-bhv84f5rk-arbaz-kayamkhanis-projects.vercel.app',
        domains: ['arbazdev.vercel.app', 'arbazdev-arbaz-kayamkhanis-projects.vercel.app'],
        status: 'Ready',
        created: 'Jun 24',
        author: 'itsarbaz51',
        branch: 'main',
        commit: '6ae8448',
        commitMessage: 'Update Ept.jsx',
        edgeRequests: 1247,
        functionInvocations: 23,
        errorRate: 0.1,
    },
    {
        id: '2',
        name: 'Sample Project',
        deployment: 'sample-project.vercel.app',
        domains: ['sample.vercel.app'],
        status: 'Building',
        created: 'Jun 25',
        author: 'developer',
        branch: 'main',
        commit: 'abc1234',
        commitMessage: 'Initial commit',
        edgeRequests: 542,
        functionInvocations: 8,
        errorRate: 0,
    },
];

export default function ProjectDetail() {
    const [selectedProjectId, setSelectedProjectId] = useState('1');
    const project = projects.find(p => p.id === selectedProjectId);

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-100 text-gray-800 flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Project Not Found</h1>
                    <p className="text-gray-600">No project found with ID: {selectedProjectId}</p>
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
                    <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm">Repository</button>
                    <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm">Usage</button>
                    <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm">Domains</button>
                    <button className="bg-black text-white px-4 py-2 rounded hover:opacity-90 text-sm">Visit</button>
                </div>
            </div>

            {/* Content */}
            <section className="max-w-[90rem] mx-auto space-y-6">

                {/* Deployment Card */}
                <div className="bg-white rounded-2xl shadow p-4 sm:p-6 space-y-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className={`w-3 h-3 rounded-full ${project.status === 'Ready' ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`}></span>
                            <h2 className="text-xl font-bold">Production Deployment</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button className="text-sm bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">Build Logs</button>
                            <button className="text-sm bg-white border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">Runtime Logs</button>
                            <button className="text-sm bg-red-100 text-red-700 border border-red-300 px-4 py-2 rounded hover:bg-red-200">Instant Rollback</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-900 text-white flex justify-center items-center rounded aspect-video">
                            <span className="text-2xl">🚀 Live Preview</span>
                        </div>
                        <div className="md:col-span-2 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <p className="text-sm font-semibold text-gray-700">Deployment</p>
                                    <p className="text-xs text-gray-500 break-words">{project.deployment}</p>
                                </div>
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <p className="text-sm font-semibold text-gray-700">Status</p>
                                    <p className={`text-sm font-medium ${project.status === 'Ready' ? 'text-green-600' : 'text-yellow-600'}`}>{project.status}</p>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 p-4 rounded">
                                <p className="text-sm font-semibold text-gray-700 mb-2">Domains</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.domains.map((domain, i) => (
                                        <span key={i} className="bg-gray-100 px-3 py-1 text-xs rounded-full break-words">{domain}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <p className="text-sm font-semibold text-gray-700">Created</p>
                                    <p className="text-sm text-gray-600">{project.created} by <code className="bg-gray-100 px-1 rounded text-xs">{project.author}</code></p>
                                </div>
                                <div className="bg-white border border-gray-200 p-4 rounded">
                                    <p className="text-sm font-semibold text-gray-700">Source</p>
                                    <p className="text-sm text-gray-600"><code className="bg-gray-100 px-1 rounded text-xs">{project.branch}</code></p>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 p-4 rounded">
                                <p className="text-sm font-semibold text-gray-700">Latest Commit</p>
                                <p className="text-sm text-gray-600">{project.commit} - <em>{project.commitMessage}</em></p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <span>Fluid Compute</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                            <span>Deployment Protection</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                            <span>Skew Protection</span>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded shadow p-4">
                        <h3 className="font-semibold text-gray-800 mb-2">Firewall</h3>
                        <p className="text-green-600 text-sm">Firewall is active</p>
                    </div>
                    <div className="bg-white rounded shadow p-4 space-y-2">
                        <h3 className="font-semibold text-gray-800 mb-2">Observability</h3>
                        <p className="text-sm">Edge Requests: {project.edgeRequests}</p>
                        <p className="text-sm">Function Invocations: {project.functionInvocations}</p>
                        <p className="text-sm">Error Rate: {project.errorRate}%</p>
                    </div>
                    <div className="bg-white rounded shadow p-4">
                        <h3 className="font-semibold text-gray-800 mb-2">Analytics</h3>
                        <button className="text-sm bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enable</button>
                    </div>
                </div>

                {/* Active Branches */}
                <div className="bg-white rounded shadow p-6 text-center">
                    <h3 className="font-semibold text-gray-800 mb-2">Active Branches</h3>
                    <p className="text-sm text-gray-500">No Preview Deployments</p>
                    <p className="text-xs text-gray-400">Commit using our Git connections.</p>
                </div>
            </section>
        </div>
    );
}
