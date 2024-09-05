const Proveedor = require('../models/Proveedor'); // Asegúrate de que la ruta sea correcta

// Obtener todos los proveedores
const getProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.status(200).json(proveedores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los proveedores' });
  }
};

// Obtener un proveedor por ID
const getProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const proveedor = await Proveedor.findByPk(id);
    if (proveedor) {
      res.status(200).json(proveedor);
    } else {
      res.status(404).json({ error: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el proveedor' });
  }
};

// Crear un nuevo proveedor
const postProveedor = async (req, res) => {
  try {
    const { nombre, email, telefono } = req.body;
    const nuevoProveedor = await Proveedor.create({ nombre, email, telefono });
    res.status(201).json(nuevoProveedor);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el proveedor' });
  }
};

// Actualizar un proveedor por ID
const putProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, telefono } = req.body;
    const proveedor = await Proveedor.findByPk(id);
    if (proveedor) {
      await proveedor.update({ nombre, email, telefono });
      res.status(200).json(proveedor);
    } else {
      res.status(404).json({ error: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el proveedor' });
  }
};

// Eliminar un proveedor por ID
const deleteProveedor = async (req, res) => {
  try {
    const { id } = req.params;
    const proveedor = await Proveedor.findByPk(id);
    if (proveedor) {
      await proveedor.destroy();
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ error: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el proveedor' });
  }
};

module.exports = {
  getProveedores,
  getProveedor,
  postProveedor,
  putProveedor,
  deleteProveedor,
};
