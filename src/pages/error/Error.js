import { NavLink } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <NavLink to='/' className ="nav-link-error-home">Accueil</NavLink>
            <NavLink to='/about' className = "nav-link-error-about">A propos</NavLink>
        </div>
    )
}