// Será usado no Routers para liberar o acesso para algumas rotas o acesso apenas do perfil de artista.

export const somenteArtista = (req, res, next) => {
    if (req.usuario.perfil !== "artista") {
        return res.status(403).json({
            mensagem: "Acesso permitido somente para artistas."
        });
    }
    next();
};
