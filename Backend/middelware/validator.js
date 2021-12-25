const { validationResult, check } = require("express-validator");
exports.loginValidation = () => [
    check("email", "enter a valid email!!").isEmail(),
    check("password", "enter a valid password!!").isLength({ min: 6 }),
];
// creation fct validation
exports.validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
