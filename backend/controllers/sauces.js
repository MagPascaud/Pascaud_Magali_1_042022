const Sauce = require("../models/Sauces");



exports.getAllSauces = (req, res) => {
    res.status(200).json({ message: 'array de toutes les sauces' });
};

exports.getOneSauce = (req, res) => {
    res.status(200).json({ message: 'sauce et son id' });
};

exports.createOneSauce = (req, res) => {
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    const sauce = new Sauce({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    sauce.save()
        .then(() => res.status(201).json({ message: 'Sauce créée !' }))
        .catch(error => res.status(400).json({ error }));
};


exports.updateOneSauce = (req, res) => {
    const sauceObject = req.file ?
        {
            ...JSON.parse(req.body.sauce),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };
    Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'mis à jour de la sauce' }))
            .catch(error => res.status(400).json({ error }));
};


exports.deleteOneSauce = (req, res) => {
    res.status(200).json({ message: 'suppressions de la sauce' });
};

exports.likeOrDislikeOneSauce = (req, res) => {
    res.status(200).json({ message: 'like et dislike sauce' });
};