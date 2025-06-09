// controllers/carritoController.js
const Carrito = require('../models/Carrito');

// POST /api/carrito → recibir y guardar carrito
const crearCarrito = async (req, res) => {
    try {
        const { productos } = req.body;

        if (!productos || !Array.isArray(productos) || productos.length === 0) {
            return res.status(400).json({ message: 'El carrito debe contener productos' });
        }

        const nuevoCarrito = new Carrito({ productos });
        const carritoGuardado = await nuevoCarrito.save();

        res.status(201).json({
            message: 'Carrito guardado correctamente',
            carrito: carritoGuardado
        });
    } catch (error) {
        console.error('Error al guardar carrito:', error);
        res.status(500).json({ message: 'Error al guardar carrito' });
    }
};

module.exports = {
    crearCarrito
};
