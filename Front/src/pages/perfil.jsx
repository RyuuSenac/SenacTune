import { useEffect, useState } from "react";
import api from "../services/api.js";
import Navbar from "../components/navbar.jsx";

function Perfil() {
    const [perfil, setPerfil] = useState(null);
    const [erro, setErro] = useState("");

    useEffect(() => {
        const buscarPerfil = async () => {
            try {
                const resposta = await api.get("/usuarios/perfil");
                setPerfil(resposta.data);
            } catch (erro) {
                setErro(
                    erro.response?.data?.mensagem ||
                    "Não foi possível carregar o perfil."
                );
            }
        };

        buscarPerfil();
    }, []);

    return (
        <>
            <Navbar />

            <main className="page-container">
                <h1>Meu perfil</h1>

                {erro && <p className="error-message">{erro}</p>}

                {perfil && (
                    <article className="profile-card">
                        <p><strong>ID:</strong> {perfil.id_usuario}</p>
                        <p><strong>Nome:</strong> {perfil.nome}</p>
                        <p><strong>E-mail:</strong> {perfil.email}</p>
                        <p><strong>Perfil:</strong> {perfil.perfil}</p>
                    </article>
                )}
            </main>
        </>
    );
}

export default Perfil;
