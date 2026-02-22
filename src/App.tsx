import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LoginRole from "./pages/LoginRole";
import IndustryLayout from "./pages/dashboard/industry/IndustryLayout";
import IndustryDashboard from "./pages/dashboard/industry/IndustryDashboard";
import IndustryJDBuilder from "./pages/dashboard/industry/IndustryJDBuilder";
// import CompetencyMatrix from "./pages/dashboard/industry/CompetencyMatrix";
import IndustryCompetencyMatrix from "./pages/dashboard/industry/IndustryCompetencyMatrix";
import IndustryTalentDiscovery from "./pages/dashboard/industry/IndustryTalentDiscovery.tsx";





function App() {
  return (
    <Router>
      <Routes>

        {/* Public Marketing Pages (WITH NAVBAR) */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route path="/signup/:role" element={<Signup />} />
        <Route path="/login/:role" element={<LoginRole />} />
        {/* <Route path="/dashboard/industry" element={<IndustryDashboard />} /> */}
        
<Route path="/dashboard/industry" element={<IndustryLayout />}>

  <Route index element={<IndustryDashboard />} />

  <Route path="jd-builder" element={<IndustryJDBuilder />} />
  <Route
  path="competency-matrix"
  element={<IndustryCompetencyMatrix />} />
  <Route
  path="talent-discovery"
  element={<IndustryTalentDiscovery />} />


  {/* <Route path="competency-matrix" element={<CompetencyMatrix />} /> */}

</Route>



        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

        {/* Auth Pages (NO NAVBAR) */}
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
