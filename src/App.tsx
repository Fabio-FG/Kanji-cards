import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Navbar from "./components/structure/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import LearnPage from "./pages/LearnPage/LearnPage";

function App() {
  return (
    <Router>
      <ChakraProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:kanji" element={<DetailsPage />} />
            <Route path="/learn" element={<LearnPage />} />
          </Routes>
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
