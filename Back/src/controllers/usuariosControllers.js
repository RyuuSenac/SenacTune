import jwt from "jsonwebtoken";
import conexao from "../config/db.js";

export const login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({
                mensagem: "Informe o email e a senha."
            });
        }

        const [usuarios] = await conexao.query(
            `
            SELECT id_usuario, nome, email, perfil
            FROM usuario
            WHERE email = ? AND senha = ?
            `,
            [email, senha]
        );

        if (usuarios.length === 0) {
            return res.status(401).json({
                mensagem: "Usuário ou senha inválidos."
            });
        }

        const usuario = usuarios[0];

        const carregar = {
            id: usuario.id_usuario,
            perfil: usuario.perfil
        };

        const token = jwt.sign(
            carregar,
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.status(200).json({
            mensagem: "Login realizado com sucesso!",
            token,
            usuario: {
                id: usuario.id_usuario,
                nome: usuario.nome,
                email: usuario.email,
                perfil: usuario.perfil
            }
        });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};


export const cadastro = async (req, res) => {
    try {
        const perfil = "ouvinte";

        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({
                mensagem: "Preencha todos os dados."
            });
        }

        const [existente] = await conexao.query(
            `SELECT id_usuario FROM usuario WHERE email = ?`,
            [email]
        );

        if (existente.length > 0) {
            return res.status(409).json({
                mensagem: "Já existe um usuário cadastrado com esse email."
            });
        }

        await conexao.query(
            `
            INSERT INTO usuario (nome, email, senha, perfil)
            VALUES (?, ?, ?, ?)
            `,
            [nome, email, senha, perfil]
        );

        res.status(201).json({
            mensagem: "Cadastrado com sucesso!"
        });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

export const listarProprioPerfil = async (req, res) => {
    try {
        const [perfil] = await conexao.query(
            `
            SELECT id_usuario, nome, email, perfil
            FROM usuario
            WHERE id_usuario = ?
            `,
            [req.usuario.id]
        );

        if (perfil.length === 0) {
            return res.status(404).json({
                mensagem: "Usuário não encontrado."
            });
        }

        res.status(200).json(perfil[0]);

    } catch (erro) {
        res.status(500).json({
            erro: erro.message
        });
    }
};

export const listarUsuarios = async (req, res) => {
    try {
        const [usuarios] = await conexao.query(
            `SELECT id_usuario, nome, email, perfil FROM usuario`
        );

        res.status(200).json(usuarios);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};
