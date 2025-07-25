import Navbar from "./Components/NavbarSection/NavBar.jsx";
import Hero from "./Components/HeroSection/Hero.jsx";
import WhyUS from "./Components/WhyUsSection/WhyUS.jsx";
import Step from "./Components/Step/Step.jsx";
import Ourmission from "./Components/OurMission/Ourmission.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="relative  overflow-hidden ">
      <Navbar />
      <Hero />
      <WhyUS />
      <Step />
      <Ourmission />
      <Footer />
    </div>
  );
};

export default App;
