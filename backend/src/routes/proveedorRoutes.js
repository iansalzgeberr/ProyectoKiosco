const express = require('express');
const { getProveedor, postProveedor, putProveedor, getProveedores, deleteProveedor } = require('../controllers/proveedorController');

const router = express.Router();

router.get('/proveedores', getProveedores);
router.get('/proveedores/:id', getProveedor);
router.post('/proveedores', postProveedor);
router.put('/proveedores/:id', putProveedor);
router.delete('/proveedores/:id', deleteProveedor);

module.exports = router;
