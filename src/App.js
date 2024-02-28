
import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/error/Error";
// import AccomodationCard from "./pages/accomodation/AccomodationCard";
// a importer qd les fiches logements seront en place
import "./styles/App.scss"




const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/logement/:id" element={<AccomodationCard />} /> */}
        {/* A voir qd les fiches seront en place, penser à l'ID des logements */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;