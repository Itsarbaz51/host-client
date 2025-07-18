import { useEffect, useState } from "react";
import {
  Zap,
  Globe,
  Database,
  GitBranch,
  Home,
  Cog,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/authSlice";

const palette = [
  { bg: "bg-red-500", text: "text-white" },
  { bg: "bg-green-500", text: "text-white" },
  { bg: "bg-blue-500", text: "text-white" },
  { bg: "bg-yellow-400", text: "text-black" },
  { bg: "bg-indigo-500", text: "text-white" },
  { bg: "bg-purple-500", text: "text-white" },
  { bg: "bg-pink-500", text: "text-white" },
  { bg: "bg-teal-500", text: "text-white" },
  { bg: "bg-orange-500", text: "text-white" },
  { bg: "bg-rose-500", text: "text-white" },
];
const getRandomIndex = () => Math.floor(Math.random() * palette.length);
function DashboardNavbar() {
  const [colour, setColour] = useState(palette[0]);

  const navItems = [
    { name: "Dashboard", icon: Home, link: "/dashboard" },
    { name: "Deployments", icon: GitBranch, link: "deployments" },
    { name: "Domains", icon: Globe, link: "domains" },
    { name: "Storage", icon: Database, link: "storage" },
    { name: "Account Setting", icon: Cog, link: "account-setting" },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => navigate("/login"));
  };

  const { data } = useSelector((state) => state.auth?.user);
  const firstLetter = data?.fullName?.charAt(0)?.toUpperCase() || "?";




  useEffect(() => {
    if (!data?.fullName) return;
    const key = `avatarColor_${data.fullName}`;

    const stored = localStorage.getItem(key);
    if (stored) {
      setColour(JSON.parse(stored));
    } else {
      const randomColour = palette[getRandomIndex()];
      localStorage.setItem(key, JSON.stringify(randomColour));
      setColour(randomColour);
    }
  }, [data?.fullName]);


  return (
    <header className="bg-white border-b border-gray-200 shadow-sm z-50">
      {/* Top bar */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4 sm:gap-0">
          {/* Logo + Info */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white">
              <Zap className="w-5 h-5" />
            </div>
            <div onClick={() => navigate('/')}>
              <h1 className="text-base sm:text-lg font-semibold text-gray-900 cursor-pointer">
                Host Server
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 flex-wrap justify-end">
            {/* User Avatar */}
            <div
              onClick={() => navigate("account-setting")}
              className="cursor-pointer flex items-center space-x-2"
            >
              {/* Avatar circle */}
              <div
                className={`w-8 h-8 ${colour.bg} rounded-full flex items-center justify-center ${colour.text} font-medium`}
                title={data?.fullName}
              >
                {firstLetter}
              </div>

              <span className="text-sm text-gray-800 hidden sm:block">{data?.fullName}</span>
            </div>
            <div
              className="hover:bg-red-200 duration-300 rounded-full p-2 cursor-pointer "
              onClick={handleLogout}
            >
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
