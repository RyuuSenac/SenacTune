import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./auth.jsx";

function Navbar() {
    const { usuario, sair } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        sair();
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <Link to="/musicas" className="brand">
                Senac Sounds
            </Link>

            <div className="nav-links">
                <Link to="/musicas">Músicas</Link>

                {usuario?.perfil === "artista" && (
                    <Link to="/ouvintes">Ouvintes</Link>
                )}

                <Link to="/perfil">Perfil</Link>

                <button onClick={logout} className="button button-secondary">
                    Sair
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
