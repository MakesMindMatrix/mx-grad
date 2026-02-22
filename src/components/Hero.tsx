const Hero = () => {
    return (
      <section className="px-8 py-24 text-center bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Empowering Talent to
          <br />
          <span className="text-black">Shape the Future</span>
        </h1>
  
        <p className="mt-6 text-lg max-w-2xl mx-auto text-slate-900">
          MX GRAD connects Students, Industry, and Institutions through AI-powered
          courses and hiring intelligence.
        </p>
  
        <div className="mt-10 flex justify-center gap-6">
          <button className="px-6 py-3 bg-black text-white rounded-lg font-semibold">
            Explore Courses
          </button>
          <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold">
            Hire Talent
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  