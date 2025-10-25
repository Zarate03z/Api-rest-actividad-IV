// src/models/Billing.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Billing = sequelize.define('Billing', {
  invoiceNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  clientName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pendiente' // puede ser pendiente, pagado, cancelado
  }
}, {
  timestamps: true,
  tableName: 'Billings'
});

module.exports = Billing;
