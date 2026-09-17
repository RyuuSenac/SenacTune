import { createRoot } from "react-dom/client";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./components/auth.jsx";
import Rotas from "./routes/rotas.jsx";
import "./index.css";

function App() {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [usuario, setUsuario] = useState(() => {
        const usuarioSalvo = localStorage.getItem("usuario");
        return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
    });

    const entrar = (novoToken, novoUsuario) => {
        localStorage.setItem("token", novoToken);
        localStorage.setItem("usuario", JSON.stringify(novoUsuario));

        setToken(novoToken);
        setUsuario(novoUsuario);
    };

    const sair = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");

        setToken(null);
        setUsuario(null);
    };

    return (
        <AuthContext.Provider
            value={{
                usuario,
                token,
                isAuthenticated: !!token,
                entrar,
                sair
            }}
        >
            <BrowserRouter>
                <Rotas />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

createRoot(document.getElementById("root")).render(<App />);
