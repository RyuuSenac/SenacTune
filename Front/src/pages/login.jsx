import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api.js";
import AuthContext from "../components/auth.jsx";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const { entrar } = useContext(AuthContext);
    const navigate = useNavigate();

    const enviar = async (evento) => {
        evento.preventDefault();
        setErro("");

        try {
            const resposta = await api.post("/auth/login", {
                email,
                senha
            });

            entrar(resposta.data.token, resposta.data.usuario);
            navigate("/musicas");
        } catch (erro) {
            setErro(
                erro.response?.data?.mensagem ||
                "Não foi possível realizar o login."
            );
        }
    };

    return (
        <main className="auth-page">
            <section className="auth-card">
                <h1>Senac Sounds</h1>
                <p className="muted">Entre na sua conta.</p>

                <form onSubmit={enviar} className="form">
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
                        Entrar
                    </button>
                </form>

                <p className="auth-footer">
                    Não possui conta? <Link to="/cadastro">Cadastre-se</Link>
                </p>
            </section>
        </main>
    );
}

export default Login;
