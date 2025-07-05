import React, { useState } from 'react';
import {
  Search, Bell, User, Command, Zap, Settings,
  Activity, Globe, Database, Flag, Brain,
  HelpCircle, BarChart3, GitBranch, Home, Layers
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [searchFocused, setSearchFocused] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: Home, link: '/dashboard' },
    { name: 'Integrations', icon: Layers, link: '/integrations' },
    { name: 'Deployments', icon: GitBranch, link: '/deployments' },
    { name: 'Activity', icon: Activity, link: '/activity' },
    { name: 'Domains', icon: Globe, link: '/domains' },
    { name: 'Usage', icon: BarChart3, link: '/usage' },
    { name: 'Storage', icon: Database, link: '/storage' },
    { name: 'Flags', icon: Flag, link: '/flags' },
    { name: 'Support', icon: HelpCircle, link: '/support' },
    { name: 'Settings', icon: Settings, link: '/settings' }
  ];

  return (
    <div className="relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-pink-50/50 backdrop-blur-sm" />

      {/* Header */}
      <div className="relative bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo and Info */}
            <div className="flex items-center space-x-6">
              <div className="relative group">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse" />
              </div>

              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  arbaz kayamkhani's projects
                </h1>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border border-emerald-200">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
                    Hobby
                  </span>
                  <span className="text-xs text-gray-500">12 deployments</span>
                </div>
              </div>
            </div>

            {/* Search and Actions */}
            <div className="flex items-center space-x-6">

              {/* Search */}
              <div className="relative group">
                <div className={`relative transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}>
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search projects, deployments..."
                    className="w-80 pl-12 pr-16 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <kbd className="bg-gray-100 text-gray-500 px-2 py-1 rounded-lg text-xs font-medium border border-gray-200">
                      <Command className="w-3 h-3 inline mr-1" />F
                    </kbd>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 transform hover:scale-105">
                  Feedback
                </button>

                {/* Bell */}
                <div className="relative">
                  <button
                    aria-label="Notifications"
                    className="relative p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 transform hover:scale-105"
                  >
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-bounce">
                      1
                    </span>
                  </button>
                </div>

                {/* Profile */}
                <div className="relative group">
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer transform group-hover:scale-110 transition-all duration-300"
                    aria-label="User Profile"
                  >
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="relative bg-white/70 backdrop-blur-xl border-b border-gray-200/50">
        <div className="flex flex-row items-center justify-center px-6 lg:px-8">
          <nav className="flex space-x-2 overflow-x-auto">
            {navItems.map(({ name, icon: Icon, link }) => {
              return (
                <NavLink
                  to={link}
                  key={name}
                  className={({ isActive }) =>
                    `group relative flex items-center space-x-2 px-4 py-4 font-medium text-sm whitespace-nowrap transition-all duration-300 ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        className={`w-4 h-4 z-10 transition-all duration-300 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
                          }`}
                      />
                      <span className="z-10">{name}</span>

                      {isActive && (
                        <div className="absolute z-10 bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                        </div>
                      )}

                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isActive ? 'opacity-20' : 'hover:from-blue-100 hover:to-purple-100 hover:opacity-50'
                          }`}
                      />
                    </>
                  )}
                </NavLink>

              );
            })}
          </nav>
        </div>
      </div>

      {/* Background Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-100/20 to-yellow-100/20 rounded-full blur-3xl animate-pulse -z-10" />
    </div>
  );
}

export default Navbar;
