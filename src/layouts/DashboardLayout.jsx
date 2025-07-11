import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/HeaderFooter/DashboardNavbar";
import DashboardFooter from "../components/HeaderFooter/DashboardFooter";
import SmoothScroll from "../pages/SmoothScroll";

function DashboardLayout() {
  return (
    // <SmoothScroll>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <DashboardNavbar />

        <main className="flex-1 overflow-hidden">
          <Outlet />
        </main>

        <DashboardFooter />
      </div>
    // </SmoothScroll>
  );
}

export default DashboardLayout;
