// src/routes/agendaRoutes.js
const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agendaController');

router.get('/', agendaController.getAllAgendas);
router.get('/:id', agendaController.getAgendaById);
router.post('/', agendaController.createAgenda);
router.put('/:id', agendaController.updateAgenda);
router.delete('/:id', agendaController.deleteAgenda);

module.exports = router;
