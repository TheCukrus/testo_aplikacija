const path = require("path")
const express = require("express")
const router_questions = require("./controllers/controller_question.js")
const config = require("./utils/config.js")

const express1 = express();

//middlevare

const path_1 = path.resolve(__dirname, "..", "frontend", "build")
express1.use(express.static(path_1))

express1.use(express.json())

express1.use("/api/questions", router_questions)

module.exports = {
    express1
}