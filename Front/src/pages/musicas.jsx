import { useEffect, useState } from "react";
import api from "../services/api.js";
import Navbar from "../components/navbar.jsx";

function Musicas() {
    const [musicas, setMusicas] = useState([]);
    const [erro, setErro] = useState("");

    useEffect(() => {
        const buscarMusicas = async () => {
            try {
                const resposta = await api.get("/musicas");
                setMusicas(resposta.data);
            } catch (erro) {
                setErro(
                    erro.response?.data?.mensagem ||
                    "Não foi possível carregar as músicas."
                );
            }
        };

        buscarMusicas();
    }, []);

    return (
        <>
            <Navbar />

            <main className="page-container">
                <h1>Músicas</h1>

                {erro && <p className="error-message">{erro}</p>}

                {musicas.length === 0 && !erro && (
                    <p>Nenhuma música cadastrada.</p>
                )}

                <div className="card-grid">
                    {musicas.map((musica) => (
                        <article className="content-card" key={musica.id_musica}>
                            <h2>{musica.titulo}</h2>
                            <p><strong>Artista:</strong> {musica.artista}</p>
                            <p><strong>Gênero:</strong> {musica.genero}</p>
                            <p><strong>Duração:</strong> {musica.duracao}</p>
                            <p><strong>Ano:</strong> {musica.ano_lancamento}</p>
                        </article>
                    ))}
                </div>
            </main>
        </>
    );
}

export default Musicas;
