const mongoose = require('mongoose');
const { Schema } = mongoose;

const comprasSchema = new Schema({
    cliente: { type : String, required: true },   
    articulos: { type: [], required: true },
    monto: { type : Number, required: true },
});

module.exports = mongoose.model('compras', comprasSchema);