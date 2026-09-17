import { Router } from "express";
import { login, cadastro, listarUsuarios, listarProprioPerfil } from "../controllers/usuariosControllers.js";
import auth from "../middleware/tokenMiddleware.js";
import { somenteArtista } from "../middleware/artistaMiddleware.js";

const routerUser = Router();

routerUser.post("/auth/register", cadastro);
routerUser.post("/auth/login", login);

routerUser.get("/usuarios", auth, somenteArtista, listarUsuarios);

routerUser.get("/usuarios/perfil", auth, listarProprioPerfil);



export default routerUser;