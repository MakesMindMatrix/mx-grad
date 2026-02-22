import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


const IndustryJDBuilder = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [divider, setDivider] = useState(65);
  const [dragging, setDragging] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!dragging || !containerRef.current) return;
      

      const rect = containerRef.current.getBoundingClientRect();
      const percent = ((e.clientX - rect.left) / rect.width) * 100;

      if (percent > 40 && percent < 85) {
        setDivider(percent);
      }
    };

    const stop = () => setDragging(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", stop);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", stop);
    };
  }, [dragging]);

  return (
    <div
      ref={containerRef}
      className="flex h-screen bg-slate-950 text-white overflow-hidden"
    >
      {/* LEFT CHAT AREA */}
      <div
        style={{ width: collapsed ? "100%" : `${divider}%` }}
        className="flex flex-col border-r border-slate-800 transition-all duration-300"
      >
        {/* Conversation */}
        <div className="flex-1 overflow-y-auto p-10 space-y-6">
          <div className="text-slate-400">
            Start describing the role and I’ll build your JD step by step.
          </div>

          {/* Example Bot Bubble */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 max-w-xl">
            Is this role remote, onsite, or hybrid?
          </div>

          <div className="bg-blue-600 rounded-2xl p-4 max-w-xs ml-auto">
            Onsite
          </div>
        </div>

        {/* Sticky Prompt Bar */}
        <div className="border-t border-slate-800 p-6 bg-slate-950">
          <div className="flex gap-4">
            <textarea
              placeholder="Describe the role you're hiring for..."
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-4 resize-none focus:outline-none focus:border-blue-600"
              rows={3}
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md hover:scale-105 transition">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* DRAG HANDLE */}
      {!collapsed && (
        <div
          onMouseDown={() => setDragging(true)}
          className="w-1 cursor-col-resize bg-slate-800 hover:bg-blue-600 transition"
        />
      )}

      {/* RIGHT PREVIEW PANEL */}
      {!collapsed && (
        <div
          style={{ width: `${100 - divider}%` }}
          className="relative p-8 overflow-y-auto transition-all duration-300"
        >
          {/* Collapse Button */}
          <button
            onClick={() => setCollapsed(true)}
            className="absolute top-6 right-6 bg-slate-800 border border-slate-700 rounded-lg p-2 hover:bg-slate-700 transition"
          >
            <ChevronRight size={18} />
          </button>

          <h2 className="text-2xl font-semibold mb-6">
            Live JD Preview
          </h2>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-400 mb-8">
            JD content will build live here...
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-4 mt-6">
  <button
    onClick={() => navigate("/dashboard/industry/competency-matrix")}
    className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition"
  >
    Competency Matrix
  </button>

  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white shadow-md hover:scale-105 transition">
    Publish JD
  </button>
</div>

<div className="mt-4">
  <button className="px-6 py-2 text-slate-400 hover:text-white transition">
    Save as Draft
  </button>
</div>

        </div>
      )}

      {/* Expand Preview Button */}
      {collapsed && (
        <button
          onClick={() => setCollapsed(false)}
          className="absolute top-6 right-6 bg-slate-800 border border-slate-700 rounded-lg p-2 hover:bg-slate-700 transition"
        >
          <ChevronLeft size={18} />
        </button>
      )}
    </div>
  );
};

export default IndustryJDBuilder;
