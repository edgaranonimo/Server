const contact = require('../models/contacts');
const contactCtrl = {};
const tokens="Token123"

contactCtrl.getContacts = async (req, res) => {
    const contacts = await contact.find(req.body);
    res.json(contacts);
};

contactCtrl.createContact = async (req,res) => {
    const newContact = new contact({
        name: req.body.name,
        email: req.body.email,
        phone : req.body.phone,
        id_user: req.body.id_user
    });
    await newContact.save();
    res.json({
       'status' : 'Contact saved'
    });
};

contactCtrl.getContact = async (req,res) => {
    const find = await contact.findById(req.params.id);
    res.json(find);
};

contactCtrl.editCotact = async (req,res) => {
    const { id } = req.params;
    const newContact = {
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        id_user : req.body.id_user
    }
    //(id, objeto nuevo, si no existe, crealo)
    await contact.findByIdAndUpdate(id, {$set: newContact}, {new:true});
    res.json({
        status: 'Contact updated'
    });
};

contactCtrl.deleteContact = async (req,res) => {
    await contact.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Contact deleted'
    });
};

module.exports = contactCtrl;