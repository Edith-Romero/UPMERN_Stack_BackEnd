import express from "express"
import dotenv from "dotenv"
import conectarBD from "./config/bd.js";


const app = express();

dotenv.config(); // Busca el archivo env para el llamado de las variables de entorno.

conectarBD();

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor corriendo el puerto ${PORT}`);
});