import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './index.css';

import DashboardLayout from './layouts/DashboardLayout';
import DeploymentPage from './pages/admin/DeploymentPage';
import DomainPage from './pages/admin/DomainPage';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/render/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DashboardLayout />}>
      <Route index element={<HomePage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="deployments" element={<DeploymentPage />} />
      <Route path="domains" element={<DomainPage />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
