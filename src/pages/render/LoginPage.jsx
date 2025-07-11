import React, { useEffect, useState } from "react";
import {
  Lock,
  AtSign,
  Github,
  Eye,
  EyeOff,
  AlertCircle,
  Sparkles,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setIsLoading(true);

    setIsLoading(false);
    dispatch(login(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse delay-1000" />
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-7xl items-center justify-between space-y-6 sm:space-y-0">
        {/* Left Panel */}
        <div className="relative z-10 w-full max-w-xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col gap-y-4">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/80 border border-gray-200 rounded-full px-4 py-2 mb-4 shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  Welcome Back
                </span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                Continue Building
              </h1>
              <p className="text-gray-600">Access your AI-powered workspace</p>
            </div>

            {/* Features */}
            {[
              {
                Icon: Shield,
                title: "Secure Login",
                desc: "Your data is protected with encryption",
                color: "from-blue-500 to-purple-600",
              },
              {
                Icon: Zap,
                title: "Instant Access",
                desc: "Jump right back into your projects",
                color: "from-green-500 to-blue-600",
              },
              {
                Icon: Users,
                title: "Team Collaboration",
                desc: "Work together seamlessly",
                color: "from-purple-500 to-pink-600",
              },
            ].map(({ Icon, title, desc, color }, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {[
                {
                  value: "10K+",
                  label: "Active Users",
                  color: "from-blue-50 to-purple-50",
                },
                {
                  value: "99.9%",
                  label: "Uptime",
                  color: "from-green-50 to-blue-50",
                },
                {
                  value: "24/7",
                  label: "Support",
                  color: "from-purple-50 to-pink-50",
                },
              ].map(({ value, label, color }, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-r ${color} rounded-xl p-4`}
                >
                  <div className="text-2xl font-bold text-gray-900">
                    {value}
                  </div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="relative z-10 w-full max-w-xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl" />
            <div className="relative z-10">
              <form className="space-y-6" onSubmit={handleLogin}>
                {error && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                {/* Email */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      onFocus={() => setFocusedField("Email")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Enter your email"
                      className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none ${focusedField === "Email"
                        ? "border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-500/20"
                        : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                        }`}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      onFocus={() => setFocusedField("Password")}
                      onBlur={() => setFocusedField("")}
                      placeholder="Enter your password"
                      className={`w-full pl-12 pr-12 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none ${focusedField === "Password"
                        ? "border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-500/20"
                        : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                        }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
                  >
                    Forgot password?
                  </button>
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
                      Signing in...
                    </div>
                  ) : (
                    "Sign In"
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

              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <button className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors">
                    Sign Up
                  </button>
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  By signing in, you agree to our{" "}
                  <button className="text-blue-600 hover:underline">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button className="text-blue-600 hover:underline">
                    Privacy Policy
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
