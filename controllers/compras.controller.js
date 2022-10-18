const compra = require('../models/compras');
const compraCtrl = {};
const tokens="Token123"


compraCtrl.getcompra = async (req, res) => {
    if (tokens = req.params.token) {
        const compra = await compra.find({});
        res.json(compra);
    } else {
        res.json({
            'Error': 'Token error'
        });
    }
};

compraCtrl.createcompra = async (req, res) => {
    if (tokens == req.params.token) {
        const newcompra = new compra({
            cliente: req.body.cliente,
            articulos: req.body.articulos,
            monto: req.body.monto
        });
        await newcompra.save();
        res.json({
            'status': 'compra saved'
        });
    } else {
        res.json({
            'Error': 'Token error'
        });
    }
    console.log(req.body);
};

compraCtrl.getcompra = async (req, res) => {
    if (tokens == req.params.token) {
        const find = await compra.findById(req.params.id);
        res.json(find);
    }
    else {
        res.json({
            'Error': 'Token error'
        });
    }

};

module.exports = compraCtrl;