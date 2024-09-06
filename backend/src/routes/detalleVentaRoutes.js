const express = require('express');
const { getDetallesVenta, postDetallesVenta, putDetallesVenta, getDetallesVenta, deleteDetallesVenta } = require('../controllers/ventaController');

const router = express.Router();

// Rutas para los detalleVenta
router.get('/detalleVenta', getDetallesVenta); // Obtener todas las detalleventa
router.get('/detalleVenta/:id', getDetallesVenta); // Obtener una detalleventa por ID
router.post('/detalleVenta', postDetallesVenta); // Crear una nueva detalleventa
router.put('/detalleVenta/:id', putDetallesVenta); // Actualizar una detalleventa por ID
router.delete('/detalleVenta/:id', deleteDetallesVenta); // Eliminar una detalleventa por ID

module.exports = router;