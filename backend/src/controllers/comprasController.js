const Compra = require('../models/Compras');

const getCompras = async (req, res) => {
    try {
        const compras = await Compra.findAll();
        res.status(200).json(compras);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las compras' });
    }
};

const getCompra = async (req, res) => {
    try {
        const { id } = req.params;
        const compra = await Compra.findByPk(id);
        if (compra) {
            res.status(200).json(compra);
        } else {
            res.status(404).json({ error: 'Compra no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la compra' });
    }
};

const postCompra = async (req, res) => {
    try {
        const { proveedor_id, fecha, total } = req.body;
        const nuevaCompra = await Compra.create({ proveedor_id, fecha, total });
        res.status(201).json(nuevaCompra);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear la compra' });
    }
};

const putCompra = async (req, res) => {
    try {
        const { id } = req.params;
        const { proveedor_id, fecha, total } = req.body;
        const compra = await Compra.findByPk(id);
        if (compra) {
            await compra.update({ proveedor_id, fecha, total });
            res.status(200).json(compra);
        } else {
            res.status(404).json({ error: 'Compra no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la compra' });
    }
};

const deleteCompra = async (req, res) => {
    try {
        const { id } = req.params;
        const compra = await Compra.findByPk(id);
        if (compra) {
            await compra.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Compra no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la compra' });
    }
};

module.exports = {
    getCompras,
    getCompra,
    postCompra,
    putCompra,
    deleteCompra,
};
