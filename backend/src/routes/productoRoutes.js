const express = require('express');
const { obtenerProductos, crearProducto } = require('../controllers/productoController');

const router = express.Router();

router.get('/productos', obtenerProductos);
router.post('/productos', crearProducto);

module.exports = router;
