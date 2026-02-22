import { useState } from "react";
import { Outlet } from "react-router-dom";
import IndustrySidebar from "../../../components/industry/IndustrySidebar";

const IndustryLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <IndustrySidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default IndustryLayout;
