// App.js
import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import { SearchProvider } from "./context/SearchContext"; 
import SearchResults from "./components/SearchResults";
import FAQ from "./components/FAC";
import TermsOfService from "./components/TermsOfService";
import Privacy from "./components/Privacy";
import LandingPage from "./components/LandingPage";
import SearchPage from "./components/SearchPage";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SearchProvider> {/* Envolver la aplicación con SearchProvider */}
      <Router basename="/Forge3D-Website">
        <Preloader load={load} />
        <div className="App">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/search" element={<SearchResults />} /> {/* Página de resultados */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;
