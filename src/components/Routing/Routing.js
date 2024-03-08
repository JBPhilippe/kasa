import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import AccomodationPage from "../../pages/accomodationSheet/AccomodationPage"
import ErrorPage from "../../pages/error/ErrorPage"

const Routing = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<AccomodationPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Routing;