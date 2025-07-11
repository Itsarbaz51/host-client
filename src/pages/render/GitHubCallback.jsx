// src/pages/GitHubCallback.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { githubSignup } from "../../redux/slices/authSlice";

const GitHubCallback = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const code = params.get("code");
    if (!code) return navigate("/login");        
    dispatch(githubSignup(code))
      .then(() => navigate("/dashboard"))        
      .catch(() => navigate("/login"));          
  }, [dispatch, navigate, params]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-semibold">Signing you in with GitHub…</p>
    </div>
  );
};

export default GitHubCallback;
