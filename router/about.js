const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.send("這是about的router");
});
router.get("/helloqq", (req, res) => {
    let name = req.query.name;
    res.send(`你好，${name},來到了aboutYOU`);
});
module.exports = router;