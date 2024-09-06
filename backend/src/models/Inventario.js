const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Producto = require('./Producto');

const Inventario = sequelize.define('Inventario', {
    inventario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    producto_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Producto,
            key: 'producto_id'
        },
        allowNull: false
    },
    cantidad_inicial: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad_final: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad_entrante: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad_saliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_actualizacion: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

// Definir asociaciones
Producto.hasMany(Inventario, { foreignKey: 'producto_id' });
Inventario.belongsTo(Producto, { foreignKey: 'producto_id' });

module.exports = Inventario;
