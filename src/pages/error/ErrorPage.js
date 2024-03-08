import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
    return (

        <div className="page-404">

            <Header />

            <main>
                <h1 className="titre-404">404</h1>
                <span className="description-404">Oups! La page que vous demandez n'existe pas.</span>
                <NavLink to="/" className="lien-site lien-404">Retourner sur la page d’accueil</NavLink>
            </main>
            
            <Footer />
            
        </div>
    )
}

export default ErrorPage