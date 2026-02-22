import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="pt-20 bg-slate-950 text-white">
      <Hero />
      <Stats />
      <Solutions />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
