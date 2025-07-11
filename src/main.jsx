import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import DashboardLayout from "./layouts/DashboardLayout";
import DeploymentPage from "./pages/admin/DeploymentPage";
import DomainPage from "./pages/admin/DomainPage";
import Dashboard from "./pages/Dashboard";
import ProjectDetail from "./pages/admin/ProjectDetail";
import StoragePage from "./pages/admin/StoragePage";
import AccountSetting from "./pages/admin/AccountSetting";
import HomePage from "./pages/render/HomePage";
import RenderLayout from "./layouts/RenderLayout";
import SignUpPage from "./pages/render/SignUpPage";
import LoginPage from "./pages/render/LoginPage";
import GitHubCallback from "./pages/render/GitHubCallback";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public route */}
      <Route path="/" element={<RenderLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="/github/callback" element={<GitHubCallback />} />
      </Route>

      {/* Dashboard layout and nested routes */}
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

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
