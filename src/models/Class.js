// src/models/Class.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Class = sequelize.define('Class', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  instructor: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'Classes'
});

module.exports = Class;
