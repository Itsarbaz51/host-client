import React from 'react';
import {
    ExternalLink,
    Database,
    Layers,
    Cloud,
    Server,
    ChevronRight,
    Circle,
    FileStack,
    Squirrel,
    Box,
    CheckSquare,
} from 'lucide-react';

const services = [
    {
        name: 'Edge Config',
        desc: 'Ultra-low latency reads',
        icon: <Layers className="w-5 h-5 text-purple-500" />,
    },
    {
        name: 'Blob',
        desc: 'Fast object storage',
        icon: <Cloud className="w-5 h-5 text-orange-500" />,
    },
];

const providers = [
    {
        name: 'Neon',
        desc: 'Serverless Postgres',
        icon: <Database className="w-5 h-5 text-green-600" />,
    },
    {
        name: 'Upstash',
        desc: 'Serverless DB (Redis, Vector, Queue)',
        icon: <Server className="w-5 h-5 text-emerald-500" />,
        arrowOnly: true,
    },
    {
        name: 'Supabase',
        desc: 'Postgres backend',
        icon: <Database className="w-5 h-5 text-blue-600" />,
    },
    {
        name: 'Redis',
        desc: 'Serverless Redis',
        icon: <Circle className="w-5 h-5 text-red-500" />,
    },
    {
        name: 'Nile',
        desc: 'Postgres re-engineered for B2B',
        icon: <FileStack className="w-5 h-5 text-indigo-500" />,
    },
    {
        name: 'MotherDuck',
        desc: 'Analytics Database',
        icon: <Squirrel className="w-5 h-5 text-yellow-500" />,
    },
    {
        name: 'Prisma Postgres',
        desc: 'Edge-ready, w/o Cold Starts',
        icon: <CheckSquare className="w-5 h-5 text-gray-700" />,
    },
    {
        name: 'Turso',
        desc: 'Serverless SQLite',
        icon: <Box className="w-5 h-5 text-pink-500" />,
    },
    {
        name: 'Gel',
        desc: 'Fast high-level database',
        icon: <Cloud className="w-5 h-5 text-teal-500" />,
    },
];

const StoragePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">Storage</h1>
                    <p className="text-sm text-gray-600 mt-1">
                        Read and write directly to databases and stores from your projects.
                        <a href="#" className="ml-1 text-blue-600 hover:underline inline-flex items-center">
                            Learn more <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </p>
                </div>

                <div className="border-b border-gray-200 w-full" />

                {/* Main Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-8">
                    <div className="text-center max-w-xl mx-auto mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                            <Database className="w-6 h-6 text-gray-700" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-1">Create a database</h2>
                        <p className="text-sm text-gray-600">
                            Create databases and stores that you can connect to your team’s projects.
                        </p>
                    </div>

                    {/* Services List */}
                    <div className="space-y-3 mb-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center border border-gray-200 rounded-md px-4 py-3 hover:bg-gray-50 transition"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-gray-100 p-2 rounded-md">{service.icon}</div>
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">{service.name}</div>
                                        <div className="text-sm text-gray-500">{service.desc}</div>
                                    </div>
                                </div>
                                <button className="text-sm px-4 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                                    Create
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Notice */}
                    <div className="bg-gray-100 text-sm text-gray-700 rounded-md px-4 py-3 mb-6">
                        KV and Postgres are now available through the Marketplace.
                        <a href="#" className="ml-1 text-blue-600 hover:underline inline-flex items-center">
                            Learn more <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </div>

                    {/* Marketplace Providers */}
                    <div>
                        <div className="text-sm font-semibold text-gray-900 mb-3 flex items-center justify-between">
                            <span>Marketplace Database Providers</span>
                            <a href="#" className="text-blue-600 hover:underline inline-flex items-center text-sm">
                                Learn more <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                        </div>

                        <div className="space-y-2">
                            {providers.map((provider, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between items-center px-4 py-3 border border-gray-200 rounded-md hover:bg-gray-50 transition"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gray-100 p-2 rounded-md">{provider.icon}</div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{provider.name}</div>
                                            <div className="text-sm text-gray-500">{provider.desc}</div>
                                        </div>
                                    </div>
                                    {provider.arrowOnly ? (
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    ) : (
                                        <button className="text-sm px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                                            Create
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoragePage;
