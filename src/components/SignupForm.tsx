import { useState } from "react";
import type { UserRole } from "../types/roles";
import { useNavigate } from "react-router-dom";

interface Props {
  role: UserRole;
}

const SignupForm = ({ role }: Props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Submitting:", role, formData);

    // Later:
    // Firebase signup here

    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

      <div className="max-w-xl w-full bg-slate-900 p-10 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold mb-8 text-center capitalize">
          Sign Up as {role}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Common Fields */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-slate-800"
            onChange={handleChange}
            required
          />

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

          {/* ROLE-SPECIFIC FIELDS */}

          {role === "student" && (
            <>
              <input
                type="text"
                name="college"
                placeholder="College Name"
                className="w-full p-3 rounded-lg bg-slate-800"
                onChange={handleChange}
              />
              <input
                type="text"
                name="course"
                placeholder="Course / Branch"
                className="w-full p-3 rounded-lg bg-slate-800"
                onChange={handleChange}
              />
            </>
          )}

          {role === "industry" && (
            <>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="w-full p-3 rounded-lg bg-slate-800"
                onChange={handleChange}
              />
              <input
                type="text"
                name="designation"
                placeholder="Your Designation"
                className="w-full p-3 rounded-lg bg-slate-800"
                onChange={handleChange}
              />
            </>
          )}

          {role === "institution" && (
            <>
              <input
                type="text"
                name="institutionName"
                placeholder="Institution Name"
                className="w-full p-3 rounded-lg bg-slate-800"
                onChange={handleChange}
              />
              <input
                type="text"
                name="adminContact"
                placeholder="Admin Contact"
                className="w-full p-3 rounded-lg bg-slate-800"
                onChange={handleChange}
              />
            </>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md hover:scale-105 transition duration-300"
          >
            Create Account
          </button>

        </form>

      </div>
    </div>
  );
};

export default SignupForm;
