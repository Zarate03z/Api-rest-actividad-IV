// src/controllers/classController.js
const Class = require('../models/Class');

// Obtener todas las clases
exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.findAll();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener clases', error: error.message });
  }
};

// Obtener una clase por ID
exports.getClassById = async (req, res) => {
  try {
    const classItem = await Class.findByPk(req.params.id);
    if (!classItem) return res.status(404).json({ message: 'Clase no encontrada' });
    res.json(classItem);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener clase', error: error.message });
  }
};

// Crear una nueva clase
exports.createClass = async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    res.status(201).json(newClass);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear clase', error: error.message });
  }
};

// Actualizar una clase existente
exports.updateClass = async (req, res) => {
  try {
    const classItem = await Class.findByPk(req.params.id);
    if (!classItem) return res.status(404).json({ message: 'Clase no encontrada' });

    await classItem.update(req.body);
    res.json(classItem);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar clase', error: error.message });
  }
};

// Eliminar una clase
exports.deleteClass = async (req, res) => {
  try {
    const classItem = await Class.findByPk(req.params.id);
    if (!classItem) return res.status(404).json({ message: 'Clase no encontrada' });

    await classItem.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar clase', error: error.message });
  }
};
