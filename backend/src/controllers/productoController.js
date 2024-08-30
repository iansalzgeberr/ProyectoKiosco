const Producto = require('../models/Producto');

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
};

// Crear un nuevo producto
const crearProducto = async (req, res) => {
  try {
    const { nombre, precio, stock } = req.body;
    const nuevoProducto = await Producto.create({ nombre, precio, stock });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

module.exports = {
  obtenerProductos,
  crearProducto,
};
