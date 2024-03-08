import React, { useState } from "react";
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Slider = ({ sliderPicture }) => {

  const [current, setCurrent] = useState(0);
  const length = sliderPicture.length;


  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (

    <section className="slide">

      {length > 1 && (
        <p className="left-Arrow" onClick={prevImage}>
          <img src={leftArrow} alt="Left Arrow"></img>
        </p>
      )}

      {length > 1 && (
        <p className="right-Arrow" onClick={nextImage}>
          <img src={rightArrow} alt="Right Arrow"></img>
        </p>
      )}

      {sliderPicture.map((image, index) => {

        return (
          <div key={index} className={index === current ? "slider active" : "slider"}>

            {index === current && (
              <img src={image} alt="img-appartement" className="slide__image" />
            )}

            {index === current && length > 1 && (
              <span className="slider__number">
                {current + 1}/{length}
              </span>

            )}
          </div>
        );
      })}
    </section>
  );
}


export default Slider;