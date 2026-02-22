import { Link } from "react-router-dom";
import logo from "../assets/mx-logo.png";


const GetStarted = () => {
  return (
    <div className="pt-28 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
<div className="absolute top-8 left-8">
  <Link to="/">
    <img src={logo} className="h-10" />
  </Link>
</div>

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Join the MX GRAD Ecosystem
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose how you want to get started and unlock AI-powered education,
            hiring intelligence, and industry collaboration.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Student */}
          <Link to="/signup/student">
            <div className="p-10 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 hover:scale-105 transition duration-300 cursor-pointer text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Student</h3>
              <p className="text-slate-400 mb-6">
                Learn industry-ready skills, track projects, and unlock
                career opportunities.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md hover:scale-105 transition duration-300">
                Get Started
              </button>
            </div>
          </Link>

          {/* Industry */}
          <Link to="/signup/industry">
            <div className="p-10 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 hover:scale-105 transition duration-300 cursor-pointer text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Industry</h3>
              <p className="text-slate-400 mb-6">
                Discover verified talent and hire based on real skill intelligence.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md hover:scale-105 transition duration-300">
                Get Started
              </button>
            </div>
          </Link>

          {/* Institution */}
          <Link to="/signup/institution">
            <div className="p-10 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 hover:scale-105 transition duration-300 cursor-pointer text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Institution</h3>
              <p className="text-slate-400 mb-6">
                Integrate curriculum, analyze skill gaps, and empower students.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md hover:scale-105 transition duration-300">
                Get Started
              </button>
            </div>
          </Link>

        </div>

        {/* Bottom Switch */}
        <div className="text-center mt-20 text-slate-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default GetStarted;
