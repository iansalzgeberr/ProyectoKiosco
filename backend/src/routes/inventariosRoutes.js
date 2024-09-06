const express = require('express');
const { getInventarios, postInventario, putInventario, getInventario, deleteInventario } = require('../controllers/inventarioController');

const router = express.Router();

// Rutas para Inventario
router.get('/Inventario', getInventarios); // Obtener todo el inventario
router.get('/Inventario/:id', getInventario); // Obtener un inventario por ID
router.post('/Inventario', postInventario); // Crear un nuevo inventario
router.put('/Inventario/:id', putInventario); // Actualizar un inventario por ID
router.delete('/Inventario/:id', deleteInventario); // Eliminar un inventario por ID

module.exports = router;
