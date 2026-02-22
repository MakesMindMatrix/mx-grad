import { Link } from "react-router-dom";
import logo from "../assets/mx-logo.png";


const Navbar = () => {
  return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm px-8 py-4 flex items-center justify-between">
      
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
      <Link to="/login">
            <button className="px-4 py-2 border rounded-lg">
              Login
            </button>
          </Link>
            
          <Link to="/get-started">
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md hover:scale-105 transition duration-300">
              Get Started
            </button>
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
