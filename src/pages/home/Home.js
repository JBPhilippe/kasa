import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import imgHomeBanner from "../../assets/imgHomeBanner.png";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";


const Home = () => {
  document.title = "Kasa"
  return (
    <div className="home">
      <Header />
      <main>
        <Banner image={imgHomeBanner} texte="Chez vous, partout et ailleurs" />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;