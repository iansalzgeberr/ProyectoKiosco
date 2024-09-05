const express = require('express');
const { getVenta, postVenta, putVenta, getVentas, deleteVenta } = require('../controllers/ventaController');

const router = express.Router();

// Rutas para las ventas
router.get('/ventas', getVentas); // Obtener todas las ventas
router.get('/ventas/:id', getVenta); // Obtener una venta por ID
router.post('/ventas', postVenta); // Crear una nueva venta
router.put('/ventas/:id', putVenta); // Actualizar una venta por ID
router.delete('/ventas/:id', deleteVenta); // Eliminar una venta por ID

module.exports = router;
