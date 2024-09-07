const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto', {
  producto_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  venta_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  producto_fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  costo: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  nombre_producto: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  categoria_producto_id: {
    type: DataTypes.INTEGER,
    allowNull: true, // Puede ser nulo 
  },
  ultima_actualizacion: {
    type: DataTypes.DATE,
    allowNull: true, // Puede ser nulo 
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: true, // Puede ser nulo 
  },
});

module.exports = Producto;
