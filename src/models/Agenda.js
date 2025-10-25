// src/models/Agenda.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Agenda = sequelize.define('Agenda', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pendiente'
  }
}, {
  timestamps: true,
  tableName: 'Agendas'
});

module.exports = Agenda;
