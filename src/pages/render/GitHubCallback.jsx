import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { githubConnect, githubSignup } from "../../redux/slices/authSlice";

const GitHubCallback = () => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth?.user);
  const data = userData?.data
  console.log(data);
  useEffect(() => {
    const code = params.get("code");
    if (!code) {
      navigate("/login");
      return;
    }

    const handleGithubOAuth = async () => {
      try {
        if (data && data?.id) {
          // User connect GitHub to existing account
          await dispatch(githubConnect(code)).unwrap();
        } else {
          // No user -> treat this as login/signup
          await dispatch(githubSignup(code)).unwrap();
        }
        navigate("/dashboard");
      } catch (error) {
        console.error("GitHub OAuth failed:", error);
        navigate("/login");
      }
    };

    handleGithubOAuth();
  }, [dispatch, navigate, params, data]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-semibold">Signing you in with GitHub…</p>
    </div>
  );
};

export default GitHubCallback;
