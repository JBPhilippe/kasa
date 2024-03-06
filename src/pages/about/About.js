import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import Banner from '../../components/Banner/Banner'
import imgAboutBanner from "../../assets/imgAboutBanner.png";
import Collapse from "../../components/Collapse/Collapse";
import CollapseData from "../../datas/aboutCollapse.json"
import './style.scss'

const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner image={imgAboutBanner} titre="" />

        <div className="collapse">
          <div className="collapse__dropdown">
            {CollapseData.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse title={item.title}>
                    <p>{item.content}</p>
                    </Collapse>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;