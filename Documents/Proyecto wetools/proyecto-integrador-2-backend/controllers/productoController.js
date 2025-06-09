// controllers/productoController.js
const Producto = require('../models/Producto');

// GET /api/productos → obtener todos los productos
const getProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ message: 'Error al obtener productos' });
    }
};

// GET /api/productos/:id → obtener un producto por ID
const getProductoById = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json(producto);
    } catch (error) {
        console.error('Error al obtener producto:', error);
        res.status(500).json({ message: 'Error al obtener producto' });
    }
};

// POST /api/productos → crear un nuevo producto
const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto({
            nombre: req.body.nombre,
            precio: req.body.precio,
            stock: req.body.stock,
            marca: req.body.marca,
            categoria: req.body.categoria,
            descCorta: req.body['desc-corta'],
            descLarga: req.body['desc-larga'],
            envio: req.body.envio || false,
            foto: req.body.foto || 'default.jpg'
        });

        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado);
    } catch (error) {
        console.error('Error al crear producto:', error);
        res.status(500).json({ message: 'Error al crear producto' });
    }
};

// PUT /api/productos/:id → actualizar un producto
const actualizarProducto = async (req, res) => {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(
            req.params.id,
            {
                nombre: req.body.nombre,
                precio: req.body.precio,
                stock: req.body.stock,
                marca: req.body.marca,
                categoria: req.body.categoria,
                descCorta: req.body['desc-corta'],
                descLarga: req.body['desc-larga'],
                envio: req.body.envio,
                foto: req.body.foto
            },
            { new: true } // para que retorne el producto actualizado
        );

        if (!productoActualizado) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json(productoActualizado);
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).json({ message: 'Error al actualizar producto' });
    }
};

// DELETE /api/productos/:id → eliminar un producto
const eliminarProducto = async (req, res) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);

        if (!productoEliminado) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ message: 'Error al eliminar producto' });
    }
};

// Exportamos las funciones
module.exports = {
    getProductos,
    getProductoById,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};

