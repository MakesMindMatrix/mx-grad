import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { UserRole } from "../types/roles";

interface Props {
  role: UserRole;
}

const LoginForm = ({ role }: Props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Logging in as:", role, formData);

    // Later:
    // Firebase signInWithEmailAndPassword()

    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="max-w-md w-full bg-slate-900 p-10 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold mb-8 text-center capitalize">
          Login as {role}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-slate-800"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-slate-800"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md hover:scale-105 transition duration-300"
          >
            Login
          </button>

        </form>

        <div className="text-center mt-6 text-slate-400 text-sm">
          New user?{" "}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={() => navigate(`/signup/${role}`)}
          >
            Sign Up
          </span>
        </div>

      </div>
    </div>
  );
};

export default LoginForm;
