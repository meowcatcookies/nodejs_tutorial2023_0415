///建立Router
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.send("我是 /books 的根路徑");
});
router.get("/page", (req, res) => {
    res.json({ message: "我是/books/page 的路徑!!" });
});
module.exports = router;