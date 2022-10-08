import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Desde Api/Usuarios") // Este es un comando que existe en Express para enviar datos a la pantalla
});

export default router;