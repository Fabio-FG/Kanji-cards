import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route, BrowserRouter as Router  } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage/DetailsPage";




function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:kanji" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
