const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que la ruta sea correcta

const Venta = sequelize.define('Venta', {
    venta_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cliente_id: {
        type: DataTypes.INTEGER,
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
});

module.exports = Venta;
