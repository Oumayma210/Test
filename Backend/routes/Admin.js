//require express
const express = require("express");
const admin = require("../controllers/Admin");
const router = express.Router();
// const isAuthAdm = require("../middelware/authAdm");
const { validation, loginValidation } = require("../middelware/validator");
// add admin
router.post("/add_admin", admin.addAdmin);
//signin
router.post("/signin", loginValidation(), validation, admin.signin);

// router.get("/current", isAuthAdm, (req, res) => {
//     res.send(req.admin);
// });
//Admin--Anyone
router.get("/", admin.getAllAnnonce);
router.get("/getdrafts", admin.getAllDrafts);
router.delete("/:_id", admin.deleteAnonnce);
router.post("/:_id", admin.editAnnonce);
module.exports = router;
