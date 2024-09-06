const DetalleVenta = require('../models/DetalleVenta');

const getDetallesVenta = async (req, res) => {
    try {
        const detalles = await DetalleVenta.findAll();
        res.status(200).json(detalles);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los detalles de venta' });
    }
};

const getDetalleVenta = async (req, res) => {
    try {
        const { id } = req.params;
        const detalle = await DetalleVenta.findByPk(id);
        if (detalle) {
            res.status(200).json(detalle);
        } else {
            res.status(404).json({ error: 'Detalle de venta no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el detalle de venta' });
    }
};

const postDetalleVenta = async (req, res) => {
    try {
        const { venta_id, producto_id, cantidad, total } = req.body;
        const nuevoDetalle = await DetalleVenta.create({ venta_id, producto_id, cantidad, total });
        res.status(201).json(nuevoDetalle);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el detalle de venta' });
    }
};

const putDetalleVenta = async (req, res) => {
    try {
        const { id } = req.params;
        const { venta_id, producto_id, cantidad, total } = req.body;
        const detalle = await DetalleVenta.findByPk(id);
        if (detalle) {
            await detalle.update({ venta_id, producto_id, cantidad, total });
            res.status(200).json(detalle);
        } else {
            res.status(404).json({ error: 'Detalle de venta no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el detalle de venta' });
    }
};

const deleteDetalleVenta = async (req, res) => {
    try {
        const { id } = req.params;
        const detalle = await DetalleVenta.findByPk(id);
        if (detalle) {
            await detalle.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Detalle de venta no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el detalle de venta' });
    }
};

module.exports = {
    getDetallesVenta,
    getDetalleVenta,
    postDetalleVenta,
    putDetalleVenta,
    deleteDetalleVenta,
};
