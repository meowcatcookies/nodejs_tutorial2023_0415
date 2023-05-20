const express = require("express");
const router = express.Router();
const fs = require("fs")
const validator = require("../utils/validator");
let readFilePromise = (dataPath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) reject(err);
            else resolve(JSON.parse(data));
        });
    });
};
router.get("/page", (req, res) => {
    res.render("dramas.html");
});
router.use(
    validator.isTokenExsit,
    validator.isTokenValid,

);
router.get("/list",
    // validator.isTokenExsit,
    // validator.isTokenValid,
    (req, res, next) => {
        if (!req.query.type) {
            console.log("發生錯誤!");
            res.status(400).json({ mes: "type缺少" });
        } else {
            next();
        };
    },
    (req, res, next) => {
        let data = ["犯罪", "殭屍", "愛情", "政治", "其他", "全"]
        if (data.indexOf(req.query.type) === -1) {
            console.log("type值錯誤");
            res.status(400).json({ mes: "type值錯誤" })
        } else {
            next();
        };
    },

    async (req, res) => {
        try {
            let data = await readFilePromise("models/sample2.json");
            let type = req.query.type;
            if (type === "全") {
                res.json({ result: data });
            } else {
                let filteredData = data.filter(ele => ele["category"] === type);
                res.json({ result: filteredData });
            };
        } catch (err) {
            res.status(500).json({ mes: "系統有問題!" });
        };

    });
router.post("/data",
    // validator.isTokenExsit,
    // validator.isTokenValid,

    async (req, res) => {
        try {
            let data = await readFilePromise("models/sample2.json");
            let lastestDramaId = data.map(ele => ele["dramaId"])
                .filter(v => v !== undefined)
                .sort((a, b) => b - a)[0];
            let NewDramaId = Number(lastestDramaId) + 1;
            req.body.dramaId = String(NewDramaId);
            data.push(req.body);

            fs.writeFileSync("models/sample2.json", JSON.stringify(data), "utf8");
            res.json({ mes: "OK" })
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ mes: "系統有問題!" });
        };
    });
module.exports = router;