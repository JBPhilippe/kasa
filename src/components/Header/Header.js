import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import logo from '../../assets/logo-header.png'
import './header.scss'





const Header = () => {
  return (
    <header className="header">
      
      <figure className="header_fig">
      <Link to="/">
				<img src={logo} alt="Kasa Logo" className="nav-logo" />
			</Link>
    
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}

export default Header;