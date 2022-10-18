const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.controller');

router.get('/:token', userCtrl.getUsers);

router.post('/:token',userCtrl.createUser);

router.get('/:id:token',userCtrl.getUser);

router.put('/:id:token',userCtrl.editEmployee);

router.delete('/:id:token',userCtrl.deleteEmployee);

module.exports = router;