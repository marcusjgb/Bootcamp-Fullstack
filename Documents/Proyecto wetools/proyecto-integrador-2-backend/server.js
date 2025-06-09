// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Importar modelos
const Producto = require('./models/Producto');

// Configurar dotenv
dotenv.config();

// Inicializar app
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Public folder (para CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Configurar Handlebars
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch(err => console.error('❌ Error conectando a MongoDB:', err));

// Importar rutas API
const productoRoutes = require('./routes/productoRoutes');
const carritoRoutes = require('./routes/carritoRoutes');

// Rutas API
app.use('/api/productos', productoRoutes);
app.use('/api/carrito', carritoRoutes);

// Rutas de vistas

// HOME - con productos destacados
app.get('/', async (req, res) => {
    try {
        const productos = await Producto.find().lean();
        console.log('👉 Productos:', productos);
        res.render('home', {
            titulo: 'WeTools - Home',
            productos
        });
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).send('Error en el home');
    }
});

// Productos View
app.get('/productos-view', async (req, res) => {
    try {
        const productos = await Producto.find().lean();
        res.render('productos', {
            titulo: 'Listado de Productos - WeTools',
            productos
        });
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).send('Error en productos-view');
    }
});

// Alta de Producto
app.get('/alta-producto', (req, res) => {
    res.render('alta-producto', {
        titulo: 'Alta de Producto - WeTools'
    });
});

// Contacto
app.get('/contacto', (req, res) => {
    res.render('contacto', {
        titulo: 'Contacto - WeTools'
    });
});

// Sucursales
app.get('/sucursales', (req, res) => {
    res.render('sucursales', {
        titulo: 'Sucursales - WeTools'
    });
});

// Nosotros
app.get('/nosotros', (req, res) => {
    res.render('nosotros', {
        titulo: 'Nosotros - WeTools'
    });
});

// Carrito View (opcional)
app.get('/carrito-view/:id', async (req, res) => {
    try {
        const Carrito = require('./models/Carrito');
        const carrito = await Carrito.findById(req.params.id).lean();
        if (!carrito) {
            return res.status(404).send('Carrito no encontrado');
        }
        res.render('carrito-view', {
            titulo: 'Carrito Confirmado - WeTools',
            carrito
        });
    } catch (error) {
        console.error('Error al obtener carrito:', error);
        res.status(500).send('Error en carrito-view');
    }
});

// PORT
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
