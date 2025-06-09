const express = require('express');
const router = express.Router();
const {
    getProductos,
    getProductoById,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} = require('../controllers/productoController');

// GET /api/productos
router.get('/', getProductos);

// GET /api/productos/:id
router.get('/:id', getProductoById);

// POST /api/productos
router.post('/', crearProducto);

// PUT /api/productos/:id
router.put('/:id', actualizarProducto);

// DELETE /api/productos/:id
router.delete('/:id', eliminarProducto);

module.exports = router;
