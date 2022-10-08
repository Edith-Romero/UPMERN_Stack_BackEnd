import express from "express"
import dotenv from "dotenv"
import conectarBD from "./config/bd.js";
import usuarioRouters from "./routes/usuarioRouters.js"


const app = express();

dotenv.config(); // Busca el archivo env para el llamado de las variables de entorno.

conectarBD();

//Routing se agrupan pero estaran por separadas por categorias y asociadas con diferentes controladores
app.use("/api/usuarios", usuarioRouters)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor corriendo el puerto ${PORT}`);
});