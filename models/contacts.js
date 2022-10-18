const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
    name: { type: String, required: true },
    email: { type : String },
    phone: { type : String },
    id_user: { type : String, required: true },

});

module.exports = mongoose.model('Contacts', ContactSchema);