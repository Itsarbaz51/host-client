import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { checkAuth } from "./redux/slices/authSlice";
import { router } from "./routes/router";

function AuthLoader() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const fetchAuth = async () => {
      await dispatch(checkAuth());
      setAuthChecked(true);
    };
    fetchAuth();
  }, [dispatch]);

  if (!authChecked || isLoading) {
    // ✅ Show loader until checkAuth finishes
    return (
      <div className="flex items-center justify-center h-screen">
        <svg
          className="animate-spin h-8 w-8 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <span className="ml-2 text-blue-600 font-semibold">
          Checking Auth...
        </span>
      </div>
    );
  }

  // ✅ Router starts only after auth is checked
  return <RouterProvider router={router} />;
}

export default AuthLoader;
