const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://Oumaymaa:123456789oaoa@cluster0.dq3z2.mongodb.net/TESTAPP?retryWrites=true&w=majority"
        );
        console.log("Database connected");
    } catch (error) {
        console.log("Database Failed", error);
    }
};
module.exports = connectDB;
