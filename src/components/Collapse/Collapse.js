import { useState } from "react";
import arrow from '../../assets/arrow.png';


const iconInitialState = { transform: "rotate(0deg)", transition: "all 0.2s linear" }

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconStyle, setIconStyle] = useState(iconInitialState);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);

    setIconStyle(isOpen ? iconInitialState : { transform: "rotate(-180deg)", transition: "all 0.2s linear" })


  };

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={toggleCollapse}>
        {title}
        <img src={arrow} className="collapse-icon" alt="collapse icon" style={iconStyle} />
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;

