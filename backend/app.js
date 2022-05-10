const path = require("path")
const express = require("express")
const router_questions = require("./controllers/controller_question.js")
const router_login = require("./controllers/controller_login.js")
const cookie_parser = require("cookie-parser")

const express1 = express();

//middlevare

const path_1 = path.resolve(__dirname, "..", "frontend", "build")
express1.use(express.static(path_1))

express1.use(express.json())

express1.use(cookie_parser())

express1.use("/api/questions", router_questions);
express1.use("/api/login", router_login);


module.exports = {
    express1
}