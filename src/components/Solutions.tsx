const Solutions = () => {
    return (
      <section id="solutions" className="py-24 px-8 bg-slate-950">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Ecosystem
        </h2>
  
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          
          <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              🎓 Students
            </h3>
            <p className="text-slate-400">
              Industry-ready AI courses, certifications, project tracking,
              and placement support.
            </p>
          </div>
  
          <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              🏢 Industry
            </h3>
            <p className="text-slate-400">
              AI-powered talent discovery, prompt-based hiring,
              skill-matched candidates.
            </p>
          </div>
  
          <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              🏫 Institutions
            </h3>
            <p className="text-slate-400">
              Bulk course licensing, curriculum integration,
              skill-gap analytics for colleges.
            </p>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Solutions;
  