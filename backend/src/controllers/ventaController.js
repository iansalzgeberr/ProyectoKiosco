const Venta = require('../models/Venta'); // Asegúrate de que la ruta sea correcta

// Obtener todas las ventas
const getVentas = async (req, res) => {
    try {
        const ventas = await Venta.findAll();
        res.status(200).json(ventas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las ventas' });
    }
};

// Obtener una venta por ID
const getVenta = async (req, res) => {
    try {
        const { id } = req.params;
        const venta = await Venta.findByPk(id);
        if (venta) {
            res.status(200).json(venta);
        } else {
            res.status(404).json({ error: 'Venta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la venta' });
    }
};

// Crear una nueva venta
const postVenta = async (req, res) => {
    try {
        const { cliente_id, fecha, total } = req.body;
        const nuevaVenta = await Venta.create({ cliente_id, fecha, total });
        res.status(201).json(nuevaVenta);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear la venta' });
    }
};

// Actualizar una venta por ID
const putVenta = async (req, res) => {
    try {
        const { id } = req.params;
        const { cliente_id, fecha, total } = req.body;
        const venta = await Venta.findByPk(id);
        if (venta) {
            await venta.update({ cliente_id, fecha, total });
            res.status(200).json(venta);
        } else {
            res.status(404).json({ error: 'Venta no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la venta' });
    }
};

// Eliminar una venta por ID
const deleteVenta = async (req, res) => {
    try {
        const { id } = req.params;
        const venta = await Venta.findByPk(id);
        if (venta) {
            await venta.destroy();
            res.status(204).send(); // No content
        } else {
            res.status(404).json({ error: 'Venta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la venta' });
    }
};

module.exports = {
    getVentas,
    getVenta,
    postVenta,
    putVenta,
    deleteVenta,
};
