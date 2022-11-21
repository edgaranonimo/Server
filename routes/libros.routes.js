const express = require('express');
const router = express.Router();

const libroCtrl = require('../controllers/libros.controller');

router.get('/?:token', libroCtrl.getLibros);

router.post('/?:token',libroCtrl.createlibro);

router.put('/:id&:token',libroCtrl.editlibro);

router.delete('/:id&:token',libroCtrl.deletelibro);

module.exports = router;