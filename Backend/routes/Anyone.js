const express = require("express");
const anyone = require("../controllers/Anyone");
const router = express.Router();
//addannonce
router.post("/add_annonce", anyone.addAnnonce);
