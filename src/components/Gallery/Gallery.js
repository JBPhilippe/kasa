import React from "react";
import Cards from "../Cards/Cards";
import accomodations from "../../datas/accomodation.json"
import { Link } from "react-router-dom";



const Gallery = () => {
  return (
    <div className="home-gallery">
      {accomodations.map((accomodation) => {
        return (
          <article className="thumb" key={accomodation.id}>
            <Link to={`/logement/${accomodation.id}`}>
              <Cards image={accomodation.cover} title={accomodation.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Gallery;