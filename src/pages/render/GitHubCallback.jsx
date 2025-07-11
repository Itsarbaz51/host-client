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
    if (!code) {
      navigate("/login");
      return;
    }

    async function handleGithubSignup() {
      try {
        // If using redux-toolkit with createAsyncThunk, you may want to unwrap:
        await dispatch(githubSignup(code)).unwrap();
        navigate("/dashboard");
      } catch (error) {
        console.error("GitHub signup failed:", error);
        navigate("/login");
      }
    }

    handleGithubSignup();
  }, [dispatch, navigate, params]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-semibold">Signing you in with GitHub…</p>
    </div>
  );
};

export default GitHubCallback;
