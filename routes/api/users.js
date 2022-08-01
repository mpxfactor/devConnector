const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "minimum length required is 6").isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("successfully added a user");
  }
);

module.exports = router;
