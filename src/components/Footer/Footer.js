import React from 'react';
import logo from "../../assets/logo-footer.png"

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo Kasa" className="footer-logo" />
      <p className="footer-copyright">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;