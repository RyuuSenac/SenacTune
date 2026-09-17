import conexao from "../config/db.js";

export const listarMusicas = async (req, res) => {
    try {
        const [musicas] = await conexao.query("SELECT * FROM musicas");
        res.status(200).json(musicas);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

export const buscarMusicas = async (req, res) => {
    try {
        const [resultado] = await conexao.query(
            "SELECT * FROM musicas WHERE id_musica = ?",
            [req.params.id]
        );

        if (resultado.length === 0) {
            return res.status(404).json({
                mensagem: "Música não encontrada."
            });
        }

        res.status(200).json(resultado[0]);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};
