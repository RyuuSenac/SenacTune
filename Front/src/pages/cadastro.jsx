import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api.js";

function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const navigate = useNavigate();

    const enviar = async (evento) => {
        evento.preventDefault();
        setErro("");

        try {
            await api.post("/auth/register", {
                nome,
                email,
                senha
            });

            navigate("/login");
        } catch (erro) {
            setErro(
                erro.response?.data?.mensagem ||
                "Não foi possível realizar o cadastro."
            );
        }
    };

    return (
        <main className="auth-page">
            <section className="auth-card">
                <h1>Cadastro</h1>
                <p className="muted">Crie sua conta de ouvinte.</p>

                <form onSubmit={enviar} className="form">
                    <label>
                        Nome
                        <input
                            type="text"
                            value={nome}
                            onChange={(evento) => setNome(evento.target.value)}
                            required
                        />
                    </label>

                    <label>
                        E-mail
                        <input
                            type="email"
                            value={email}
                            onChange={(evento) => setEmail(evento.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Senha
                        <input
                            type="password"
                            value={senha}
                            onChange={(evento) => setSenha(evento.target.value)}
                            required
                        />
                    </label>

                    {erro && <p className="error-message">{erro}</p>}

                    <button type="submit" className="button">
                        Cadastrar
                    </button>
                </form>

                <p className="auth-footer">
                    Já possui conta? <Link to="/login">Entrar</Link>
                </p>
            </section>
        </main>
    );
}

export default Cadastro;
