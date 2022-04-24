import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Navbar from "./components/structure/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import LearnPage from "./pages/LearnPage/LearnPage";
import Footer from "./components/structure/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";


function App() {
  return (
    <Router>
      <ChakraProvider>
        <div className="container">
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/learn/:kanji" element={<DetailsPage />} />
              <Route path="/learn" element={<LearnPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
