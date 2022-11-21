const user = require('../models/users');
const userCtrl = {};
var md5 = require('md5');
const tokens="Token123";


userCtrl.getUsers = async (req, res) => {
    let token="";
    let email="";
    let value=0;
    let emailCheck=false;
    for (let i = 0; i < req.params.token.length; i++) {
        if (req.params.token.substring(i,i+1)=="&") {
            value = i;
            emailCheck=true;
        }
    }
    if(value==0){
        token = req.params.token;
    }else{
        token = req.params.token.substring(value+1, req.params.token.length);
    }
    if (tokens == token) {
        if (emailCheck) {
            email = req.params.token.substring(0, value); 
            const find = await user.find({'email': email});
            if(find.length>0){
                res.json(find);
            }else{
                res.json({
                    'email': "none",
                    "available": "true"
                })
            }
        }else{
            const users = await user.find();
        res.json(users);
        }
    } else {
        res.json({
            'Error': 'Token error',
            'Errorsote': 'soy yo',
            'Error2': token
        });
    }
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

userCtrl.getUserid = async (req, res) => {
    if (tokens == req.params.token) {
        const find = await user.findById(req.params.id);
        res.json(find);
    } else {
        res.json({
            'Error': 'Token error',
            'Error2': 'Token error'
        });
    }
};

userCtrl.getUseremail = async (req, res) => {
    console.log("metodo correcto");
    let token="";
    let email="";
    let value=0;
    for (let i = 0; i < req.params.length; i++) {
        if (req.params.substring(i,i+1)=="&") {
            value = i;
        }
    }
    token = req.params.substring(0,value);
    email = req.params.substring(value, req.params.length);
    if (tokens == token) {
        console.log("correcto");
        const find = await user.findByEmail(email);
        res.json(find);
    } else {
        res.json({
            'Error': 'Token error',
            'token': token,
            'mail': email
        });
        console.log("incorrecto");
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