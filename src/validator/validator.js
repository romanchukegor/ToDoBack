const { check, validationResult } = require("express-validator");

exports.taskValidator = [
  check("text")
    .trim()
    .isString()
    .notEmpty()
    .withMessage("The task must be not empty !!!")
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.json({ error: error[0].msg });
  }

  next();
};
