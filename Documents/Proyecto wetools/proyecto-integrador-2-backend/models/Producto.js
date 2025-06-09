// models/Producto.js
const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        maxlength: 100
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    marca: {
        type: String,
        required: true,
        maxlength: 50
    },
    categoria: {
        type: String,
        required: true,
        maxlength: 50
    },
    descCorta: {
        type: String,
        required: true,
        maxlength: 200
    },
    descLarga: {
        type: String,
        required: true
    },
    envio: {
        type: Boolean,
        default: false
    },
    foto: {
        type: String, // URL o nombre de archivo
        required: true
    }
}, {
    timestamps: true // agrega createdAt y updatedAt
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
