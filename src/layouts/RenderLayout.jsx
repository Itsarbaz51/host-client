import React from "react";
import { Outlet } from "react-router-dom";
import RenderFooter from "../components/HeaderFooter/RenderFooter";
import RenderNavbar from "../components/HeaderFooter/RenderNavbar";

function RenderLayout() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <RenderNavbar />
      <main className="flex-1 overflow-hidden mt-12">
        <Outlet />
      </main>
      <RenderFooter />
    </div>
  );
}

export default RenderLayout;
