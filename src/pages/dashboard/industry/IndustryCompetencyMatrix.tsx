import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SkillGroup {
  id: number;
  title: string;
  level: "Critical" | "High" | "Medium";
  skills: string[];
  weight: number;
}

const IndustryCompetencyMatrix = () => {
  const navigate = useNavigate();
  const [approved, setApproved] = useState(false);

  const [groups, setGroups] = useState<SkillGroup[]>([
    {
      id: 1,
      title: "Technical Skills",
      level: "Critical",
      skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"],
      weight: 35,
    },
    {
      id: 2,
      title: "GEN AI Proficiency",
      level: "High",
      skills: ["Prompt Engineering", "LLM Fine-tuning", "RAG Pipelines"],
      weight: 25,
    },
    {
      id: 3,
      title: "Problem Solving",
      level: "High",
      skills: ["Algorithm Design", "Debugging"],
      weight: 20,
    },
    {
      id: 4,
      title: "Communication",
      level: "Medium",
      skills: ["Technical Writing", "Presentation"],
      weight: 10,
    },
    {
      id: 5,
      title: "Domain Knowledge",
      level: "Medium",
      skills: ["NLP", "Computer Vision"],
      weight: 10,
    },
  ]);

  const updateWeight = (id: number, value: number) => {
    setGroups(prev =>
      prev.map(group =>
        group.id === id ? { ...group, weight: value } : group
      )
    );
  };

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-2xl font-semibold mb-6">
        Auto-Generated Competency Matrix
      </h1>

      {groups.map(group => (
        <div
          key={group.id}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">
                {group.title}
                <span className="ml-3 text-xs px-3 py-1 bg-blue-600 rounded-full">
                  {group.level}
                </span>
              </h2>

              <div className="flex flex-wrap gap-2 mt-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-slate-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full md:w-60">
              <div className="flex justify-between text-sm mb-2">
                <span>Weight</span>
                <span>{group.weight}%</span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={group.weight}
                onChange={(e) =>
                  updateWeight(group.id, Number(e.target.value))
                }
                className="w-full accent-blue-600"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="mt-10 flex items-center gap-4">
        {!approved ? (
          <button
            onClick={() => setApproved(true)}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white font-medium shadow-lg hover:scale-105 transition"
          >
            Approve Competency Factors
          </button>
        ) : (
          <>
            <button
              onClick={() =>
                navigate("/dashboard/industry/talent-discovery")
              }
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white font-medium shadow-lg hover:scale-105 transition"
            >
              Find Matching Students →
            </button>

            <div className="px-6 py-3 border border-emerald-500 text-emerald-400 rounded-2xl">
              ✓ Approved
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default IndustryCompetencyMatrix;