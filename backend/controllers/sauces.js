const Sauce = require("../models/Sauces");
const fs = require('fs');
const { error } = require("console");

//Logique métier de la diffusion de toutes les sauces
exports.getAllSauces = (req, res) => {
    Sauce.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(500).json({ error }));
};

//Logique de récupération d'une seule sauce
exports.getOneSauce = (req, res) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => {
            if (!sauce) {
                return res.status(404).json({ message: "Sauce non trouvée" })
            }
            res.status(200).json(sauce);
        })
        .catch(error => res.status(500).json({ error }));
};

//Logique de la créaton d'une sauce
exports.createOneSauce = (req, res) => {
    console.log(req.body);
    const sauce = new Sauce({
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    sauce.save()
        .then(() => res.status(201).json({ message: 'Sauce créée !' }))
        .catch(error => res.status(400).json({ error }));
};

//Logique de la mise à jour d'une sauce et/ou de son image
exports.updateOneSauce = (req, res) => {
    const sauceObject = req.file ?
        {
            ...req.body,
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };

    Sauce.findOne({ _id: req.params.id })
        .then(sauce => {
            if (!sauce) {
                return res.status(404).json({ message: "Sauce non trouvée" })
            }
            const oldImageName = sauce.imageUrl.split('/images/')[1];
            Sauce.updateOne({ _id: req.params.id }, { ...sauceObject })
                .then(() => {
                    if (req.file) {
                        fs.unlink(`images/${oldImageName}`, () => {
                            console.log("fichier supprimé");
                        });
                    }
                    res.status(200).json({ message: 'mis à jour de la sauce' })
                })
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));


};

//Logique de la suppression d'une sauce et son image
exports.deleteOneSauce = (req, res) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => {
            if (!sauce) {
                return res.status(404).json({ message: "Sauce non trouvée" })
            }
            const filename = sauce.imageUrl.split('/images/')[1];
            Sauce.deleteOne({ _id: req.params.id })
                .then(() => {
                    fs.unlink(`images/${filename}`, () => {
                        console.log("fichier supprimé");
                    });
                    res.status(200).json({ message: 'Sauce supprimée' })
                })
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

//Logique de la possibilité à l'utilisateur de liker ou disliker une sauce
exports.likeOrDislikeOneSauce = (req, res) => {
    Sauce.findOne({ _id: req.params.id })
        .then()
        .catch(error => res.status(500).json({ error }));
};