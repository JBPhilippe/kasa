import React from 'react';


const Cards = ({image , title}) => {
    return (
      <div className="cards">
        <img src={image} alt={title} className="cards-img" />
        <div className="cards-overlay"></div>
        <h2 className="cards-title">{title}</h2>
      </div>
    );
}

export default Cards;

