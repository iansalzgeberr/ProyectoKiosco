const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CategoriaProducto = sequelize.define('CategoriaProducto', {
    categoria_producto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.CHAR(50),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.CHAR(50),
        allowNull: false
    }
});

module.exports = CategoriaProducto;
