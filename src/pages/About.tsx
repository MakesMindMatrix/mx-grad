import Navbar from "../components/Navbar";
import aboutImg from "../assets/about-image.jpeg"; // add your image here
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navbar />

      {/* Header Section */}
      <section className="py-20 text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          About MX GRAD
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We are on a mission to revolutionize higher education by creating meaningful
          connections between academia and industry.
        </p>
      </section>

      {/* Vision & Mission Section */}
      <section className="px-8 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div>
            <img
              src={aboutImg}
              alt="About MX Grad"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8">

            {/* Vision Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be India's leading platform bridging the gap between academic
                learning and industry requirements, creating a future-ready workforce
                equipped with cutting-edge skills and industry experience.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To empower students with practical skills, innovative thinking,
                and direct industry exposure through AI-driven learning platforms,
                hands-on labs, and strategic partnerships.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our Values
          </h2>
          <p className="text-gray-600 mb-12">
            The principles that guide everything we do
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                Commitment to highest quality in education and outcomes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600 text-sm">
                Building bridges between students, institutions, and industry.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Impact
              </h3>
              <p className="text-gray-600 text-sm">
                Creating measurable change in careers and communities.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                Pioneering new approaches to learning and skill development.
              </p>
            </div>

          </div>
        </div>
      </section>

          {/* Timeline Section */}
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
        <p className="text-gray-600">
          Key milestones in transforming education
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>

        {[
          { year: "2018", title: "Foundation", text: "MX GRAD launched with a vision to transform higher education." },
          { year: "2019", title: "First 1000 Students", text: "Trained 1000+ students across 10 institutions." },
          { year: "2020", title: "Innovation Labs", text: "Established research and innovation labs." },
          { year: "2021", title: "Industry Partnerships", text: "Partnered with 100+ companies." },
          { year: "2022", title: "LaunchPad Initiative", text: "Startup incubation program launched." },
          { year: "2023", title: "National Recognition", text: "Recognized as leading academia-industry bridge." },
          { year: "2024", title: "AI-Powered Learning", text: "Integrated advanced AI evaluation & personalized learning." },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`mb-16 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div className="bg-white w-80 p-6 rounded-xl shadow-md border">
              <div className="text-blue-600 font-bold mb-2">{item.year}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>

    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
  <h2 className="text-4xl font-bold mb-6">
    Join Our Mission
  </h2>

  <p className="mb-8 text-lg">
    Be part of the movement transforming education and careers across India.
  </p>

  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md hover:scale-105 transition duration-300"
  >
    Get Started
  </button>
</section>


    </div>
    </div>
  );
};

export default About;
