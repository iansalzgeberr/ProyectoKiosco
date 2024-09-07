const express = require('express');
const { 
  getProductos, 
  getProducto, 
  postProducto, 
  putProducto, 
  deleteProducto 
} = require('../controllers/productoController'); // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Rutas para la tabla Productos
router.get('/productos', getProductos);            // Obtener todos los productos
router.get('/productos/:id', getProducto);         // Obtener un producto por ID
router.post('/productos', postProducto);           // Crear un nuevo producto
router.put('/productos/:id', putProducto);         // Actualizar un producto por ID
router.delete('/productos/:id', deleteProducto);   // Eliminar un producto por ID

module.exports = router;
