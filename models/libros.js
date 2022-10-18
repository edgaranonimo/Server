const mongoose = require('mongoose');
const { Schema } = mongoose;

const LibroSchema = new Schema({
    libro: { type : String, required: true },   
    autor: { type: String, required: true },
    paginas: { type : Number, required: true },
    sinopsis: { type : String, required: true },
    genero:{ type : String, required: true },
    stok:{ type : Number, required: true },
    precio:{type:Number,required:true},
    imagen: { type : String, required: true },
});

module.exports = mongoose.model('libros', LibroSchema);