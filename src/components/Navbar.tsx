import { Link } from "react-router-dom";
import logo from "../assets/mx-logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-slate-900 border-b border-slate-800">
      
      {/* Clickable Logo */}
      <Link to="/">
        <img src={logo} alt="MX GRAD Logo" className="h-12 object-contain" />
      </Link>

      <div className="hidden md:flex gap-8 text-sm">
        <Link to="/about">About Us</Link>
        <a href="#solutions">Solutions</a>
        <a href="#industry">Industry</a>
        <a href="#institutions">Institutions</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="flex gap-4">
        <button className="px-4 py-2 text-sm border border-slate-700 rounded-lg">
          Login
        </button>
        <button className="px-4 py-2 text-sm bg-cyan-500 rounded-lg text-black font-semibold">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
