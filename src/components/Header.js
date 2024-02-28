import logo from "../assets/logo.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        { <img className="logo" src={logo} alt="logo de l'agence kasa" /> }
      </figure>
      <Nav className="nav-header" />
    </header>
  );
}