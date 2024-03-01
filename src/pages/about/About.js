import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer"
import imgHomeBanner from "../../assets/imgHomeBanner.png";


const About = () => {
  return (
    <div className="home">
      <Header />
      <Banner image={imgHomeBanner} texte="Chez vous, partout et ailleurs"/>
      <Footer />      
    </div>
  );
};

export default About;