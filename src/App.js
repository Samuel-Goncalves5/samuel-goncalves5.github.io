import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Presentation from "./pages/Presentation";
import Experiences from "./pages/Experiences";
import Publications from "./pages/Publications";
import Events from "./pages/Events";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
};

export default App;