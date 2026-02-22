import { useState } from "react";

const IndustryTalentDiscovery = () => {
  const [stageFilter, setStageFilter] = useState("All");

  return (
    <div className="p-10 space-y-8">
      <h1 className="text-2xl font-semibold">Student Shortlisting</h1>
      <p className="text-slate-400">
        Detailed candidate profiles with hiring pipeline management.
      </p>

      {/* Pipeline Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {["New", "Shortlisted", "Interview", "Offered", "Rejected"].map(
          (stage, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center"
            >
              <p className="text-2xl font-semibold">{index}</p>
              <p className="text-slate-400 text-sm mt-1">{stage}</p>
            </div>
          )
        )}
      </div>

      {/* Search */}
      <div>
        <input
          placeholder="Search by name or college..."
          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-6 py-3 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Student Card Example */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">
              Arjun Mehta
              <span className="ml-3 text-xs px-3 py-1 bg-blue-600 rounded-full">
                94% Match
              </span>
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              IIT Delhi • Computer Science • 4th Year
            </p>
          </div>
        </div>

        {/* Match Bar */}
        <div className="w-full bg-slate-800 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full w-[94%]" />
        </div>

        {/* Strengths & Gaps */}
        <div className="flex justify-between">
          <div>
            <p className="text-emerald-400 text-sm mb-2">Strengths</p>
            <div className="flex gap-2">
              {["Python", "ML", "Prompt Engineering"].map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 border border-emerald-500 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-red-400 text-sm mb-2">Gaps</p>
            <span className="px-3 py-1 border border-red-500 rounded-full text-sm">
              Cloud Platforms
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <button className="px-5 py-2 border border-slate-700 rounded-xl hover:bg-slate-800 transition">
            Contact
          </button>

          <button className="px-5 py-2 border border-slate-700 rounded-xl hover:bg-slate-800 transition">
            Schedule Interview
          </button>

          <button className="px-6 py-2 bg-blue-600 rounded-xl hover:scale-105 transition">
            Send Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustryTalentDiscovery;