import React, { useEffect, useState } from "react";
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
  HelpCircle,
  GitBranch,
  Home,
  Cog,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/authSlice";

function DashboardNavbar() {
  const [searchFocused, setSearchFocused] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: Home, link: "/dashboard" },
    { name: "Deployments", icon: GitBranch, link: "deployments" },
    // { name: "Analytics", icon: Activity, link: "analytics" },
    { name: "Domains", icon: Globe, link: "domains" },
    { name: "Storage", icon: Database, link: "storage" },
    // { name: "Support", icon: HelpCircle, link: "support" },
    { name: "Account Setting", icon: Cog, link: "account-setting" },
    // { name: "Settings", icon: Settings, link: "settings" },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => navigate('/login'))
  };



  return (
    <header className="bg-white border-b border-gray-200 shadow-sm z-50">
      {/* Top bar */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 flex-wrap gap-4 sm:gap-0">
          {/* Logo + Info */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white">
              <Zap className="w-5 h-5" />
            </div>
            <div className="">
              <h1 className="text-base sm:text-lg font-semibold text-gray-900">
                arbaz
              </h1>
              <div className="flex items-center space-x-2 mt-0.5">
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-800">
                  Hobby
                </span>
                <span className="text-xs text-gray-500 hidden sm:inline">
                  12 deployments
                </span>
              </div>
            </div>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4 flex-wrap justify-end">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-12 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <kbd className="bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded text-xs border border-gray-200">
                  <Command className="w-2.5 h-2.5 inline mr-0.5" />
                  K
                </kbd>
              </div>
            </div>

            {/* Feedback Button */}
            <button className="px-2 sm:px-3 py-1.5 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition hidden sm:block">
              Feedback
            </button>

            {/* Notifications */}
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

            {/* User Avatar */}
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="hover:bg-red-200 duration-300 rounded-full p-2 cursor-pointer " onClick={handleLogout}>
              <LogOut className="text-red-600 w-5 h-5" />

            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white border-t border-gray-200 py-1">
        <div className="flex flex-row items-center justify-center px-2 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 w-full sm:w-auto scrollbar-hide">
            {navItems.map(({ name, icon: Icon, link }) => (
              <NavLink
                key={name}
                to={link}
                end={link === "/dashboard"}
                className={({ isActive }) =>
                  `flex-shrink-0 group flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition whitespace-nowrap ${isActive
                    ? "text-black bg-gray-100"
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span>{name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default DashboardNavbar;
