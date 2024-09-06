const express = require('express');
const { getCategoriasProductos, postCategoriaProducto, putCategoriaProducto, getCategoriaProducto, deleteCategoriaProducto } = require('../controllers/categoriaProductoController');

const router = express.Router();

// Rutas para Categorías de Productos
router.get('/CategoriaProducto', getCategoriasProductos); // Obtener todas las categorías de productos
router.get('/CategoriaProducto/:id', getCategoriaProducto); // Obtener una categoría de producto por ID
router.post('/CategoriaProducto', postCategoriaProducto); // Crear una nueva categoría de producto
router.put('/CategoriaProducto/:id', putCategoriaProducto); // Actualizar una categoría de producto por ID
router.delete('/CategoriaProducto/:id', deleteCategoriaProducto); // Eliminar una categoría de producto por ID

module.exports = router;
