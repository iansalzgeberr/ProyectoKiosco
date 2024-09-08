const express = require('express');
const { getCliente, postCliente, putCliente, getClientes, deleteCliente } = require('../controllers/clienteController');

const router = express.Router();

// Rutas para los Compra
router.get('/Compra', getClientes); 
router.get('/Compra/:id', getCliente); 
router.post('/Compra', postCliente); 
router.put('/Compra/:id', putCliente); 
router.delete('/Compra/:id', deleteCliente); 

module.exports = router;