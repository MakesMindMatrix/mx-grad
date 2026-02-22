import { useState, type JSX } from "react";
import { NavLink } from "react-router-dom";

import {
  Home,
  Sparkles,
  Users,
  BarChart3,
  Briefcase,
  Calendar,
  UserCircle,
  Settings,
  MessageSquare,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

interface MenuItem {
  icon: JSX.Element;
  label: string;
  path: string;
}

const IndustrySidebar = ({ sidebarOpen, setSidebarOpen }: Props) => {
  const menuItems: MenuItem[] = [
    { icon: <Home size={20} />, label: "Home", path: "/dashboard/industry" },
    { icon: <Sparkles size={20} />, label: "AI JD Builder", path: "/dashboard/industry/jd-builder" },
    { icon: <BarChart3 size={20} />, label: "Competency Matrix", path: "/dashboard/industry/competency-matrix" },
    { icon: <Users size={20} />, label: "Talent Discovery", path: "/dashboard/industry/talent-discovery" },
    { icon: <Briefcase size={20} />, label: "Future Hiring", path: "/dashboard/industry/future-hiring" },
    { icon: <Calendar size={20} />, label: "Events", path: "/dashboard/industry/events" },
    { icon: <UserCircle size={20} />, label: "Company Profile", path: "/dashboard/industry/company-profile" },
    { icon: <Settings size={20} />, label: "Settings", path: "/dashboard/industry/settings" },
  ];
  
  
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-slate-950 border-r border-slate-800 transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex flex-col h-full">

        {/* Top Logo + Toggle */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
              M
            </div>
            {sidebarOpen && (
              <div>
                <p className="font-semibold">MindMatrix</p>
                <p className="text-xs text-slate-400">Industry Portal</p>
              </div>
            )}
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-slate-400 hover:text-white"
          >
            {sidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
          </button>
        </div>

        {/* AI Assistant Button */}
        <div className="p-4">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white shadow-md hover:scale-105 transition">
            <MessageSquare size={18} />
            {sidebarOpen && "AI Assistant"}
          </button>
        </div>

        {/* Navigation Label */}
        {sidebarOpen && (
          <p className="text-xs uppercase tracking-widest text-slate-500 px-6 mt-2">
            Navigation
          </p>
        )}

        {/* Menu Items */}
        <div className="flex-1 mt-4 space-y-2 px-3">
  {menuItems.map((item, index) => (
    <NavLink
    key={index}
    to={item.path}
    end={item.path === "/dashboard/industry"}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
        isActive
          ? "bg-slate-800 text-white"
          : "text-slate-400 hover:bg-slate-800 hover:text-white"
      }`
    }
  >
  
  
      {item.icon}
      {sidebarOpen && <span>{item.label}</span>}
    </NavLink>
  ))}
</div>

      </div>
    </div>
  );
};

export default IndustrySidebar;
