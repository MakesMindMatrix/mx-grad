const HiringHighlights = () => {
    return (
      <div>
        <h3 className="text-xl font-semibold mb-6">
          Recent Hiring Highlights
        </h3>
  
        <div className="grid grid-cols-2 gap-6">
  
          <Highlight text="Hired 5 AI Engineers from MX GRAD" time="2 days ago" />
          <Highlight text="Top Performing Intern Awarded" time="5 days ago" />
          <Highlight text="120 Students matched to your JD" time="1 week ago" />
          <Highlight text="Competency Matrix updated for 3 roles" time="1 week ago" />
  
        </div>
      </div>
    );
  };
  
  const Highlight = ({ text, time }: any) => (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <p className="font-medium">{text}</p>
      <p className="text-slate-400 text-sm mt-2">{time}</p>
    </div>
  );
  
  export default HiringHighlights;
  