const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const session = require("express-session");
const portNum = 8088;
const dramasRouter = require("./router/dramas");
const authRouter = require("./router/auth");
const validator = require("./utils/validator");

const redis = require("redis");
//const redisClient = redis.createClient();
// const redisStore = require("connect-redis")(session);

// const redisClient = redis.createClient({
//     host: 'localhost', // Redis 伺服器的主機位址
//     port: 6379, // Redis 伺服器的連接埠
//     // 可能需要其他的連線參數，如密碼等
// });

app.engine("html", hbs.__express);
app.set("views", path.join(__dirname, "application", "views"));
app.use(express.static(path.join(__dirname, "application")));
app.use(express.json());
app.use(express.urlencoded({
    extended: false,   // 是否用 額外套件 解析字串
    limit: "1mb",      // 限制 參數資料大小
    parameterLimit: "10000" // 限制參數個數 
}));
app.use(session({
    //store: new redisStore({ client: redisClient }),
    secret: "abcd1234",
    resave: true,
    saveUninitialized: false,
    name: "_ntust_tutorial_id",
    ttl: 24 * 60 * 60 * 1
}));
app.use((req, res, next) => {
    console.log(req.session)
    next()
});
app.get("/", validator.isUserLogined,
    (req, res) => {
        res.render("index.html");
    });
app.get("/logout", (req, res) => {
    req.session.destroy(); // 刪掉 session 物件資料
    res.clearCookie("_ntust_tutorial_id"); // 刪掉 cookie 的 key-value pair
    res.redirect("/login"); // 導入到 /login 頁面
});
app.get("/about/us", validator.isUserLogined, (req, res) => {
    res.render("aboutus.html");
})
app.get("/login", (req, res) => {
    res.render("login.html");
})
app.use("/dramas", validator.isUserLogined, dramasRouter);
app.use("/auth", authRouter);
app.listen(portNum, () => {
    console.log(`Sever is ruinning at localhost:${portNum}`);
});