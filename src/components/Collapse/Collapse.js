import { useState } from "react";
import arrow from '../../assets/arrow.png';


const iconInitialState = { transform: "rotate(0deg)", transition: "all 0.2s linear" }

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconStyle, setIconStyle] = useState(iconInitialState);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);

    setIconStyle(isOpen ? iconInitialState : { transform: "rotate(-180deg)", transition: "all 0.2s linear" })


  };


  return (


    <div className="collapse-bar">
      <div className="outer-container">
        <button className="collapse-button" onClick={toggleCollapse}>
          {title}
          <img src={arrow} className="collapse-icon" alt="collapse icon" style={iconStyle} />
        </button>
        <div className="inner-container">
          <div className={isOpen ? 'collapse_dropdown' : 'collapse_dropdown_hidden'}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;

