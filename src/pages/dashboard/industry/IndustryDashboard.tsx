import { useState } from "react";
import IndustrySidebar from "../../../components/industry/IndustrySidebar";
import IndustryTopStats from "../../../components/industry/IndustryTopStats";
import WelcomeCard from "../../../components/industry/WelcomeCard";
import HiringHighlights from "../../../components/industry/HiringHighlights";
import NewsUpdates from "../../../components/industry/NewsUpdates";

const IndustryDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <IndustrySidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
    

        <div className="p-8 space-y-8">
          <IndustryTopStats />
          <WelcomeCard />
          <HiringHighlights />
          <NewsUpdates />
        </div>
      </div>
    </div>
  );
};

export default IndustryDashboard;
