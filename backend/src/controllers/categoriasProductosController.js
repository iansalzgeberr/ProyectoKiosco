const CategoriaProducto = require('../models/CategoriasProductos');

const getCategoriasProductos = async (req, res) => {
    try {
        const categorias = await CategoriaProducto.findAll();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las categorías de productos' });
    }
};

const getCategoriaProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await CategoriaProducto.findByPk(id);
        if (categoria) {
            res.status(200).json(categoria);
        } else {
            res.status(404).json({ error: 'Categoría de producto no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la categoría de producto' });
    }
};

const postCategoriaProducto = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const nuevaCategoria = await CategoriaProducto.create({ nombre, descripcion });
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear la categoría de producto' });
    }
};

const putCategoriaProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        const categoria = await CategoriaProducto.findByPk(id);
        if (categoria) {
            await categoria.update({ nombre, descripcion });
            res.status(200).json(categoria);
        } else {
            res.status(404).json({ error: 'Categoría de producto no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la categoría de producto' });
    }
};

const deleteCategoriaProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await CategoriaProducto.findByPk(id);
        if (categoria) {
            await categoria.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Categoría de producto no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la categoría de producto' });
    }
};

module.exports = {
    getCategoriasProductos,
    getCategoriaProducto,
    postCategoriaProducto,
    putCategoriaProducto,
    deleteCategoriaProducto,
};
