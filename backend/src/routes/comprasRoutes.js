const express = require('express');
const { getCompras, postCompra, putCompra, getCompra, deleteCompra } = require('../controllers/ventaController');

const router = express.Router();

// Rutas para los Compra
router.get('/Compra', getCompras); // Obtener todas las Compra
router.get('/Compra/:id', getCompra); // Obtener una Compra por ID
router.post('/Compra', postCompra); // Crear una nueva Compra
router.put('/Compra/:id', putCompra); // Actualizar una Compra por ID
router.delete('/Compra/:id', deleteCompra); // Eliminar una Compra por ID

module.exports = router;