// // require jwt
// const jwt = require("jsonwebtoken");
// //require schema
// const Admin = require("../models/Admin");
// //is auth or not
// const isAuthadm = async (req, res, next) => {
//     try {
//         const token = req.header("Authorization");
//         if (!token) {
//             res.status(401).send({ errors: [{ msg: "not authorized" }] });
//         }
//         const decoded = jwt.verify(token, process.env.SECRET_KEY);
//         const foundAdmin = await Admin.findOne({ _id: decoded.id });
//         if (!foundAdmin) {
//             res.status(401).send({
//                 errors: [{ msg: "you are not authorized" }],
//             });
//         }
//         req.Admin = foundAdmin;

//         next();
//     } catch (error) {
//         res.status(401).send({ errors: [{ msg: "nnnot authorized" }] });
//     }
// };
// module.exports = isAuthadm;
