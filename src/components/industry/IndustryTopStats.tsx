const IndustryTopStats = () => {
    return (
      <div className="grid grid-cols-4 gap-6">
  
        <StatCard title="Active Postings" value="12" growth="+3" />
        <StatCard title="New Matches (>85%)" value="47" growth="+8" />
        <StatCard title="Interviewing Today" value="5" />
        <StatCard title="Training Pipeline" value="120" growth="+25" />
  
      </div>
    );
  };
  
  const StatCard = ({ title, value, growth }: any) => (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <p className="text-slate-400 text-sm">{title}</p>
      <div className="flex items-center gap-2 mt-2">
        <h3 className="text-2xl font-bold">{value}</h3>
        {growth && (
          <span className="text-green-400 text-sm">{growth}</span>
        )}
      </div>
    </div>
  );
  
  export default IndustryTopStats;
  