import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="max-w-xl w-full bg-slate-900 p-10 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-center mb-8">
          Login to MX GRAD
        </h1>

        <div className="space-y-4">

          <Link to="/login/student">
            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold">
              Login as Student
            </button>
          </Link>

          <Link to="/login/industry">
            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold">
              Login as Industry
            </button>
          </Link>

          <Link to="/login/institution">
            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold">
              Login as Institution
            </button>
          </Link>

        </div>

        <div className="text-center mt-8 text-sm text-slate-400">
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
