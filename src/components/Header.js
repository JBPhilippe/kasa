import logo from "../assets/logo-header.png";
import Nav from "./Nav";



const Header = () => {
  return (
    <header className="header">
      <figure className="header_fig">
        { <img className="logo" src={logo} alt="logo de l'agence kasa" /> }
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}

export default Header;