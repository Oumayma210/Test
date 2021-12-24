const Annonce = require("../models/Annonce");
exports.addAnnonce = async (req, res) => {
    const { title, price, status, Image, email, tel } = req.body;
    try {
        const newAnnonce = new Annonce({
            title,
            price,
            status,
            Image,
            email,
            tel,
        });
        await newAnnonce.save();
        res.status(200).send({
            msg: "annonce added succesfully...",
            newAnnonce,
        });
    } catch (error) {
        res.status(400).send({
            msg: "annonce cannot be added",
            error,
        });
    }
};
