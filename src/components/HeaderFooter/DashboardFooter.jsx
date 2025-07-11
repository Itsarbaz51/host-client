import React from 'react'

function DashboardFooter() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    {/* Navigation Links */}
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">▲</span>
                            <nav className="flex flex-wrap gap-3 sm:space-x-4">
                                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Home</a>
                                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Docs</a>
                                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Guides</a>
                                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Help</a>
                                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Contact</a>
                                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Legal</a>
                            </nav>
                        </div>
                    </div>

                    {/* Status & Social Icons */}
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-500">All systems normal</span>
                        </div>
                        <div className="flex space-x-2">
                            <button className="text-gray-400 hover:text-gray-600">
                                {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
                                </svg> */}
                            </button>
                            <button className="text-gray-400 hover:text-gray-600">
                                {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12..." />
                                </svg> */}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-4 text-xs text-gray-400 text-center md:text-left">
                    © 2024, Vercel Inc.
                </div>
            </div>
        </footer>
    )
}

export default DashboardFooter
