import React, { useState } from "react";
import {
  Search,
  Bell,
  User,
  Command,
  Zap,
  Settings,
  Activity,
  Globe,
  Database,
  Flag,
  HelpCircle,
  BarChart3,
  GitBranch,
  Home,
  Layers,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [searchFocused, setSearchFocused] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: Home, link: "/dashboard" },
    { name: "Integrations", icon: Layers, link: "integrations" },
    { name: "Deployments", icon: GitBranch, link: "deployments" },
    { name: "Activity", icon: Activity, link: "activity" },
    { name: "Domains", icon: Globe, link: "domains" },
    { name: "Usage", icon: BarChart3, link: "usage" },
    { name: "Storage", icon: Database, link: "storage" },
    { name: "Flags", icon: Flag, link: "flags" },
    { name: "Support", icon: HelpCircle, link: "support" },
    { name: "Settings", icon: Settings, link: "settings" },
  ];

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm z-50">
      {/* Top bar */}
      <div className="px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo and Info */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                arbaz kayamkhani's projects
              </h1>
              <div className="flex items-center space-x-2 mt-0.5">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-800">
                  Hobby
                </span>
                <span className="text-xs text-gray-500">12 deployments</span>
              </div>
            </div>
          </div>

          {/* Right: Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects, deployments..."
                className="w-80 pl-10 pr-12 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <kbd className="bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded text-xs border border-gray-200">
                  <Command className="w-2.5 h-2.5 inline mr-0.5" />K
                </kbd>
              </div>
            </div>

            {/* Feedback / Notification / Profile */}
            <button className="px-3 py-1.5 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition">
              Feedback
            </button>
            <div className="relative">
              <button
                aria-label="Notifications"
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium">
                  1
                </span>
              </button>
            </div>
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200">
        <div className="flex flex-row items-center justify-center px-6 lg:px-8">
          <nav className="flex space-x-1 overflow-x-auto">
            {navItems.map(({ name, icon: Icon, link }) => (
              <NavLink
                key={name}
                to={link}
                className={({ isActive }) =>
                  `group flex items-center space-x-2 px-4 py-3 text-sm font-medium rounded-lg transition ${
                    isActive
                      ? "text-black bg-gray-100"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span>{name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
