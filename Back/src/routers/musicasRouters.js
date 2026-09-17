import { Router } from "express";
import { listarMusicas, buscarMusicas } from "../controllers/musicasControllers.js";
import auth from "../middleware/tokenMiddleware.js";

const routerMusicas = Router();

routerMusicas.get("/musicas", auth, listarMusicas);
routerMusicas.get("/musicas/:id", auth, buscarMusicas);


export default routerMusicas;