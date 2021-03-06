const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Annonce = require("../models/Annonce");
//notification par email
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "abdellioumayma210@gmail.com",
        pass: "123456789oaoa@@",
    },
});
//add admin
exports.addAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email: email });
        if (admin) {
            res.status(400).send({ msg: "admin already exist" });
        }
        const newAdmin = new Admin({
            email,
            password,
        });
        //bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        newAdmin.password = hashedPassword;
        await newAdmin.save();
        res.status(200).send({
            msg: "New admin added succesfully...",
            newAdmin,
        });
    } catch (error) {
        res.status(400).send({
            msg: "New admin cannot be added",
            error,
        });
    }
};
//signin
exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundAdmin = await Admin.findOne({ email });
        if (!foundAdmin) {
            res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
        }
        const checkPassword = await bcrypt.compare(
            password,
            foundAdmin.password
        );
        if (!checkPassword) {
            res.status(400).send({ errors: [{ msg: "it's a bad credential" }] });
        }

        // creation token
        const token = jwt.sign(
            {
                id: foundAdmin._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        );

        res.status(200).send({
            msg: "login successfully,welcome",
            admin: foundAdmin,
            token,
        });
    } catch (error) {
        res.status(400).send({ msg: "cannot login ", error });
    }
};
exports.getAllAnnonce = async (req, res) => {
    try {
        const annonce = await Annonce.find({ status: "published" });
        res.status(200).send({
            annonce,
        });
    } catch (error) {
        res.status(400).send({ msg: "failed", error });
    }
};
exports.getAllDrafts = async (req, res) => {
    try {
        const annonce = await Annonce.find({ status: "drafts" });
        res.status(200).send({
            annonce,
        });
    } catch (error) {
        res.status(400).send({ msg: "failed", error });
    }
};
exports.deleteAnonnce = async (req, res) => {
    try {
        const { _id } = req.params;
        await Annonce.findOneAndDelete({ _id });
        res.status(200).send({ msg: "annonce rejected" });
    } catch (error) {
        res.status(400).send({
            msg: "cannot delete this annonce",
            error,
        });
    }
};

exports.editAnnonce = async (req, res) => {
    try {
        const annonce = await Annonce.findOneAndUpdate(
            { _id: req.body._id },
            { $set: { status: "published" } }
        );
        var mailOptions = {
            from: "abdellioumayma210@gmail.com",
            to: annonce.email,
            subject: "Votre annonce est accept??e",
            text: "Votre annonce est accept??e et merci pour votre confiance",
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
        res.status(200).send({ msg: "annonce publi??e" });
    } catch (error) {
        res.status(400).send({
            msg: "cannot published",
            error,
        });
    }
};
