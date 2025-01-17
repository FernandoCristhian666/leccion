const express = require('express');
const autoController = require('./autoController');

const router = express.Router();

router.get('/autos', autoController.getAll);
router.get('/autos/:id', autoController.getById);
router.post('/autos', autoController.create);
router.put('/autos/:id', autoController.update);
router.delete('/autos/:id', autoController.delete);

module.exports = router;