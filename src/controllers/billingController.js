// src/controllers/billingController.js
const Billing = require('../models/Billing');

// Obtener todas las facturas
exports.getAllBillings = async (req, res) => {
  try {
    const billings = await Billing.findAll();
    res.status(200).json(billings);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las facturas', error: error.message });
  }
};

// Obtener una factura por ID
exports.getBillingById = async (req, res) => {
  try {
    const billing = await Billing.findByPk(req.params.id);
    if (!billing) return res.status(404).json({ message: 'Factura no encontrada' });
    res.json(billing);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la factura', error: error.message });
  }
};

// Crear una nueva factura
exports.createBilling = async (req, res) => {
  try {
    const newBilling = await Billing.create(req.body);
    res.status(201).json(newBilling);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la factura', error: error.message });
  }
};

// Actualizar una factura
exports.updateBilling = async (req, res) => {
  try {
    const billing = await Billing.findByPk(req.params.id);
    if (!billing) return res.status(404).json({ message: 'Factura no encontrada' });

    await billing.update(req.body);
    res.json(billing);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar la factura', error: error.message });
  }
};

// Eliminar una factura
exports.deleteBilling = async (req, res) => {
  try {
    const billing = await Billing.findByPk(req.params.id);
    if (!billing) return res.status(404).json({ message: 'Factura no encontrada' });

    await billing.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la factura', error: error.message });
  }
};
