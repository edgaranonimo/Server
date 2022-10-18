const user = require('../models/users');
const userCtrl = {};
var md5 = require('md5');
const tokens="Token123"


userCtrl.getUsers = async (req, res) => {
    if (tokens == req.params.token) {
        const users = await user.find();
        res.json(users);
    } else {
        res.json({
            'Error': 'Token error'
        });
    }
    console.log(req.params.token + 'hola' + tokens);

};

userCtrl.createUser = async (req, res) => {
    const newUsr = new user({
        name: req.body.name,
        role: req.body.role,
        password: req.body.password,
        email: req.body.email,
        direccion: req.body.direccion
    });
    if (tokens == req.params.token) {
        await newUsr.save();
        res.json({
            'status': 'User saved'
        });
    } else {
        res.json({
            'Error': 'Token error'
        });
    }
    console.log(req.body);
};

userCtrl.getUser = async (req, res) => {
    if (tokens == req.params.token) {
        const find = await user.findById(req.params.id);
        res.json(find);
    } else {
        res.json({
            'Error': 'Token error'
        });
    }
};

userCtrl.editEmployee = async (req, res) => {
    const { id } = req.params.id;
    const newUsr = {
        name: req.body.name,
        role: req.body.role,
        password: req.body.password,
        email: req.body.email,
        direccion: req.body.direccion,
        compras: req.body.compras
    }
    //(id, objeto nuevo, si no existe, crealo)
    if (tokens == req.params.token) {
        await user.findByIdAndUpdate(id, { $set: newUsr }, { new: true });
        res.json({
            status: 'Employee update'
        });
    } else {
        res.json({
            'Error': 'Token error'
        });
    }

};

userCtrl.deleteEmployee = async (req, res) => {
    if (tokens == req.params.token) {
        await user.findByIdAndRemove(req.params.id);
        res.json({
            status: 'Employee deleted'
        });
    } else {
        res.json({
            'Error': 'Token error'
        });
    }

};

module.exports = userCtrl;