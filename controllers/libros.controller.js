const libro = require('../models/libros');
const libroCtrl = {};
const tokens="Token123"


libroCtrl.getLibros = async (req, res) => {
    if (tokens == req.params.token) {
        const Libros = await libro.find({});
        res.json(Libros);
    } else {
        res.json({
            'Error': 'Token error'
        });
    }

};

libroCtrl.createlibro = async (req, res) => {
    const newlibro = new libro({
        autor: req.body.autor,
        paginas: req.body.paginas,
        libro: req.body.libro,
        sinopsis: req.body.sinopsis,
        genero: req.body.genero,
        stok: req.body.stok,
        precio: req.body.precio,
        imagen: req.body.imagen
    });
    if (tokens == req.params.token) {
        await newlibro.save();
        res.json({
            'status': 'libro saved'
        });
    } else {
        res.json({
            'Error': 'Token error'
        });
    }
    console.log(req.body);
};

libroCtrl.getlibro = async (req, res) => {
    if (tokens == req.params.token) {
        const find = await libro.findById(req.params.id);
        res.json(find);
    } else {
        res.json({
            'Error': 'Token error'
        });
    }

};

libroCtrl.editlibro = async (req, res) => {
    const { id } = req.params.id;
    const newlibro = {
        autor: req.body.autor,
        paginas: req.body.paginas,
        libro: req.body.libro,
        sinopsi: req.body.sinopsi,
        genero: req.body.genero,
        precio: req.body.precio,
        imagen: req.body.imagen
    }
    //(id, objeto nuevo, si no existe, crealo)
    if (tokens == req.params.token) {
        await libro.findByIdAndUpdate(id, { $set: newlibro }, { new: true });
        res.json({
            status: 'Libro update'
        });
    } else {
        res.json({
            'Error': 'Token error'
        });
    }
};

libroCtrl.deletelibro = async (req, res) => {
    if (tokens == req.params.token) {
        await user.findByIdAndRemove(req.params.id);
        res.json({
            status: 'Libro deleted'
        });
    } else {
        res.json({
            'Error': 'Token error'
        });
    }

};

module.exports = libroCtrl;