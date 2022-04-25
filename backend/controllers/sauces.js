const Sauce = require("../models/Sauces");



exports.getAllSauces = (req, res) => {
    res.status(200).json({ message: 'array de toutes les sauces' });
};

exports.getOneSauce = (req, res) => {
    res.status(200).json({ message: 'sauce et son id' });
};

exports.createOneSauce = (req, res) => {
    console.log(Sauce);
    const sauce = new Sauce(req.body);
    sauce.save()
        .then(() => res.status(201).json({ message: 'Sauce créée !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.updateOneSauce = (req, res) => {
    res.status(200).json({ message: 'mis à jour de la sauce' });
};

exports.deleteOneSauce = (req, res) => {
    res.status(200).json({ message: 'suppressions de la sauce' });
};

exports.likeOrDislikeOneSauce = (req, res) => {
    res.status(200).json({ message: 'like et dislike sauce' });
};