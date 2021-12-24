const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const anyoneSchema = new Schema({
    name: String,
    email: String,
});
module.exports = mongoose.model("anyone", anyoneSchema);
