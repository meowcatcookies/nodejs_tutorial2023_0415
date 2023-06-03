const mongoose = require("mongoose");

const conn = require("./db");

const mongoSchema = new mongoose.Schema({
    // "_id": String,
    "dramaId": String,
    "category": String,
    "name": String,
    "score": Number
}, {
    collection: "dramas-table",
    versionKey: false // 移除 __v 欄位
});




let dramasModel = conn.model("Dramas", mongoSchema);
module.exports = dramasModel;