// src/routes/billingRoutes.js
const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

router.get('/', billingController.getAllBillings);
router.get('/:id', billingController.getBillingById);
router.post('/', billingController.createBilling);
router.put('/:id', billingController.updateBilling);
router.delete('/:id', billingController.deleteBilling);

module.exports = router;
