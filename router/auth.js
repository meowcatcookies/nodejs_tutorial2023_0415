const express = require("express");
const router = express.Router();
const validator = require("../utils/validator");

router.post("/",
    validator.isAccountExsit,
    validator.isUserValid,
    validator.setSessionInfo,
    (req, res, next) => {
        console.log("OK");
        res.json({ redirect: "/" });
    }
);


module.exports = router;