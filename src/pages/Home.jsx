import Collaboration from "../components/Collaboration";
import Empowerment from "../components/Empowerment";
import Enhancement from "../components/Enhancement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Projects from "../components/Projects";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Empowerment />
      <Collaboration />
      <Enhancement />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
