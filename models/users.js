const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    role: { type : String, required: true },
    password: { type : String, required: true },
    email: { type : String, required: true },
    direccion: { type : String, required: true },
    compras: { type :[] , required: false },
});

module.exports = mongoose.model('Users', UserSchema);