import Empowerment from "./components/Empowerment";
import Enhancement from "./components/Enhancement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";

function App() {
    return (
        <div>
            <Navbar />
            <Projects />
            <Empowerment />
            <Enhancement />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default App;
