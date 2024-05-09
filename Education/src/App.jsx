import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/home";
import Inputform from "./components/Home/inputform";
import Header from "./components/Home/Header/header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Inputform />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
