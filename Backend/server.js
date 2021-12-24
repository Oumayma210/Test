//require express
const express = require("express");
//creation of instance
const app = express();
//require connectdb
const connectDB = require("./Config/DB");
connectDB();
const anyone = require("./controllers/Anyone");
//require of dotenv
require("dotenv").config();
//creation of port
const PORT = process.env.PORT;
//middleware global
app.use(express.json());
//package notification par email

//routes
// app.use("/anyone", require("./routes/Anyone"));
app.post("/anyone/add_annonce", anyone.addAnnonce);
app.use("/admin", require("./routes/Admin"));
//creation of server
app.listen(PORT, (error) => {
    error
        ? console.error(error)
        : console.log(`app is running on port :${PORT}`);
});
