const mongoose = require("mongoose");
const connConfig = "mongodb://127.0.0.1:27017/node_js_tutorial";
const conn = mongoose.createConnection(connConfig);

conn.on("connected", () => {
    console.log("MongoDB is connected!");
});

const mongoSchema = new mongoose.Schema({
    "_id": String,
    "dramaId": String,
    "category": String,
    "name": String,
    "score": Number
}, {
    collection: "dramas-table"
});

let dramasModel = conn.model("Dramas", mongoSchema);

let main = async () => {
    try {
        // data = await dramasModel.find()
        // console.log(data);
        data2 = await dramasModel.find({ "score": { "$gte": 8 } }, { "name": 1, "category": 1, "_id": 0 })
        console.log(data2);
    }
    catch (err) {
        console.log(err);
    }
};
//main();

const memberSchema = mongoose.Schema({
    "_id": String,
    "name": String,
    "age": Number,
    "math_score": Number
}, {
    collection: "member-table"
});
let memberModel = conn.model("Member", memberSchema);
let main2 = async () => {
    try {
        let data2 = await memberModel.find()
        console.log(data2);
    } catch (err) {
        console.log(err);
    }
}
main2();