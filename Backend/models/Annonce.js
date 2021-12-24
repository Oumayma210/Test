const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const annonceSchema = new Schema({
    title: {
        type: String,
        required: true,
        min: 4,
        max: 200,
    },
    price: {
        type: Number,
        required: true,
    },
    status: String,
    Image: String,
    email: { type: String, required: true },
    tel: { type: Number, required: true },
});
module.exports = mongoose.model("annonce", annonceSchema);
