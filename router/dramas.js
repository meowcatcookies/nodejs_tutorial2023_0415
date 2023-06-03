const express = require("express");
const router = express.Router();

const validator = require("../utils/validator");
const model = require("../models/dramas");
router.get("/page", (req, res) => {
    res.render("dramas.html");
});
//查詢影集 GET req dramas/list?type=?全or req.body

router.get("/list", async (req, res) => {
    try {
        // let data = await model.find();
        let condition = req.query.type === "全" ? {} : { "category": req.query.type };
        let data = await model.find(condition);
        res.json({ result: data });
    } catch (err) {
        res.status(500).json({ message: "sever發生錯誤!" })
        console.log(err);
    }
});

//新增影集 POST dramas/detail
// category: 犯罪,name: wqe,score: 1
router.post("/detail", async (req, res) => {
    try {
        let element = await model.findOne({}, { dramaId: 1 })
            .sort({ dramaId: -1 });

        let newestDramId = Number(element["dramaId"]) + 1;

        req.body["dramaId"] = String(newestDramId);
        console.log(req.body);
        let result = await model.create(req.body);
        res.json({ message: "ok." });
    } catch (err) {
        res.status(500).json({ message: "sever發生錯誤!" })
        console.log(err);
    }
});

//修改 PUT name: 132,score: 1
router.put("/detail/:dramaId", async (req, res) => {
    try {
        let putId = req.params.dramaId;
        console.log({ putId })
        let result = await model.updateOne({
            "dramaId": putId
        }, {
            "$set": { "name": req.body.name, "score": req.body.score }
        })

        console.log(result)
        res.json({ message: "ok." });
    } catch (err) {
        res.status(500).json({ message: "sever發生錯誤!" })
        console.log(err);
    }
});
//刪除 DELETE 影集編號 detail/" + dramaId
router.delete("/detail/:dramaId", async (req, res) => {
    try {
        let deleteId = req.params.dramaId;
        console.log({ deleteId })
        let result = await model.deleteOne({
            "dramaId": deleteId
        })
        console.log(result)
        res.json({ message: "ok." });
    } catch (err) {
        res.status(500).json({ message: "sever發生錯誤!" })
        console.log(err);
    }
});

module.exports = router;