import React, { useEffect, useState } from "react";
import {
  Lock,
  User,
  AtSign,
  Github,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const cleanedValue =
      name === "fullName" ? value.trim() : value.trim().toLowerCase();

    setFormData((prev) => ({ ...prev, [name]: cleanedValue }));
    if (error) setError("");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!strongPasswordRegex.test(password)) {
      setError(
        "Password must be 8+ characters, with upper, lower, number & symbol."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      dispatch(signup(formData));
    }, 2000);
  };

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse delay-1000" />
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-[85rem] items-center justify-between space-y-6 sm:space-y-0">
        {/* Left Panel */}
        <div className="relative z-10 w-full max-w-xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8 relative overflow-hidden flex flex-col gap-y-7">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-4 shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  Join AI Cloud
                </span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                Create Your Account
              </h1>
              <p className="text-gray-600">Start building the future with AI</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: "Secure & Reliable",
                  desc: "Enterprise-grade security for your data",
                  icon: <CheckCircle className="w-6 h-6 text-white" />,
                  bg: "from-blue-500 to-purple-600",
                },
                {
                  title: "Fast Setup",
                  desc: "Get started in under 2 minutes",
                  icon: <Sparkles className="w-6 h-6 text-white" />,
                  bg: "from-green-500 to-blue-600",
                },
                {
                  title: "Free to Start",
                  desc: "No credit card required",
                  icon: <User className="w-6 h-6 text-white" />,
                  bg: "from-purple-500 to-pink-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="relative z-10 w-full max-w-2xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl" />
            <form onSubmit={handleSignUp} className="relative z-10 space-y-6">
              {error && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
              {formData.confirmPassword && (
                <div
                  className={`${formData.password === formData.confirmPassword
                      ? "text-green-600"
                      : "text-red-600"
                    }`}
                >
                  <CheckCircle />
                  <span className="text-sm">
                    {formData.password === formData.confirmPassword
                      ? "Passwords match"
                      : "Passwords don't match"}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {/* Full Name */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <User className="absolute left-4 top-2/3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("fullName")}
                    onBlur={() => setFocusedField("")}
                    placeholder="Enter your full name"
                    className={`w-full py-4 pl-12 pr-4 rounded-xl border-2 transition-all duration-300 focus:outline-none ${focusedField === "fullName"
                        ? "border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-500/20"
                        : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                      }`}
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <AtSign className="absolute left-4 top-2/3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    placeholder="Enter your email"
                    className={`w-full py-4 pl-12 pr-4 rounded-xl border-2 transition-all duration-300 focus:outline-none ${focusedField === "email"
                        ? "border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-500/20"
                        : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                      }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {/* Password */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <Lock className="absolute left-4 top-2/3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField("")}
                    placeholder="Enter password"
                    className={`w-full py-4 pl-12 pr-12 rounded-xl border-2 transition-all duration-300 focus:outline-none ${focusedField === "password"
                        ? "border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-500/20"
                        : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                      }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-2/3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <Lock className="absolute left-4 top-2/3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("confirmPassword")}
                    onBlur={() => setFocusedField("")}
                    placeholder="Confirm your password"
                    className={`w-full py-4 pl-12 pr-12 rounded-xl border-2 transition-all duration-300 focus:outline-none ${focusedField === "confirmPassword"
                        ? "border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-500/20"
                        : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                      }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-2/3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl ${isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white"
                  }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Creating account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">or</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  const params = new URLSearchParams({
                    client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
                    redirect_uri: `${window.location.origin}/github/callback`,
                    scope: "user:email repo",
                    state: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2),
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


              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <button className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors">
                    Sign In
                  </button>
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  By creating an account, you agree to our{" "}
                  <button className="text-blue-600 hover:underline">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button className="text-blue-600 hover:underline">
                    Privacy Policy
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
