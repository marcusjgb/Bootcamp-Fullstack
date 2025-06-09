# 🚀 Proyecto Integrador II - Backend WeTools

### 📌 Autor: Marcos González  
### 📅 Fecha: Junio 2025

---

## 🎯 Objetivo del Proyecto

Desarrollo del **Backend** para la tienda *WeTools*, cumpliendo los requerimientos de la consigna del **Proyecto Integrador II**:

✅ Arquitectura en capas (MVC)  
✅ CRUD completo de productos  
✅ API REST con Express y MongoDB Atlas  
✅ Motor de plantillas Handlebars  
✅ Rutas para carrito  
✅ Buenas prácticas de desarrollo

---

## 🛠️ Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB Atlas (Mongoose)
- Express-Handlebars
- Body-Parser
- Dotenv
- Postman (para pruebas de API)

---

## 📂 Estructura de carpetas

```plaintext
/config
/controllers
/models
/routes
/views
/public
server.js
.env_example
.gitignore
README.md

| Método | Ruta                 | Descripción                 |
| ------ | -------------------- | --------------------------- |
| GET    | `/api/productos`     | Obtener todos los productos |
| GET    | `/api/productos/:id` | Obtener un producto por ID  |
| POST   | `/api/productos`     | Crear un nuevo producto     |
| PUT    | `/api/productos/:id` | Actualizar un producto      |
| DELETE | `/api/productos/:id` | Eliminar un producto        |

| Método | Ruta           | Descripción                                        |
| ------ | -------------- | -------------------------------------------------- |
| POST   | `/api/carrito` | Recibir un array de productos y guardar el carrito |

# Instalar dependencias
npm install

# Crear el archivo .env basado en .env_example

# Ejecutar en modo desarrollo
npm run dev

# O en modo producción
npm start

