import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Presentation from "./pages/Presentation";
import Experiences from "./pages/Experiences";
import Publications from "./pages/Publications";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;