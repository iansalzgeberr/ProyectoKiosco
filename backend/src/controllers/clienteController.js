const Cliente = require('../models/Cliente');

const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
};

const getCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);
        if (cliente) {
            res.status(200).json(cliente);
        } else {
            res.status(404).json({ error: 'Cliente no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener al cliente' });
    }
};

const postCliente = async (req, res) => {
    try {
        const { cliente_id, nombre } = req.body;
        const nuevoCliente = await Cliente.create({ cliente_id, nombre });
        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el cliente' });
    }
};

const putCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { cliente_id, nombre } = req.body;
        const cliente = await Cliente.findByPk(id);
        if (cliente) {
            await cliente.update({ cliente_id, nombre });
            res.status(200).json(cliente);
        } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar al usuario' });
    }
};

const deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);
        if (cliente) {
            await cliente.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar al cliente' });
    }
};

module.exports = {
    getClientes,
    getCliente,
    postCliente,
    putCliente,
    deleteCliente,
};
