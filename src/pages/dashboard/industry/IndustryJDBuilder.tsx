import { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const IndustryJDBuilder = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [divider, setDivider] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [previewCollapsed, setPreviewCollapsed] = useState(false);

  // Proper drag handling
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!dragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const percentage = ((e.clientX - rect.left) / rect.width) * 100;

      if (percentage > 20 && percentage < 80) {
        setDivider(percentage);
      }
    };

    const stopDragging = () => setDragging(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, [dragging]);

  return (
    <div
      ref={containerRef}
      className="flex h-screen bg-slate-950 text-white overflow-hidden"
    >
      {/* LEFT PANEL */}
      <div
        style={{
          width: previewCollapsed ? "100%" : `${divider}%`,
        }}
        className="transition-all duration-300 flex flex-col border-r border-slate-800"
      >
        <div className="flex-1 p-8 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-6">AI JD Builder</h2>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4">
            <p className="text-slate-400">
              Describe the role you're hiring for.
            </p>
          </div>

          <textarea
            placeholder="Example: Looking for a backend engineer with 3+ years experience in Node.js..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 resize-none focus:outline-none focus:border-blue-600"
            rows={4}
          />

          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md hover:scale-105 transition">
            Generate JD
          </button>
        </div>
      </div>

      {/* DRAG HANDLE */}
      {!previewCollapsed && (
        <div
          onMouseDown={() => setDragging(true)}
          className="w-1 cursor-col-resize bg-slate-800 hover:bg-blue-600 transition"
        />
      )}

      {/* RIGHT PREVIEW PANEL */}
      {!previewCollapsed && (
        <div
          style={{ width: `${100 - divider}%` }}
          className="relative transition-all duration-300 p-8 overflow-y-auto"
        >
          {/* Collapse Button */}
          <button
            onClick={() => setPreviewCollapsed(true)}
            className="absolute top-6 right-6 bg-slate-800 border border-slate-700 rounded-lg p-2 hover:bg-slate-700 transition"
          >
            <ChevronRight size={18} />
          </button>

          <h2 className="text-2xl font-semibold mb-6">JD Preview</h2>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-400">
            Your JD will appear here as it builds...
          </div>
        </div>
      )}

      {/* Expand Button when collapsed */}
      {previewCollapsed && (
        <button
          onClick={() => setPreviewCollapsed(false)}
          className="absolute top-6 right-6 bg-slate-800 border border-slate-700 rounded-lg p-2 hover:bg-slate-700 transition"
        >
          <ChevronLeft size={18} />
        </button>
      )}
    </div>
  );
};

export default IndustryJDBuilder;
