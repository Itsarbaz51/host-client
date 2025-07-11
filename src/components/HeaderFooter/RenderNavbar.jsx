import { use, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, AtSign, Image, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { checkAuth } from "../../redux/slices/authSlice";

const navItems = [
  {
    name: "Home",
    path: "/",
    type: "link",
  },
  {
    name: "Pricing",
    path: "#pricing",
    type: "anchor",
  },
  {
    name: "About",
    path: "#about",
    type: "anchor",
  },
  {
    name: "Contact",
    path: "#contact",
    type: "anchor",
  },
];

function RenderNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = (e, path) => {
    e.preventDefault();
    if (location.pathname === "/" && path === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <header className="z-50 w-full px-6 sm:px-10 py-4 border-b border-b-gray-300 flex items-center justify-between bg-white fixed">
      {/* Logo */}
      <div className="flex gap-3 items-center">
        <AtSign className="text-3xl text-blue-600" />
        <Link to="/">
          <h1 className="text-3xl font-bold capitalize text-gray-800">
            Server
          </h1>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        <ul className="flex space-x-4">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="hover:bg-black/10 px-4 py-2 rounded-lg transition duration-300"
            >
              {item.type === "link" ? (
                item.path === "/" ? (
                  <a
                    href="/"
                    onClick={(e) => handleHomeClick(e, item.path)}
                    className="text-lg font-medium text-gray-700"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="text-lg font-medium text-gray-700"
                  >
                    {item.name}
                  </Link>
                )
              ) : (
                <a
                  href={item.path}
                  onClick={(e) =>
                    handleAnchorClick(e, item.path.replace("#", ""))
                  }
                  className="text-lg font-medium text-gray-700"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-6">
          {user ? (
            <Link to="/dashboard">
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name || "User Avatar"}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <User />
              )}
            </Link>
          ) : (
            <div className="space-x-4">
              <Link
                to="/login"
                className="bg-white border border-gray-300 text-black py-2 px-6 rounded-lg hover:bg-gray-100 font-semibold shadow-md transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="bg-black text-white py-2 px-6 rounded-lg hover:bg-black/90 font-semibold shadow-lg transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <div
        className="lg:hidden cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="text-3xl text-gray-800" />
        ) : (
          <Menu className="text-3xl text-gray-800" />
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex justify-center items-center pt-10 h-screen bg-opacity-95">
          <div className="w-11/12 max-w-xl mx-auto p-6">
            <ul className="flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <li key={i}>
                  {item.type === "link" ? (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.path}
                      onClick={(e) =>
                        handleAnchorClick(e, item.path.replace("#", ""))
                      }
                      className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                to="/sign-up"
                className="bg-blue-600 text-white py-3 rounded-lg font-semibold text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="bg-white border border-gray-300 py-3 rounded-lg font-semibold text-center text-black"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default RenderNavbar;
