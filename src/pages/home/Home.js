import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import imgHomeBanner from "../../assets/imgHomeBanner.png";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";


const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Banner image={imgHomeBanner} texte="Chez vous, partout et ailleurs"/>
        <Gallery />
        <Footer />
        </main>     
    </div>
  );
};

export default Home;