
import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/error/Error";
import AccomodationPage from "./pages/accomodationSheet/AccomodationPage";
import "./styles/App.scss"





const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<AccomodationPage />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;