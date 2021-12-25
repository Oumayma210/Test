const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    email: String,
    password: String,
});
//converts to model 
module.exports = mongoose.model("admin", adminSchema);
