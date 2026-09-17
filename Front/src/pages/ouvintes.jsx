import { useEffect, useState } from "react";
import api from "../services/api.js";
import Navbar from "../components/navbar.jsx";

function Ouvintes() {
    const [ouvintes, setOuvintes] = useState([]);
    const [erro, setErro] = useState("");

    useEffect(() => {
        const buscarOuvintes = async () => {
            try {
                const resposta = await api.get("/usuarios");

                const lista = resposta.data.filter(
                    (usuario) => usuario.perfil === "ouvinte"
                );

                setOuvintes(lista);
            } catch (erro) {
                setErro(
                    erro.response?.data?.mensagem ||
                    "Não foi possível carregar os ouvintes."
                );
            }
        };

        buscarOuvintes();
    }, []);

    return (
        <>
            <Navbar />

            <main className="page-container">
                <h1>Ouvintes</h1>

                {erro && <p className="error-message">{erro}</p>}

                {ouvintes.length === 0 && !erro && (
                    <p>Nenhum ouvinte cadastrado.</p>
                )}

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>

                        <tbody>
                            {ouvintes.map((ouvinte) => (
                                <tr key={ouvinte.id_usuario}>
                                    <td>{ouvinte.id_usuario}</td>
                                    <td>{ouvinte.nome}</td>
                                    <td>{ouvinte.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default Ouvintes;
