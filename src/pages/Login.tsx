import { Link } from "react-router-dom";
import logo from "../assets/mx-logo.png";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-6">
      <div className="absolute top-8 left-8">
  <Link to="/">
    <img src={logo} className="h-10" />
  </Link>
</div>

      <div className="max-w-5xl w-full">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Welcome Back
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Select your role to continue into the MX GRAD ecosystem.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Student */}
          <Link to="/login/student">
            <div className="p-10 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 hover:scale-105 transition duration-300 cursor-pointer text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Student</h3>
              <p className="text-slate-400 mb-6">
                Continue learning, track projects, and explore career paths.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md hover:scale-105 transition duration-300">
                Login
              </button>
            </div>
          </Link>

          {/* Industry */}
          <Link to="/login/industry">
            <div className="p-10 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 hover:scale-105 transition duration-300 cursor-pointer text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Industry</h3>
              <p className="text-slate-400 mb-6">
                Access talent dashboards and manage hiring pipelines.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md hover:scale-105 transition duration-300">
                Login
              </button>
            </div>
          </Link>

          {/* Institution */}
          <Link to="/login/institution">
            <div className="p-10 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500 hover:scale-105 transition duration-300 cursor-pointer text-center shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Institution</h3>
              <p className="text-slate-400 mb-6">
                Monitor performance analytics and institutional insights.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md hover:scale-105 transition duration-300">
                Login
              </button>
            </div>
          </Link>

        </div>

        {/* Bottom Switch */}
        <div className="text-center mt-20 text-slate-400">
          New user?{" "}
          <Link to="/get-started" className="text-blue-400 hover:underline">
            Get Started
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;
