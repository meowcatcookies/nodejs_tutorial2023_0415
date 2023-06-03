const mongoose = require("mongoose");
const conn = require("./db");

const membersSchema = new mongoose.Schema({
    "name": String,
    "age": Number,
    "math_score": Number,
    // "testqq" : String
    // "math_score" : String,
}, {
    collection: "member-table",
    versionKey: false // 移除 __v 欄位
});
let membersModel = conn.model("Members", membersSchema);
let insertMain2 = async () => {
    try {
        // 正常情況
        // let result = await membersModel.create({ name : "benson" , age : 47 , math_score:100 }); 

        // 亂塞欄位
        // let result = await membersModel.create({ name : "david" , eng_score: 100 , message : "嗨嗨～～～～" }); 

        let result = await membersModel.create({ name: "Elle", math_score: 100 });
        console.log("新增的資料 :", result);
    } catch (err) {
        console.log(err);
    }
};
insertMain2();


module.exports = membersModel;