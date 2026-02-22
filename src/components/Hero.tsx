const Hero = () => {
    return (
      <section className="px-8 py-24 text-center bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
        <h1 className="text-6xl font-extrabold leading-tight text-white">
    Empowering Talent to
          <br />
          <span className="text-slate-900">Shape the Future</span>
        </h1>
  
        <p className="mt-6 text-lg max-w-2xl mx-auto text-slate-900">
          MX GRAD connects Students, Industry, and Institutions through AI-powered
          courses and hiring intelligence.
        </p>
  
        <div className="flex gap-4 justify-center mt-8">

  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md hover:scale-105 transition duration-300">
    Explore Courses
  </button>

  <button className="px-6 py-3 bg-white text-gray-900 rounded-xl shadow-md hover:scale-105 transition duration-300">
    Hire Talent
  </button>

</div>

        
      </section>
    );
  };
  
  export default Hero;
  