import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from '../../components/Banner/Banner'
import imgAboutBanner from "../../assets/imgAboutBanner.png";
import Collapse from "../../components/Collapse/Collapse";
import CollapseData from "../../datas/aboutCollapse.json"

const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner image={imgAboutBanner} titre="" />

        
          <div className="collapse-about">
            {CollapseData.map((data) => {
              return (
                <div key={data.id}>
                  <Collapse title={data.title} content={data.content}/>
                    
                </div>
              );
            })}
          </div>
        
      </main>

      <Footer />
    </div>
  );
};

export default About;