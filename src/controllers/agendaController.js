// src/controllers/agendaController.js
const Agenda = require('../models/Agenda');

// Obtener todas las agendas
exports.getAllAgendas = async (req, res) => {
  try {
    const agendas = await Agenda.findAll();
    res.status(200).json(agendas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las agendas', error: error.message });
  }
};

// Obtener una agenda por ID
exports.getAgendaById = async (req, res) => {
  try {
    const agenda = await Agenda.findByPk(req.params.id);
    if (!agenda) return res.status(404).json({ message: 'Agenda no encontrada' });
    res.json(agenda);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la agenda', error: error.message });
  }
};

// Crear una nueva agenda
exports.createAgenda = async (req, res) => {
  try {
    const newAgenda = await Agenda.create(req.body);
    res.status(201).json(newAgenda);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la agenda', error: error.message });
  }
};

// Actualizar una agenda existente
exports.updateAgenda = async (req, res) => {
  try {
    const agenda = await Agenda.findByPk(req.params.id);
    if (!agenda) return res.status(404).json({ message: 'Agenda no encontrada' });

    await agenda.update(req.body);
    res.json(agenda);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar la agenda', error: error.message });
  }
};

// Eliminar una agenda
exports.deleteAgenda = async (req, res) => {
  try {
    const agenda = await Agenda.findByPk(req.params.id);
    if (!agenda) return res.status(404).json({ message: 'Agenda no encontrada' });

    await agenda.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la agenda', error: error.message });
  }
};
