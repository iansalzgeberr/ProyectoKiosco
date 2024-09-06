const Inventario = require('../models/Inventario');

const getInventarios = async (req, res) => {
    try {
        const inventarios = await Inventario.findAll();
        res.status(200).json(inventarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los inventarios' });
    }
};

const getInventario = async (req, res) => {
    try {
        const { id } = req.params;
        const inventario = await Inventario.findByPk(id);
        if (inventario) {
            res.status(200).json(inventario);
        } else {
            res.status(404).json({ error: 'Inventario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el inventario' });
    }
};

const postInventario = async (req, res) => {
    try {
        const { producto_id, cantidad_inicial, cantidad_final, cantidad_entrante, cantidad_saliente, fecha_actualizacion } = req.body;
        const nuevoInventario = await Inventario.create({
            producto_id,
            cantidad_inicial,
            cantidad_final,
            cantidad_entrante,
            cantidad_saliente,
            fecha_actualizacion
        });
        res.status(201).json(nuevoInventario);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el inventario' });
    }
};

const putInventario = async (req, res) => {
    try {
        const { id } = req.params;
        const { producto_id, cantidad_inicial, cantidad_final, cantidad_entrante, cantidad_saliente, fecha_actualizacion } = req.body;
        const inventario = await Inventario.findByPk(id);
        if (inventario) {
            await inventario.update({ producto_id, cantidad_inicial, cantidad_final, cantidad_entrante, cantidad_saliente, fecha_actualizacion });
            res.status(200).json(inventario);
        } else {
            res.status(404).json({ error: 'Inventario no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el inventario' });
    }
};

const deleteInventario = async (req, res) => {
    try {
        const { id } = req.params;
        const inventario = await Inventario.findByPk(id);
        if (inventario) {
            await inventario.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Inventario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el inventario' });
    }
};

module.exports = {
    getInventarios,
    getInventario,
    postInventario,
    putInventario,
    deleteInventario,
};
