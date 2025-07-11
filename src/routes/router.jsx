// src/router.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import DeploymentPage from "../pages/admin/DeploymentPage";
import DomainPage from "../pages/admin/DomainPage";
import Dashboard from "../pages/Dashboard";
import ProjectDetail from "../pages/admin/ProjectDetail";
import StoragePage from "../pages/admin/StoragePage";
import AccountSetting from "../pages/admin/AccountSetting";
import HomePage from "../pages/render/HomePage";
import RenderLayout from "../layouts/RenderLayout";
import SignUpPage from "../pages/render/SignUpPage";
import LoginPage from "../pages/render/LoginPage";
import GitHubCallback from "../pages/render/GitHubCallback";
import PublicOnlyRoute from "../layouts/PublicOnlyRoute";
import ProtectedRoute from "../layouts/ProtectedRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public layout */}
      <Route path="/" element={<RenderLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/github/callback" element={<GitHubCallback />} />

        {/* Only allow guests to visit login and sign-up */}
        <Route element={<PublicOnlyRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>
      </Route>

      {/* Protected dashboard layout */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="deployments" element={<DeploymentPage />} />
          <Route path="domains" element={<DomainPage />} />
          <Route path="storage" element={<StoragePage />} />
          <Route path="account-setting" element={<AccountSetting />} />
          <Route path="project-detail/:id" element={<ProjectDetail />} />
        </Route>
      </Route>
    </>
  )
);
