// routes/carritoRoutes.js
const express = require('express');
const router = express.Router();
const { crearCarrito } = require('../controllers/carritoController');

// POST /api/carrito
router.post('/', crearCarrito);

module.exports = router;
