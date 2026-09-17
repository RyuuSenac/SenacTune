import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "../components/auth.jsx";

import Login from "../pages/login.jsx";
import Cadastro from "../pages/cadastro.jsx";
import Musicas from "../pages/musicas.jsx";
import Ouvintes from "../pages/ouvintes.jsx";
import Perfil from "../pages/perfil.jsx";

function ProtectedRoute({ element }) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return element;
}

function ArtistaRoute({ element }) {
    const { usuario, isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (usuario?.perfil !== "artista") {
        return <Navigate to="/musicas" />;
    }

    return element;
}

function Rotas() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />

            <Route
                path="/musicas"
                element={<ProtectedRoute element={<Musicas />} />}
            />

            <Route
                path="/perfil"
                element={<ProtectedRoute element={<Perfil />} />}
            />

            <Route
                path="/ouvintes"
                element={<ArtistaRoute element={<Ouvintes />} />}
            />

            <Route path="*" element={<Navigate to="/musicas" />} />
        </Routes>
    );
}

export default Rotas;
