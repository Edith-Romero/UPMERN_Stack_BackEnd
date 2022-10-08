import mongoose from "mongoose";

const usuarioShema = mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        trim: true // borra lo espacios anteriores y posteriores que deje el usuario en blanco.
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true, // Esto no permite que usuario registrar otro perfil con el mismo email ya ingresado anteriormente.
    },
    token: {
        type: String,
    },
    confirmado: {
        type: Boolean,
        default: false,
    },
}, {
    timetamps: true //Crea dos columnas extra de creado y actualizado
}
);

const Usuario = mongoose.model("Usuario", usuarioShema); // el modelo se asigna a una variable
export default Usuario;