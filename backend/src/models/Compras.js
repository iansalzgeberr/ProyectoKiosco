const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Proveedor = require('./Proveedor');

const Compra = sequelize.define('Compra', {
    compra_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    proveedor_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Proveedor,
            key: 'proveedor_id'
        },
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'compras',
    timestamps: false
});

// Definir asociaciones
Proveedor.hasMany(Compra, { foreignKey: 'proveedor_id' });
Compra.belongsTo(Proveedor, { foreignKey: 'proveedor_id' });

module.exports = Compra;
