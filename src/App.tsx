import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/structure/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:kanji" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
