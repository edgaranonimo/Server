const express = require('express');
const router = express.Router();

const compraCtrl = require('../controllers/compras.controller');

router.get('/:token', compraCtrl.getcompra);

router.post('/:token',compraCtrl.createcompra);

router.get('/:id:token',compraCtrl.getcompra);

module.exports = router;