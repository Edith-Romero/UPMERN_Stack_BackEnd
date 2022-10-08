import mongoosse from "mongoose"

const conectarBD = async () => {
    try {
        const connection = await mongoosse.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        )

        const url = `${connection.connection.host}: ${connection.connection.port}`;
        console.log(`Mongo DB Conectado en: ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1); // Usualmente Node termina los procesos con 0 y al colocarle el 1 forzamos que los procesos se detengan, ya que sin la bd no sirve de nada seguir corriendolos.
    }
}

export default conectarBD;