//const express = require("express");
//const router = express.Router();
//M1
let isTokenExsit = (req, res, next) => {
    if (!req.headers["x-jeff-token"]) {
        console.log("[M1]無token!")
        res.status(400).json({ mes: "無token" })
    } else {
        next()
    };
};
//M2
let isTokenValid = (req, res, next) => {
    if (req.headers["x-jeff-token"] !== "qwer626") {
        console.log("[M2]token錯誤!")
        res.status(403).json({ mes: "您沒有權限" })
    } else {
        next()
    };
};
let isAccountExsit = (req, res, next) => {
    if (!req.body.account || !req.body.passwd) {
        console.log("此人無填帳密")
        res.status(400).json({ message: "請輸入帳號 密碼!" });
    } else {
        next();
    };
};
let isUserValid = (req, res, next) => {
    if (req.body.account !== "joe" && req.body.passwd !== "1234") {
        console.log("此人帳密錯誤")
        res.status(400).json({ message: "您的帳密錯誤，請重試" })
    } else {
        next()
    };
};
let setSessionInfo = (req, res, next) => {
    req.session.userInfo = {
        name: "Joe",
        isLogined: true
    };
    next();
};
let isUserLogined = (req, res, next) => {
    if (!req.session.userInfo || req.session.userInfo.isLogined === false) {
        //res.json({ message: "您尚未登入" });
        res.redirect("/login");
        return;
    } else {
        next()
    }
}
module.exports = {
    "isTokenExsit": isTokenExsit,
    "isTokenValid": isTokenValid,
    "isAccountExsit": isAccountExsit,
    "isUserValid": isUserValid,
    "setSessionInfo": setSessionInfo,
    "isUserLogined": isUserLogined
};