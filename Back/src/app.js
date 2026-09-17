import express from "express";
import cors from "cors";

import routerMusicas from "./routers/musicasRouters.js";
import routerUser from "./routers/usuariosRouters.js";

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// ROTA RAIZ:
app.get("/", (req, res) => {
    res.json({
        mensagem: "API Senac Sounds"
    });
});

app.use("/api", routerMusicas);
app.use("/api", routerUser);

// Rota não encontrada.
app.use((req, res) => {
    res.status(404).json({
        mensagem: "Rota não encontrada."
    });
});

export default app;