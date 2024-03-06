import React from "react";
import './style.scss'


const Banner = ({ image, texte }) => {
  return (
    <div className="banner">
      <img className="banner-img" src={image} alt="Bannière" />
      <div className="banner-overlay"></div>
      <span className="banner-txt">{texte}</span>
    </div>
  );
}

export default Banner;