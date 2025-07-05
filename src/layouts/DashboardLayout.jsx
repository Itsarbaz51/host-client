import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/HeaderFooter/Footer";
import Navbar from "../components/HeaderFooter/Navbar";

function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />

      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default DashboardLayout;
