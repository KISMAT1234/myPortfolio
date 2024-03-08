import React from "react";
import Banner from "./components/banner/Banner";
import Skill from "./components/skills/Skill";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
// import Resume from "./components/resume/Resume";
// import Testimonial from "./components/tesimonial/Testimonial";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Skill/>
         <Features />
         <Projects />
        {/* <Resume /> */}
        {/* <Testimonial /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
