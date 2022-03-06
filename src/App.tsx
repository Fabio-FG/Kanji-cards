import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/:id" element={<DetailsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
