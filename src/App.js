import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeroCarousel from "./components/Carousel/HeroCarousel";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ProjectInside from "./pages/ProjectInside/ProjectInside";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <HeroCarousel/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectInside />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
